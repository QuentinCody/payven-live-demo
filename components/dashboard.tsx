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
import { ResponsiveLine } from "@nivo/line";

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

interface IconProps extends React.SVGProps<SVGSVGElement> {}

function BellIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function CalendarClockIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5" />
      <path d="M16 2v4" />
      <path d="M8 2v4" />
      <path d="M3 10h5" />
      <path d="M17.5 17.5 16 16.3V14" />
      <circle cx="16" cy="16" r="6" />
    </svg>
  );
}

function HomeIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function LineChart(props: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}

function LineChartIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 3v18h18" />
      <path d="m19 9-5 5-4-4-3 3" />
    </svg>
  );
}

function MenuIcon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function Package2Icon(props: IconProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}
