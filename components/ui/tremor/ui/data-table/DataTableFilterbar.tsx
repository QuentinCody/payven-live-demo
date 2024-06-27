"use client"

import { Button } from "@/components/ui/tremor/Button"
import { Searchbar } from "@/components/ui/tremor/Searchbar"
import { Table } from "@tanstack/react-table"
import { useState } from "react"
import { useDebouncedCallback } from "use-debounce"
import { DataTableFilter } from "./DataTableFilter"
import { ViewOptions } from "./DataTableViewOptions"

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

export function Filterbar<TData>({ table }: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0
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
        <Searchbar
          type="search"
          placeholder="Search by customer..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full sm:max-w-[250px] sm:[&>input]:h-[30px]"
        />
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