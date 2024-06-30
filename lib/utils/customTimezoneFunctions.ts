//customTimezoneFunctions.ts
import { parseISO, formatISO } from 'date-fns';
import { formatInTimeZone } from 'date-fns-tz';

// Function to convert UTC to a specific timezone
export function utcToZonedTime(date: Date, timeZone: string): Date {
  const dateString = formatInTimeZone(date, timeZone, "yyyy-MM-dd'T'HH:mm:ss.SSS");
  return new Date(dateString);
}

// Function to convert a zoned time back to UTC
export function zonedTimeToUTC(date: Date, timeZone: string): Date {
  const localDate = new Date(date.toLocaleString('en-US', { timeZone }));
  const utcDate = new Date(localDate.getTime() + localDate.getTimezoneOffset() * 60000);
  return utcDate;
}

// Function to format a date in a specific timezone
export function formatInZone(date: Date, timeZone: string, format: string): string {
  return formatInTimeZone(date, timeZone, format);
}

export function getUserPreferredTimezone(): string {
  // Try to get the user's preferred timezone from localStorage
  const storedTimezone = localStorage.getItem('userTimeZone');
  if (storedTimezone) {
    return storedTimezone;
  }

  const browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

  return browserTimezone || 'America/New_York';

}

export function setUserPreferredTimezone(timezone: string): void {
  localStorage.setItem('userTimeZone', timezone);
}


export function formatDateByUserPreference(date: Date | string, timeZone: string, showLocalTime: boolean): string {
    const parsedDate = typeof date === 'string' ? new Date(date) : date;
    
    if (showLocalTime) {
      return formatInTimeZone(parsedDate, timeZone, 'yyyy-MM-dd HH:mm:ss zzz');
    } else {
      return parsedDate.toUTCString();
    }
  }

// Test the functions
function test() {
  const utcDate = new Date();
  console.log("Original UTC Date:", formatISO(utcDate));

  const nyTimeZone = 'America/New_York';
  const nyDate = utcToZonedTime(utcDate, nyTimeZone);
  console.log("New York Date:", formatInZone(nyDate, nyTimeZone, 'yyyy-MM-dd HH:mm:ss zzz'));

  const backToUtc = zonedTimeToUTC(nyDate, nyTimeZone);
  console.log("Back to UTC:", formatISO(backToUtc));
}

// Uncomment the following line to run the test
// test();