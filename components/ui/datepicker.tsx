"use client"

import * as React from "react"
import { addDays as addDaysFns, format } from "date-fns"
import { toZonedTime } from 'date-fns-tz'
import Select from 'react-select'
import moment from 'moment-timezone'
import { CalendarClockIcon } from "@/components/icons/CalendarClockIcon"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface DatePickerWithRangeProps extends React.HTMLAttributes<HTMLDivElement> {
  onDateChange: (range: DateRange | undefined, timeZone: string) => void;
}

export type DateRange = {
  from: Date | undefined;
  to?: Date | undefined;
};

type TimeZoneOption = {
  value: string;
  label: string;
};

export function DatePickerWithRange({
  className,
  onDateChange,
}: DatePickerWithRangeProps) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    to: new Date(),
  })
  const [timeZone, setTimeZone] = React.useState(moment.tz.guess())

  const timeZoneOptions: TimeZoneOption[] = React.useMemo(() => {
    return moment.tz.names().map(tz => ({ value: tz, label: tz }))
  }, [])

  const handleDateChange = (newDate: DateRange | undefined) => {
    setDate(newDate);
    onDateChange(newDate, timeZone);
  }

  const handleTimeZoneChange = (option: TimeZoneOption | null) => {
    if (option) {
      setTimeZone(option.value);
      onDateChange(date, option.value);
    }
  }

  const formatDate = (date: Date | undefined) => {
    if (!date) return '';
    const zonedDate = toZonedTime(date, timeZone);
    return format(zonedDate, "LLL dd, y");
  }

  return (
    <div className={cn("grid gap-2", className)}>
      <div className="items-center justify-left space-y-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant="outline"
              className={cn(
                "w-[300px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarClockIcon className="mr-2 h-4 w-4" />
              {date?.from ? (
                date.to ? (
                  <>
                    {formatDate(date.from)} - {formatDate(date.to)}
                  </>
                ) : (
                  formatDate(date.from)
                )
              ) : (
                <span>Pick a date</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={handleDateChange}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
        <Select
          options={timeZoneOptions}
          value={{ value: timeZone, label: timeZone }}
          onChange={handleTimeZoneChange}
          className="w-[200px]"
        />
      </div>
      <div className="text-sm text-gray-500">
        Current time zone: {timeZone}
      </div>
    </div>
  )
}

export const addDays = addDaysFns;