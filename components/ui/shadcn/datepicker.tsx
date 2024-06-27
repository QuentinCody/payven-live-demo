"use client"

import * as React from "react"
import { addDays, format } from "date-fns"
import Select from 'react-select'
import { CalendarClockIcon } from "@/components/icons/CalendarClockIcon"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/shadcn/button"
import { Calendar } from "@/components/ui/shadcn/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/shadcn/popover"
import { utcToZonedTime, zonedTimeToUTC, formatInZone } from './customTimezoneFunctions'

interface DatePickerWithRangeProps extends React.HTMLAttributes<HTMLDivElement> {
  onDateChange: (range: DateRange | undefined) => void;
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
    from: addDays(new Date(), -7),
    to: new Date(),
  })
  const [timeZone, setTimeZone] = React.useState(Intl.DateTimeFormat().resolvedOptions().timeZone)

  const timeZoneOptions: TimeZoneOption[] = React.useMemo(() => {
    return Intl.supportedValuesOf('timeZone').map(tz => ({ value: tz, label: tz }))
  }, [])

  const handleDateChange = (newDate: DateRange | undefined) => {
    if (newDate) {
      // Convert local dates to UTC before sending to the backend
      const utcRange = {
        from: newDate.from ? zonedTimeToUTC(newDate.from, timeZone) : undefined,
        to: newDate.to ? zonedTimeToUTC(newDate.to, timeZone) : undefined,
      }
      setDate(newDate);
      onDateChange(utcRange);
    } else {
      setDate(undefined);
      onDateChange(undefined);
    }
  }

  const handleTimeZoneChange = (option: TimeZoneOption | null) => {
    if (option) {
      setTimeZone(option.value);
      if (date) {
        // Recalculate UTC dates when time zone changes
        const utcRange = {
          from: date.from ? zonedTimeToUTC(date.from, option.value) : undefined,
          to: date.to ? zonedTimeToUTC(date.to, option.value) : undefined,
        }
        onDateChange(utcRange);
      }
    }
  }

  const formatDate = (date: Date | undefined) => {
    if (!date) return '';
    return formatInZone(date, timeZone, "LLL dd, y");
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

export { addDays };