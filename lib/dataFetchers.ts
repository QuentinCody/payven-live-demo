import { Transaction, Customer, TransactionWithCustomer } from "@/components/ui/tremor/data/schema"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'

type PaginatedResponse<T> = {
  total: number;
  page: number;
  page_size: number;
  data: T[];
}

type TransactionFilters = {
  [key: string]: string | number | undefined;
  status?: string;
  min_amount?: number;
  max_amount?: number;
  start_date?: string;
  end_date?: string;
}

export async function fetchTransactions(page: number, pageSize: number): Promise<{ data: TransactionWithCustomer[], total: number }> {
  const response = await fetch(`${API_BASE_URL}/transactions_with_customers?page=${page}&page_size=${pageSize}`)
  if (!response.ok) throw new Error('Failed to fetch transactions')
  const result = await response.json()
  return {
    data: result.transactions,
    total: result.total
  }
}

export async function fetchCustomers(
  page: number = 1, 
  pageSize: number = 20,
  sortBy: string = "created_at",
  sortOrder: "asc" | "desc" = "desc",
  search?: string
): Promise<PaginatedResponse<Customer>> {
  const params = new URLSearchParams({
    page: page.toString(),
    page_size: pageSize.toString(),
    sort_by: sortBy,
    sort_order: sortOrder,
  })
  if (search) params.append('search', search)

  const response = await fetch(`${API_BASE_URL}/customers?${params}`)
  if (!response.ok) throw new Error('Failed to fetch customers')
  const data = await response.json()
  return {
    total: data.total,
    page: data.page,
    page_size: data.page_size,
    data: data.customers
  }
}

export async function fetchTransactionById(id: string): Promise<Transaction> {
  const response = await fetch(`${API_BASE_URL}/transactions/${id}`)
  if (!response.ok) throw new Error('Failed to fetch transaction')
  return await response.json()
}

export async function fetchCustomerById(id: string): Promise<Customer> {
  const response = await fetch(`${API_BASE_URL}/customers/${id}`)
  if (!response.ok) throw new Error('Failed to fetch customer')
  return await response.json()
}