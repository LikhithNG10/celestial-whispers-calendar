import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, X, MapPin } from 'lucide-react';
import { FilterOptions } from '@/types/celestial';

interface SearchFiltersProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  eventCount: number;
}

const SearchFilters: React.FC<SearchFiltersProps> = ({
  searchQuery,
  onSearchChange,
  filters,
  onFiltersChange,
  eventCount,
}) => {
  const locations = [
    'Global',
    'North America',
    'Europe',
    'Asia',
    'Australia',
    'South America',
    'Africa',
    'Northern Hemisphere',
    'Southern Hemisphere'
  ];

  const clearFilters = () => {
    onFiltersChange({
      type: 'all',
      location: 'global',
      rarity: 'all',
      dateRange: 'upcoming'
    });
    onSearchChange('');
  };

  const hasActiveFilters = filters.type !== 'all' || 
    filters.location !== 'global' || 
    filters.rarity !== 'all' || 
    filters.dateRange !== 'upcoming' || 
    searchQuery.length > 0;

  return (
    <Card className="bg-card/30 backdrop-blur-sm border-border/30 shadow-cosmic">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 text-foreground">
          <Filter className="h-5 w-5 text-primary" />
          Search & Filter Events
          <Badge variant="secondary" className="ml-auto">
            {eventCount} events
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search celestial events..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10 bg-background/50 border-border/50 focus:border-primary/50"
          />
        </div>

        {/* Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Event Type</label>
            <Select value={filters.type} onValueChange={(value) => 
              onFiltersChange({ ...filters, type: value })
            }>
              <SelectTrigger className="bg-background/50 border-border/50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="solar">Solar Events</SelectItem>
                <SelectItem value="lunar">Lunar Events</SelectItem>
                <SelectItem value="planetary">Planetary Events</SelectItem>
                <SelectItem value="rare">Rare Phenomena</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Location
            </label>
            <Select value={filters.location} onValueChange={(value) => 
              onFiltersChange({ ...filters, location: value })
            }>
              <SelectTrigger className="bg-background/50 border-border/50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="global">Global View</SelectItem>
                {locations.slice(1).map(location => (
                  <SelectItem key={location.toLowerCase().replace(' ', '-')} value={location.toLowerCase().replace(' ', '-')}>
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Rarity</label>
            <Select value={filters.rarity} onValueChange={(value) => 
              onFiltersChange({ ...filters, rarity: value })
            }>
              <SelectTrigger className="bg-background/50 border-border/50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Rarities</SelectItem>
                <SelectItem value="very-rare">Very Rare</SelectItem>
                <SelectItem value="rare">Rare</SelectItem>
                <SelectItem value="uncommon">Uncommon</SelectItem>
                <SelectItem value="common">Common</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Time Range</label>
            <Select value={filters.dateRange} onValueChange={(value) => 
              onFiltersChange({ ...filters, dateRange: value as FilterOptions['dateRange'] })
            }>
              <SelectTrigger className="bg-background/50 border-border/50">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="upcoming">Upcoming</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
                <SelectItem value="this-year">This Year</SelectItem>
                <SelectItem value="all">All Time</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <div className="flex justify-end">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={clearFilters}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="h-4 w-4 mr-2" />
              Clear Filters
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SearchFilters;