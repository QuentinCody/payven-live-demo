"use client"

import { ColumnDef } from "@tanstack/react-table"
import { TransactionWithCustomer } from "@/components/ui/tremor/data/schema"
import { DataTableColumnHeader } from "./DataTableColumnHeader"
import { Badge } from "@/components/ui/tremor/Badge"
import { Checkbox } from "@/components/ui/tremor/Checkbox"
import { DataTableRowActions } from "./DataTableRowActions"

export const columns: ColumnDef<TransactionWithCustomer>[] = [
  {
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
  },
  {
    accessorKey: "id",
    header: ({ column }) => <DataTableColumnHeader column={column} title="ID" />,
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("id")}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "customer",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Customer" />,
    cell: ({ row }) => <div>{row.getValue("customer")}</div>,
    enableSorting: true,
    enableHiding: false,
  },
  {
    accessorKey: "amount_value",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Amount" />,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount_value"))
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: row.original.amount_currency,
      }).format(amount)
      return <div className="text-right font-medium">{formatted}</div>
    },
    enableSorting: true,
  },
  {
    accessorKey: "status",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Status" />,
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      const allowedVariants = ["default", "neutral", "success", "error", "warning"];
      const variant = allowedVariants.includes(status.toLowerCase()) ? status.toLowerCase() as "default" | "neutral" | "success" | "error" | "warning" : undefined;
      return <Badge variant={variant}>{status}</Badge>
    },
    enableSorting: true,
  },
  {
    accessorKey: "payment_method",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Payment Method" />,
    cell: ({ row }) => <div>{row.getValue("payment_method")}</div>,
    enableSorting: true,
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Date" />,
    cell: ({ row }) => {
      return <div>{new Date(row.getValue("created_at")).toLocaleString()}</div>
    },
    enableSorting: true,
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]