import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Star, Eye } from 'lucide-react';
import { CelestialEvent } from '@/types/celestial';
import { cn } from '@/lib/utils';

interface EventCardProps {
  event: CelestialEvent;
  onViewDetails: (event: CelestialEvent) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onViewDetails }) => {
  const getEventTypeStyle = (type: string) => {
    switch (type) {
      case 'solar':
        return 'bg-solar/20 border-solar/30 hover:bg-solar/30';
      case 'lunar':
        return 'bg-lunar/20 border-lunar/30 hover:bg-lunar/30';
      case 'planetary':
        return 'bg-planetary/20 border-planetary/30 hover:bg-planetary/30';
      case 'rare':
        return 'bg-rare/20 border-rare/30 hover:bg-rare/30';
      default:
        return 'bg-card/50 border-border/50 hover:bg-card/70';
    }
  };

  const getRarityStyle = (rarity: string) => {
    switch (rarity) {
      case 'very-rare':
        return 'bg-rare text-rare-foreground';
      case 'rare':
        return 'bg-rare/80 text-white';
      case 'uncommon':
        return 'bg-planetary text-planetary-foreground';
      case 'common':
        return 'bg-muted text-muted-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getVisibilityText = (event: CelestialEvent) => {
    if (event.visibility === 'global') return 'Worldwide';
    if (event.visibility === 'northern') return 'Northern Hemisphere';
    if (event.visibility === 'southern') return 'Southern Hemisphere';
    if (event.visibilityRegions) {
      return event.visibilityRegions.slice(0, 2).join(', ') + 
        (event.visibilityRegions.length > 2 ? ', +more' : '');
    }
    return 'Specific regions';
  };

  const formatDate = (date: Date, endDate?: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      month: 'short', 
      day: 'numeric',
      year: date.getFullYear() !== new Date().getFullYear() ? 'numeric' : undefined
    };
    
    if (endDate) {
      return `${date.toLocaleDateString('en-US', options)} - ${endDate.toLocaleDateString('en-US', options)}`;
    }
    return date.toLocaleDateString('en-US', options);
  };

  const getRarityIcon = (rarity: string) => {
    switch (rarity) {
      case 'very-rare':
        return <Star className="h-3 w-3 fill-current" />;
      case 'rare':
        return <Star className="h-3 w-3" />;
      default:
        return null;
    }
  };

  const isUpcoming = new Date(event.date) > new Date();
  const daysUntil = Math.ceil((new Date(event.date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (
    <Card className={cn(
      "transition-all duration-300 hover:scale-[1.02] cursor-pointer backdrop-blur-sm",
      getEventTypeStyle(event.type),
      "shadow-cosmic hover:shadow-stellar"
    )}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-lg leading-tight pr-2">
            {event.title}
          </CardTitle>
          <Badge 
            variant="secondary" 
            className={cn("shrink-0 flex items-center gap-1", getRarityStyle(event.rarity))}
          >
            {getRarityIcon(event.rarity)}
            {event.rarity}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {event.description}
        </p>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm">
            <Calendar className="h-4 w-4 text-primary shrink-0" />
            <span className="font-medium">{formatDate(event.date, event.endDate)}</span>
            {isUpcoming && daysUntil > 0 && (
              <Badge variant="outline" className="ml-auto text-xs">
                {daysUntil === 1 ? 'Tomorrow' : `${daysUntil} days`}
              </Badge>
            )}
          </div>
          
          {event.peak && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4 shrink-0" />
              <span>Peak: {event.peak}</span>
            </div>
          )}
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 shrink-0" />
            <span className="truncate">{getVisibilityText(event)}</span>
          </div>
        </div>

        <div className="pt-2">
          <Button 
            onClick={() => onViewDetails(event)}
            variant="outline"
            size="sm"
            className="w-full bg-background/50 hover:bg-background/80 border-border/50"
          >
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;