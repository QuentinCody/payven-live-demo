"use client"

import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from "@/components/ui/tremor/Table"
import { cn } from "@/lib/utils"
import * as React from "react"
import { DataTableBulkEditor } from "@/components/ui/tremor/ui/data-table/DataTableBulkEditor"
import { Filterbar } from "@/components/ui/tremor/ui/data-table/DataTableFilterbar"
import { DataTablePagination } from "@/components/ui/tremor/ui/data-table/DataTablePagination"
import { ColumnDef, flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table"
import { useTransactions } from "@/lib/hooks/useTransactions"
import { TransactionWithCustomer } from "@/components/ui/tremor/data/schema"

interface DataTableProps {
  columns: ColumnDef<TransactionWithCustomer>[]; // Use Transaction type directly
}

export function DataTable({ columns }: DataTableProps) {
  const [pageIndex, setPageIndex]   = React.useState(0)
  const pageSize = 20
  const [rowSelection, setRowSelection] = React.useState({})
  const { transactions, totalTransactions, isLoading, error } = useTransactions(pageIndex + 1 , pageSize)

  const table = useReactTable({
    data: transactions,
    columns,
    state: {
      rowSelection,
      pagination: {
        pageIndex,
        pageSize,
      },
    },
    pageCount: Math.ceil(totalTransactions / pageSize),
    enableRowSelection: true,
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onRowSelectionChange: setRowSelection,
    onPaginationChange: (updater) => {
      if (typeof updater === 'function') {
        const newState = updater({ pageIndex, pageSize });
        setPageIndex(newState.pageIndex);
      }
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    manualPagination: true,
  })

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <>
      <div className="space-y-3">
        <Filterbar table={table} />
        <div className="relative overflow-hidden overflow-x-auto">
          <Table>
            <TableHead>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} className="border-y border-gray-200 dark:border-gray-800">
                  {headerGroup.headers.map((header) => (
                    <TableHeaderCell key={header.id} className={cn("whitespace-nowrap py-1 text-sm sm:text-xs", header.column.columnDef.meta?.className)}>
                      {flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHeaderCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} onClick={() => row.toggleSelected(!row.getIsSelected())} className="group select-none hover:bg-gray-50 hover:dark:bg-gray-900">
                    {row.getVisibleCells().map((cell, index) => (
                      <TableCell key={cell.id} className={cn(row.getIsSelected() ? "bg-gray-50 dark:bg-gray-900" : "", "relative whitespace-nowrap py-1 text-gray-600 first:w-10 dark:text-gray-400", cell.column.columnDef.meta?.className)}>
                        {index === 0 && row.getIsSelected() && (
                          <div className="absolute inset-y-0 left-0 w-0.5 bg-indigo-600 dark:bg-indigo-500" />
                        )}
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <DataTableBulkEditor table={table} rowSelection={rowSelection} />
        </div>
        <DataTablePagination table={table} pageSize={pageSize} totalRows={totalTransactions} />
      </div>
    </>
  )
}