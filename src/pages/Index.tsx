import React, { useState, useMemo } from 'react';
import { CelestialEvent, FilterOptions } from '@/types/celestial';
import { celestialEvents } from '@/data/celestialEvents';
import CelestialCalendar from '@/components/CelestialCalendar';
import EventCard from '@/components/EventCard';
import SearchFilters from '@/components/SearchFilters';
import EventDetailsModal from '@/components/EventDetailsModal';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Calendar, Star } from 'lucide-react';

const Index = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<CelestialEvent | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState<FilterOptions>({
    type: 'all',
    location: 'global',
    rarity: 'all',
    dateRange: 'all'
  });

  const filteredEvents = useMemo(() => {
    let events = celestialEvents;

    // Search filter
    if (searchQuery) {
      events = events.filter(event =>
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Type filter
    if (filters.type !== 'all') {
      events = events.filter(event => event.type === filters.type);
    }

    // Rarity filter
    if (filters.rarity !== 'all') {
      events = events.filter(event => event.rarity === filters.rarity);
    }

    // Date range filter
    const now = new Date();
    const currentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const currentYear = new Date(now.getFullYear(), 0, 1);

    switch (filters.dateRange) {
      case 'upcoming':
        events = events.filter(event => new Date(event.date) >= now);
        break;
      case 'this-month':
        events = events.filter(event => {
          const eventDate = new Date(event.date);
          return eventDate >= currentMonth && eventDate.getMonth() === now.getMonth();
        });
        break;
      case 'this-year':
        events = events.filter(event => {
          const eventDate = new Date(event.date);
          return eventDate >= currentYear && eventDate.getFullYear() === now.getFullYear();
        });
        break;
      default:
        break;
    }

    // Location filter (simplified for demo)
    if (filters.location !== 'global') {
      events = events.filter(event => {
        if (event.visibility === 'global') return true;
        if (filters.location === 'northern-hemisphere' && event.visibility === 'northern') return true;
        if (filters.location === 'southern-hemisphere' && event.visibility === 'southern') return true;
        if (event.visibilityRegions) {
          return event.visibilityRegions.some(region => 
            region.toLowerCase().includes(filters.location.replace('-', ' '))
          );
        }
        return false;
      });
    }

    return events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [searchQuery, filters]);

  const handleEventSelect = (event: CelestialEvent) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  const upcomingCount = filteredEvents.filter(event => new Date(event.date) > new Date()).length;
  const rareCount = filteredEvents.filter(event => event.rarity === 'rare' || event.rarity === 'very-rare').length;

  return (
    <div className="min-h-screen bg-cosmic p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="h-8 w-8 text-primary animate-stellar-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-aurora to-secondary bg-clip-text text-transparent">
              Celestial Events Tracker
            </h1>
            <Sparkles className="h-8 w-8 text-primary animate-stellar-pulse" />
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover and track spectacular celestial phenomena, from solar eclipses to meteor showers
          </p>
          
          {/* Quick Stats */}
          <div className="flex items-center justify-center gap-6 mt-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="text-sm text-muted-foreground">
                <strong className="text-foreground">{upcomingCount}</strong> upcoming events
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-rare" />
              <span className="text-sm text-muted-foreground">
                <strong className="text-foreground">{rareCount}</strong> rare phenomena
              </span>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <SearchFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          filters={filters}
          onFiltersChange={setFilters}
          eventCount={filteredEvents.length}
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="xl:col-span-1">
            <CelestialCalendar
              selectedDate={selectedDate}
              onDateSelect={setSelectedDate}
              onEventSelect={handleEventSelect}
            />
          </div>

          {/* Events List */}
          <div className="xl:col-span-2">
            <Card className="bg-card/30 backdrop-blur-sm border-border/30 shadow-cosmic">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Celestial Events
                  <Badge variant="secondary" className="ml-auto">
                    {filteredEvents.length} events
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {filteredEvents.length > 0 ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {filteredEvents.slice(0, 8).map((event) => (
                      <EventCard
                        key={event.id}
                        event={event}
                        onViewDetails={handleEventSelect}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Star className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">No events found</h3>
                    <p className="text-muted-foreground">
                      Try adjusting your search or filter criteria
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Event Details Modal */}
        <EventDetailsModal
          event={selectedEvent}
          open={isModalOpen}
          onOpenChange={setIsModalOpen}
        />
      </div>
    </div>
  );
};

export default Index;