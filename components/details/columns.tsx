//@/components/details/columns.tsx
"use client"
import React from 'react'
import { Badge, BadgeProps } from "@/components/ui/tremor/Badge"
import { Checkbox } from "@/components/ui/tremor/Checkbox"
import { Transaction } from "@/components/ui/tremor/data/schema"
import { formatters } from "@/lib/utils"
import { ColumnDef, createColumnHelper } from "@tanstack/react-table"
import { DataTableColumnHeader } from "@/components/ui/tremor/ui/data-table/DataTableColumnHeader"
import { DataTableRowActions } from "@/components/ui/tremor/ui/data-table/DataTableRowActions"
import { TransactionWithCustomer } from "@/components/ui/tremor/data/schema"
import { useTimezone } from '@/lib/hooks/useTimezone'



const columnHelper = createColumnHelper<TransactionWithCustomer>()

const DateCell = ({ value }: { value: string }) => {
  const { formatDate } = useTimezone();
  const formattedDate = React.useMemo(() => formatDate(value), [value, formatDate]);

  return <span>{formattedDate}</span>;
};


export const columns = [
  columnHelper.display({
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  }),
  columnHelper.accessor("id", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="ID" />
    ),
    cell: (info) => info.getValue(),
    enableSorting: false,
    enableHiding: false,
  }),
  columnHelper.accessor("customer", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Customer" />
    ),
    cell: (info) => info.getValue() || 'N/A',  // Display 'N/A' if customer is empty
  }),
  columnHelper.accessor("amount_value", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Amount" />
    ),
    cell: ({ row }) => {
      const amount = row.original.amount_value
      const currency = row.original.amount_currency
      return formatters.currency(amount, currency)
    },
  }),
  columnHelper.accessor("status", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ getValue }) => {
      const status = getValue()
      return (
        <Badge variant={status.toLowerCase() as BadgeProps["variant"]}>
          {status}
        </Badge>
      )
    },
  }),
  columnHelper.accessor("payment_method", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Payment Method" />
    ),
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("created_at", {
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ getValue }) => <DateCell value={getValue() as string} />,
    enableSorting: true,
  }),
  columnHelper.display({
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  }),
] as ColumnDef<Transaction>[]