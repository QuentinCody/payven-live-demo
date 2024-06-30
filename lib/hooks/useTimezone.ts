import { useState, useEffect, useCallback } from 'react';


const getUserPreferredTimezone = () => {
  if (typeof window !== 'undefined') { // Check if running on client side
    const storedTimezone = localStorage.getItem('userTimeZone');
    return storedTimezone || 'America/New_York';
  }
  return 'America/New_York'; // Default timezone if not on client side
}

const setUserPreferredTimezone = (timezone: string) => {
  if (typeof window !== 'undefined') { // Check if running on client side
    localStorage.setItem('userTimeZone', timezone);
  }
}

export function useTimezone() {
  const [timezone, setTimezone] = useState<string>(getUserPreferredTimezone());

  useEffect(() => {
    const storedTimezone = getUserPreferredTimezone();
    if (storedTimezone) {
      setTimezone(storedTimezone);
    }
  }, []);

  const updateTimezone = useCallback((newTimezone: string) => {
    setTimezone(newTimezone);
    setUserPreferredTimezone(newTimezone);
  }, []);

  const formatDate = useCallback((dateString: string): string => {
    const [datePart, timePart] = dateString.split('T');
    const [year, month, day] = datePart.split('-').map(Number);
    const [hour, minute, second] = timePart.split(':').map(Number);
    
    const utcDate = new Date(Date.UTC(year, month - 1, day, hour, minute, second));

    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
      timeZone: timezone,
      timeZoneName: 'short'
    };

    return new Intl.DateTimeFormat('en-US', options).format(utcDate);
  }, [timezone]);

  return { timezone, updateTimezone, formatDate };
}