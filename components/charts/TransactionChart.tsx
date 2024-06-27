import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/shadcn/card';

type DailyTotal = {
  date: string;
  total: number;
};

type TransactionChartProps = {
  data: DailyTotal[];
};

export const TransactionChart: React.FC<TransactionChartProps> = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Daily Transaction Totals</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};