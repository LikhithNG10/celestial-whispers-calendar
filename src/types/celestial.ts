export interface CelestialEvent {
  id: string;
  title: string;
  description: string;
  date: Date;
  endDate?: Date;
  type: 'solar' | 'lunar' | 'planetary' | 'rare';
  visibility: 'global' | 'northern' | 'southern' | 'specific';
  visibilityRegions?: string[];
  rarity: 'common' | 'uncommon' | 'rare' | 'very-rare';
  peak?: string;
  icon: string;
  facts?: string[];
}

export interface CalendarDay {
  date: Date;
  events: CelestialEvent[];
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
}

export interface FilterOptions {
  type: string;
  location: string;
  rarity: string;
  dateRange: 'upcoming' | 'this-month' | 'this-year' | 'all';
}