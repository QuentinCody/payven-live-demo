"use client"

import React from "react"
import { DatePicker, DateRangePicker, DateRange } from "@/components/ui/tremor/DatePicker"
import { useTimezone } from '@/lib/hooks/useTimezone'
import { Button } from "@/components/ui/tremor/Button"
import { Searchbar } from "@/components/ui/tremor/Searchbar"
import { Table } from "@tanstack/react-table"
import { useState } from "react"
import { useDebouncedCallback } from "use-debounce"
import { DataTableFilter } from "./DataTableFilter"
import { ViewOptions } from "./DataTableViewOptions"
import { zonedTimeToUTC } from '@/lib/utils/customTimezoneFunctions'
import { startOfDay, endOfDay, isWithinInterval } from 'date-fns'

const paymentMethods = [
  { value: "credit_card", label: "Credit Card" },
  { value: "debit_card", label: "Debit Card" },
  { value: "bank_transfer", label: "Bank Transfer" },
  { value: "paypal", label: "PayPal" },
]

const statuses = [
  { value: "completed", label: "Completed" },
  { value: "pending", label: "Pending" },
  { value: "failed", label: "Failed" },
]

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}

const DateFilter: React.FC<{
  table: Table<any>,
  timezone: string
}> = ({ table, timezone }) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange | undefined>(undefined)

  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date)
    if (date) {
      const utcDate = zonedTimeToUTC(date, timezone)
      const startOfDayUTC = startOfDay(utcDate)
      const endOfDayUTC = endOfDay(utcDate)
      
      table.getColumn("date")?.setFilterValue((row: any) => {
        const rowDate = new Date(row.date)
        return rowDate >= startOfDayUTC && rowDate <= endOfDayUTC
      })
    } else {
      table.getColumn("date")?.setFilterValue(undefined)
    }
  }

  const handleDateRangeChange = (dateRange: DateRange | undefined) => {
    setSelectedDateRange(dateRange)
    if (dateRange?.from && dateRange.to) {
      const fromUTC = zonedTimeToUTC(dateRange.from, timezone)
      const toUTC = zonedTimeToUTC(dateRange.to, timezone)
      const startOfRangeUTC = startOfDay(fromUTC)
      const endOfRangeUTC = endOfDay(toUTC)
      
      table.getColumn("date")?.setFilterValue((row: any) => {
        const rowDate = new Date(row.date)
        return isWithinInterval(rowDate, { start: startOfRangeUTC, end: endOfRangeUTC })
      })
    } else {
      table.getColumn("date")?.setFilterValue(undefined)
    }
  }

  return (
    <>
      <DatePicker
        placeholder="Select date"
        value={selectedDate}
        onChange={handleDateChange}
        showTimePicker
      />
      <DateRangePicker
        placeholder="Select date range"
        value={selectedDateRange}
        onChange={handleDateRangeChange}
        showTimePicker
      />
    </>
  )
}

const SearchFilter: React.FC<{
  table: Table<any>
}> = ({ table }) => {
  const [searchTerm, setSearchTerm] = useState<string>("")

  const debouncedSetFilterValue = useDebouncedCallback((value) => {
    table.getColumn("customer")?.setFilterValue(value)
  }, 300)

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value
    setSearchTerm(value)
    debouncedSetFilterValue(value)
  }

  return (
    <Searchbar
      type="search"
      placeholder="Search by customer..."
      value={searchTerm}
      onChange={handleSearchChange}
      className="w-full sm:max-w-[250px] sm:[&>input]:h-[30px]"
    />
  )
}

export function Filterbar<TData>({ table }: DataTableToolbarProps<TData>) {
  const { timezone } = useTimezone()
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex flex-wrap items-center justify-between gap-2 sm:gap-x-6">
      <div className="flex w-full flex-col gap-2 sm:w-fit sm:flex-row sm:items-center">
        <DataTableFilter
          column={table.getColumn("status")}
          title="Status"
          options={statuses}
        />
        <DataTableFilter
          column={table.getColumn("payment_method")}
          title="Payment Method"
          options={paymentMethods}
        />
        <DataTableFilter
          column={table.getColumn("amount_value")}
          title="Amount"
          type="number"
        />
        <DateFilter table={table} timezone={timezone} />
        <SearchFilter table={table} />
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="border border-gray-200 px-2 font-semibold text-indigo-600 sm:border-none sm:py-1 dark:border-gray-800 dark:text-indigo-500"
          >
            Clear filters
          </Button>
        )}
      </div>
      <ViewOptions table={table} />
    </div>
  )
}