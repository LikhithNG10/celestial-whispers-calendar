import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';
import { CelestialEvent, CalendarDay } from '@/types/celestial';
import { celestialEvents } from '@/data/celestialEvents';
import { cn } from '@/lib/utils';

interface CelestialCalendarProps {
  selectedDate: Date;
  onDateSelect: (date: Date) => void;
  onEventSelect: (event: CelestialEvent) => void;
}

const CelestialCalendar: React.FC<CelestialCalendarProps> = ({
  selectedDate,
  onDateSelect,
  onEventSelect,
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date(selectedDate));

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getEventsForDate = (date: Date): CelestialEvent[] => {
    return celestialEvents.filter(event => {
      const eventDate = new Date(event.date);
      return isSameDay(eventDate, date) || 
        (event.endDate && date >= eventDate && date <= new Date(event.endDate));
    });
  };

  const isSameDay = (date1: Date, date2: Date): boolean => {
    return date1.getDate() === date2.getDate() &&
           date1.getMonth() === date2.getMonth() &&
           date1.getFullYear() === date2.getFullYear();
  };

  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const today = new Date();
    
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const firstDayOfWeek = firstDay.getDay();
    const daysInMonth = lastDay.getDate();
    
    const days: CalendarDay[] = [];
    
    // Previous month days
    const prevMonth = new Date(year, month - 1, 0);
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const date = new Date(year, month - 1, prevMonth.getDate() - i);
      days.push({
        date,
        events: getEventsForDate(date),
        isCurrentMonth: false,
        isToday: isSameDay(date, today),
        isSelected: isSameDay(date, selectedDate),
      });
    }
    
    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      days.push({
        date,
        events: getEventsForDate(date),
        isCurrentMonth: true,
        isToday: isSameDay(date, today),
        isSelected: isSameDay(date, selectedDate),
      });
    }
    
    // Next month days
    const remainingDays = 42 - days.length;
    for (let day = 1; day <= remainingDays; day++) {
      const date = new Date(year, month + 1, day);
      days.push({
        date,
        events: getEventsForDate(date),
        isCurrentMonth: false,
        isToday: isSameDay(date, today),
        isSelected: isSameDay(date, selectedDate),
      });
    }
    
    return days;
  }, [currentMonth, selectedDate]);

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      if (direction === 'prev') {
        newMonth.setMonth(prev.getMonth() - 1);
      } else {
        newMonth.setMonth(prev.getMonth() + 1);
      }
      return newMonth;
    });
  };

  const getEventTypeColor = (type: string): string => {
    switch (type) {
      case 'solar': return 'solar';
      case 'lunar': return 'lunar';
      case 'planetary': return 'planetary';
      case 'rare': return 'rare';
      default: return 'primary';
    }
  };

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-cosmic">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-foreground">
            <CalendarIcon className="h-5 w-5 text-primary" />
            Solar Calendar
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigateMonth('prev')}
              className="h-8 w-8 p-0 hover:bg-primary/10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="text-lg font-semibold min-w-[140px] text-center">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigateMonth('next')}
              className="h-8 w-8 p-0 hover:bg-primary/10"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-7 gap-1 mb-4">
          {dayNames.map(day => (
            <div key={day} className="p-2 text-center text-sm font-medium text-muted-foreground">
              {day}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((day, index) => (
            <button
              key={index}
              onClick={() => onDateSelect(day.date)}
              className={cn(
                "relative p-2 h-12 text-sm rounded-lg transition-all duration-200 hover:bg-primary/10",
                !day.isCurrentMonth && "text-muted-foreground opacity-50",
                day.isToday && "bg-primary/20 font-bold",
                day.isSelected && "bg-primary text-primary-foreground",
                day.events.length > 0 && "animate-stellar-pulse"
              )}
            >
              <span>{day.date.getDate()}</span>
              {day.events.length > 0 && (
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-1">
                  {day.events.slice(0, 3).map((event, eventIndex) => (
                    <div
                      key={eventIndex}
                      className={cn(
                        "w-1.5 h-1.5 rounded-full",
                        `bg-${getEventTypeColor(event.type)}`
                      )}
                    />
                  ))}
                  {day.events.length > 3 && (
                    <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground" />
                  )}
                </div>
              )}
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CelestialCalendar;