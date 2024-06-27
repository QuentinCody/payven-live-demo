import { Transaction } from '../../types/transaction';

export async function fetchTransactions(): Promise<Transaction[]> {
  const response = await fetch('http://127.0.0.1:8000/transactions/recent');
  if (!response.ok) {
    throw new Error('Failed to fetch transactions');
  }
  return response.json();
}