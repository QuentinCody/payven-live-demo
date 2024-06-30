'use client';

import { useTransactions } from '../../../lib/hooks/useTransactions';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/shadcn/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../../components/ui/shadcn/table';
import { TransactionChart } from '../../../components/charts/TransactionChart';
import { useState, useEffect } from 'react';
import { useTimezone } from "@/lib/hooks/useTimezone"

export default function OverviewPage() {
  const { transactions, isLoading, error } = useTransactions(1, 10);
  const [dailyTotals, setDailyTotals] = useState([]);
  const { formatDate } = useTimezone();

  useEffect(() => {
    async function fetchDailyTotals() {
      const response = await fetch('http://127.0.0.1:8000/transactions/daily-totals');
      const data = await response.json();
      setDailyTotals(data);
    }
    fetchDailyTotals();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5">Dashboard Overview</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <TransactionChart data={dailyTotals} />
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Date</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.slice(0, 5).map((transaction) => (
                  <TableRow key={transaction.id}>
                    <TableCell>{transaction.id}</TableCell>
                    <TableCell>{`${transaction.amount_value} ${transaction.amount_currency}`}</TableCell>
                    <TableCell>{transaction.status}</TableCell>
                    <TableCell>{formatDate(transaction.created_at)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}