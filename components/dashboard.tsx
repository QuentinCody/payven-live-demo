import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardDescription, CardTitle, CardContent } from "@/components/ui/card";
import { MenuIcon } from "@/components/icons/MenuIcon";
import { LineChart } from "@/components/charts/LineChart";
import { useEffect, useState } from 'react';
import { DatePickerWithRange, addDays, DateRange } from "@/components/ui/datepicker";
import LiveFeed from "@/components/layout/LiveFeed";
import { format } from 'date-fns';
import SideBar from "@/components/layout/SideBar";
import { fetchCustomerCount, fetchTransactionCount, fetchTransactionAmount, fetchHighestVolumeDay } from '@/api/apiService';

export default function Component() {
  const [customerCount, setCustomerCount] = useState(0);
  const [transactionCount, setTransactionCount] = useState(0);
  const [transactionAmount, setTransactionAmount] = useState('MM-DD-YYYY');
  const [highestVolumeDay, setHighestVolumeDay] = useState(0);
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: addDays(new Date(), -7),
    to: new Date(),
  });

  useEffect(() => {
    if (dateRange?.from && dateRange.to) {
      // Clone the dates to avoid mutating the original state directly
      const startDate = new Date(dateRange.from);
      startDate.setHours(0, 0, 0, 0);

      const endDate = new Date(dateRange.to);
      endDate.setHours(23, 59, 59, 999);

      // Now format the dates into strings
      const formattedStartDate = format(startDate, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");
      const formattedEndDate = format(endDate, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'");

      // Use the formatted dates for fetching data
      fetchData(formattedStartDate, formattedEndDate);
    }
  }, [dateRange]);

  

  const fetchData = async (startDate: string, endDate: string) => {
    try {
      const customerCount = await fetchCustomerCount(startDate, endDate);
      setCustomerCount(customerCount);

      const transactionCount = await fetchTransactionCount(startDate, endDate);
      setTransactionCount(transactionCount);

      const transactionAmount = await fetchTransactionAmount(startDate, endDate);
      setTransactionAmount(transactionAmount);

      const highestVolumeDay = await fetchHighestVolumeDay(startDate, endDate);
      setHighestVolumeDay(highestVolumeDay);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDateChange = (range: DateRange | undefined) => {
    setDateRange(range);
  };

  
  return (
    <div key="1" className="grid min-h-screen w-full grid-cols-[280px_1fr] dark:bg-gray-950">
     <SideBar />
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <div className="flex flex-1 items-center gap-4">
            <Button className="lg:hidden" size="icon" variant="outline">
              <MenuIcon className="h-4 w-4" />
              <span className="sr-only">Toggle navigation</span>
            </Button>
            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
              <Link
                className="text-gray-900 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                className="text-gray-900 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
                prefetch={false}
              >
                Customers
              </Link>
              <Link
                className="text-gray-900 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
                prefetch={false}
              >
                Transactions
              </Link>
              <Link
                className="text-gray-900 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
                prefetch={false}
              >
                Fees
              </Link>
              <Link
                className="text-gray-900 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
                prefetch={false}
              >
                Disbursements
              </Link>
              <Link
                className="text-gray-900 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
                prefetch={false}
              >
                Subscriptions
              </Link>
              <Link
                className="text-gray-900 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
                prefetch={false}
              >
                Disputes
              </Link>
              <Link
                className="text-gray-900 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
                prefetch={false}
              >
                Refunds
              </Link>
              <Link
                className="text-gray-900 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
                prefetch={false}
              >
                Data Explorer
              </Link>
            </nav>
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-6 p-6 md:p-8">
          <div className="flex items-center justify-end mb-6">
          <DatePickerWithRange className="w-[280px]" onDateChange={handleDateChange} />
          </div>
          <div className="grid flex-1 gap-6">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <Card>
                <CardHeader>
                  <CardDescription>Total Transaction Amount</CardDescription>
                  <CardTitle>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(parseFloat(transactionAmount))}</CardTitle>
                </CardHeader>
                <CardContent>
                <p className="text-xs text-muted-foreground">
                +20.1% from last month
                </p>
                </CardContent>
                  
              </Card>
              <Card>
                <CardHeader>
                  <CardDescription>Highest Volume Day</CardDescription>
                  <CardTitle>{highestVolumeDay}</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardDescription>Total Transaction Count</CardDescription>
                  <CardTitle>{transactionCount}</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardDescription>Total Customer Count</CardDescription>
                  <CardTitle>{customerCount}</CardTitle>
                </CardHeader>
              </Card>
            </div>
            <div className="grid grid-cols-[2fr_1fr] gap-6">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle>Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <LineChart className="aspect-[16/9]" />
                </CardContent>
              </Card>
              <LiveFeed />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
