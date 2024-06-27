import { columns } from "@/components/details/columns"
import { DataTable } from "@/components/details/DataTable"
import { ColumnDef } from "@tanstack/react-table" // Import the correct type
import { TransactionWithCustomer } from "@/components/ui/tremor/data/schema" 

export default function DetailsPage() {
  return (
    <>
      <h1 className="text-lg font-semibold text-gray-900 sm:text-xl dark:text-gray-50">
        Details
      </h1>
      <div className="mt-4 sm:mt-6 lg:mt-10">
        <DataTable columns={columns as ColumnDef<TransactionWithCustomer>[]} /> 
          {/* Cast the columns prop to the correct type */}
      </div>
    </>
  )
}
// "use client"

// import { DataTable } from "@/components/details/DataTable"
// import { columns } from "@/components/details/columns"
// import { useTransactions } from "@/lib/hooks/useTransactions"

// export default function DetailsPage() {
//   const { transactions, loading, error } = useTransactions()

//   if (loading) return <div>Loading...</div>
//   if (error) return <div>Error: {error}</div>

//   return (
//     <div className="container mx-auto py-10">
//       <h1 className="text-3xl font-bold mb-5">Transaction Details</h1>
//       <DataTable columns={columns} data={transactions} />
//     </div>
//   )
// }