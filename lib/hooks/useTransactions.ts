import { useState, useEffect } from 'react'
import { fetchTransactions } from '@/lib/dataFetchers'
import { TransactionWithCustomer } from '@/components/ui/tremor/data/schema'

export function useTransactions(page: number, pageSize: number) {
  const [transactions, setTransactions] = useState<TransactionWithCustomer[]>([])
  const [totalTransactions, setTotalTransactions] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function loadTransactions() {
      try {
        setIsLoading(true)
        const result = await fetchTransactions(page, pageSize)
        setTransactions(result.data)
        setTotalTransactions(result.total)
        console.log("Fetched transactions:", result.data)
      } catch (e) {
        setError(e as Error)
        console.log("Error fetching transactions:", e)
      } finally {
        setIsLoading(false)
      }
    }

    loadTransactions()
  }, [page, pageSize])

  return { transactions, totalTransactions, isLoading, error }
}