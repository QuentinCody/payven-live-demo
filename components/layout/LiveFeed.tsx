import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CircleUserRound } from 'lucide-react';

interface Transaction {
  id: string;
  customer_id: string;
  first_name: string;
  last_name: string;
  amount_value: number;
  amount_currency: string;
  status: string;
  created_at: string;
}

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
console.log(apiUrl);


const LiveFeed: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/transactions/recent`);
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
                <CircleUserRound aria-label="Avatar" className="w-10" />
              </Avatar>
              <div>
                <div className="font-medium">{`${transaction.first_name} ${transaction.last_name}`}</div>
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