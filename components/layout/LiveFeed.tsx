import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface Transaction {
  id: string;
  customer_id: string;
  amount_value: number;
  status: string;
  created_at: string;
}

const LiveFeed: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/transactions/recent'); // Ensure this URL matches your FastAPI endpoint
        setTransactions(response.data);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransactions();
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Live Feed</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 overflow-auto">
        {transactions.map((transaction) => (
          <div key={transaction.id} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="/placeholder.svg" alt="Avatar" />
                <AvatarFallback>{transaction.customer_id}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium">{transaction.customer_id}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Purchased ${transaction.amount_value} ({transaction.status})
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{transaction.created_at}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default LiveFeed;