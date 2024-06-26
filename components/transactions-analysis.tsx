/**
* This code was generated by v0 by Vercel.
* see https://v0.dev/t/edTKKDiYsJ5
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Archivo } from 'next/font/google'

archivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { Button } from "@/components/ui/shadcn/button"
import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/shadcn/popover"
import { Calendar } from "@/components/ui/shadcn/calendar"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/shadcn/card"
import { ResizablePanel, ResizableHandle, ResizablePanelGroup } from "@/components/ui/shadcn/resizable"
import { Switch } from "@/components/ui/shadcn/switch"
import { ArrowUpIcon } from "@/components/icons/ArrowUpIcon"
import { ArrowDownIcon } from "@/components/icons/ArrowDownIcon"
import {CalendarDaysIcon } from "@/components/icons/CalendarDays"
import { HorizontalbarChart } from "@/components/charts/HorizontalBarChart"



export default function TransactionsAnalysis() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Transactions Analysis</h1>
        <div>
          <Popover>
            <PopoverTrigger asChild>
              <Button className="w-[300px] justify-start text-left font-normal" variant="outline">
                <CalendarDaysIcon className="mr-1 h-4 w-4 -translate-x-1" /> -{""}
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-auto p-0">
              <Calendar mode="range" numberOfMonths={2} />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-4 mb-8">
        <ResizablePanelGroup className="col-span-5" direction="horizontal">
          <ResizablePanel className="bg-white" defaultSize={20}>
            <Card className="flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-base">Approval Rate</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center text-2xl font-bold">
                <span className="text-green-500 mr-2">
                  92%
                  <ArrowUpIcon className="inline-block w-4 h-4" />
                </span>
              </CardContent>
            </Card>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel className="bg-white" defaultSize={20}>
            <Card className="flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-base">Approved Transactions</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center text-2xl font-bold">
                <span className="text-red-500 mr-2">
                  12,345
                  <ArrowDownIcon className="inline-block w-4 h-4" />
                </span>
              </CardContent>
            </Card>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel className="bg-white" defaultSize={20}>
            <Card className="flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-base">Approved Value</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center text-2xl font-bold">
                <span className="text-green-500 mr-2">
                  $123,456
                  <ArrowUpIcon className="inline-block w-4 h-4" />
                </span>
              </CardContent>
            </Card>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel className="bg-white" defaultSize={20}>
            <Card className="flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-base">Total Transactions</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center text-2xl font-bold">
                <span className="text-red-500 mr-2">
                  13,456
                  <ArrowDownIcon className="inline-block w-4 h-4" />
                </span>
              </CardContent>
            </Card>
          </ResizablePanel>
          <ResizableHandle />
          <ResizablePanel className="bg-white" defaultSize={20}>
            <Card className="flex flex-col justify-between">
              <CardHeader>
                <CardTitle className="text-base">Total Value</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center text-2xl font-bold">
                <span className="text-green-500 mr-2">
                  $134,567
                  <ArrowUpIcon className="inline-block w-4 h-4" />
                </span>
              </CardContent>
            </Card>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Approval Rate</h2>
          <div className="flex items-center gap-2">
            <span className="text-sm">Compare to Previous Period</span>
            <Switch />
          </div>
        </div>
        <HorizontalbarChart className="w-full aspect-[9/4]" />
      </div>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="text-base">Processor</CardTitle>
          </CardHeader>
          <CardContent>
            <HorizontalbarChart className="w-full aspect-[2/1]" />
          </CardContent>
        </Card>
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="text-base">MID</CardTitle>
          </CardHeader>
          <CardContent>
            <HorizontalbarChart className="w-full aspect-[2/1]" />
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-3 gap-4 mb-8">
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="text-base">Payment Method Type</CardTitle>
          </CardHeader>
          <CardContent>
            <HorizontalbarChart className="w-full aspect-[2/1]" />
          </CardContent>
        </Card>
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="text-base">Card Type</CardTitle>
          </CardHeader>
          <CardContent>
            <HorizontalbarChart className="w-full aspect-[2/1]" />
          </CardContent>
        </Card>
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="text-base">Card Brand</CardTitle>
          </CardHeader>
          <CardContent>
            <HorizontalbarChart className="w-full aspect-[2/1]" />
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="text-base">Stored Credential</CardTitle>
          </CardHeader>
          <CardContent>
            <HorizontalbarChart className="w-full aspect-[2/1]" />
          </CardContent>
        </Card>
        <Card className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle className="text-base">Customer Country</CardTitle>
          </CardHeader>
          <CardContent>
            <HorizontalbarChart className="w-full aspect-[2/1]" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}