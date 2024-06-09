/**
 * v0 by Vercel.
 * @see https://v0.dev/t/P2sGW33y9oU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardHeader, CardDescription, CardTitle, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

import { BellIcon } from "@/components/icons/BellIcon";
import { CalendarClockIcon } from "@/components/icons/CalendarClockIcon";
import { HomeIcon } from "@/components/icons/HomeIcon";
import { LineChartIcon } from "@/components/icons/LineChartIcon";
import { MenuIcon } from "@/components/icons/MenuIcon";
import { Package2Icon } from "@/components/icons/Package2Icon";
import { LineChart } from "@/components/charts/LineChart";



export default function Component() {
  return (
    <div key="1" className="grid min-h-screen w-full grid-cols-[280px_1fr] dark:bg-gray-950">
      <div className="hidden border-r bg-gray-100/40 dark:bg-gray-800/40 lg:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b px-6">
            <Link className="flex items-center gap-2 font-semibold" href="#" prefetch={false}>
              <Package2Icon className="h-6 w-6" />
              <span>Acme Inc</span>
            </Link>
            <Button className="ml-auto h-8 w-8" size="icon" variant="outline">
              <BellIcon className="h-4 w-4" />
              <span className="sr-only">Toggle notifications</span>
            </Button>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                className="flex items-center gap-3 rounded-lg bg-gray-100 px-3 py-2 text-gray-900 transition-all hover:text-gray-900 dark:bg-gray-800 dark:text-gray-50 dark:hover:text-gray-50"
                href="#"
                prefetch={false}
              >
                <HomeIcon className="h-4 w-4" />
                Overview
              </Link>
              <Link
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                href="#"
                prefetch={false}
              >
                <LineChartIcon className="h-4 w-4" />
                Analysis
              </Link>
            </nav>
          </div>
        </div>
      </div>
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
          <Popover>
            <PopoverTrigger asChild />
            <PopoverContent align="end" className="w-auto p-0">
              <Calendar initialFocus mode="range" numberOfMonths={2} />
            </PopoverContent>
          </Popover>
        </header>
        <main className="flex flex-1 flex-col gap-6 p-6 md:p-8">
          <div className="flex items-center justify-end mb-6">
            <Popover>
              <PopoverTrigger asChild>
                <Button className="w-[280px] justify-start text-left font-normal" variant="outline">
                  <CalendarClockIcon className="mr-2 h-4 w-4" />
                  June 01, 2023 - June 30, 2023
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-auto p-0">
                <Calendar initialFocus mode="range" numberOfMonths={2} />
              </PopoverContent>
            </Popover>
          </div>
          <div className="grid flex-1 gap-6">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <Card>
                <CardHeader>
                  <CardDescription>Total Transaction Amount</CardDescription>
                  <CardTitle>$2,389,000</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardDescription>Highest Volume Day</CardDescription>
                  <CardTitle>June 15, 2023</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardDescription>Latest Week Gross Volume</CardDescription>
                  <CardTitle>$345,678</CardTitle>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardDescription>Total Transaction Count</CardDescription>
                  <CardTitle>12,345</CardTitle>
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
              <Card>
                <CardHeader>
                  <CardTitle>Live Feed</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-4 overflow-auto">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg" alt="Avatar" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">John Doe</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Purchased $125 item</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">2 min ago</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg" alt="Avatar" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Jane Smith</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Purchased $89 item</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">5 min ago</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg" alt="Avatar" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Bob Johnson</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Purchased $199 item</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">10 min ago</div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src="/placeholder.svg" alt="Avatar" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">Sarah Lee</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">Purchased $75 item</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">15 min ago</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}










