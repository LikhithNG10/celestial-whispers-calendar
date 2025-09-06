import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Star, Info, Heart, Bell } from 'lucide-react';
import { CelestialEvent } from '@/types/celestial';
import { cn } from '@/lib/utils';

interface EventDetailsModalProps {
  event: CelestialEvent | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const EventDetailsModal: React.FC<EventDetailsModalProps> = ({
  event,
  open,
  onOpenChange,
}) => {
  if (!event) return null;

  const getEventTypeStyle = (type: string) => {
    switch (type) {
      case 'solar':
        return 'text-solar';
      case 'lunar':
        return 'text-lunar';
      case 'planetary':
        return 'text-planetary';
      case 'rare':
        return 'text-rare';
      default:
        return 'text-primary';
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

  const getVisibilityText = () => {
    if (event.visibility === 'global') return 'Visible worldwide';
    if (event.visibility === 'northern') return 'Northern Hemisphere only';
    if (event.visibility === 'southern') return 'Southern Hemisphere only';
    if (event.visibilityRegions) {
      return 'Visible in: ' + event.visibilityRegions.join(', ');
    }
    return 'Specific regions only';
  };

  const formatDate = (date: Date, endDate?: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long',
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    };
    
    if (endDate) {
      return `${date.toLocaleDateString('en-US', options)} - ${endDate.toLocaleDateString('en-US', options)}`;
    }
    return date.toLocaleDateString('en-US', options);
  };

  const getRarityStars = (rarity: string) => {
    const count = rarity === 'very-rare' ? 5 : rarity === 'rare' ? 4 : rarity === 'uncommon' ? 3 : 2;
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={cn(
          "h-4 w-4",
          i < count ? "text-amber-400 fill-current" : "text-muted-foreground"
        )} 
      />
    ));
  };

  const isUpcoming = new Date(event.date) > new Date();
  const daysUntil = Math.ceil((new Date(event.date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-card/95 backdrop-blur-md border-border/50 shadow-stellar">
        <DialogHeader>
          <DialogTitle className={cn("text-2xl font-bold flex items-center gap-3", getEventTypeStyle(event.type))}>
            <div className="flex-1">
              {event.title}
            </div>
            <Badge className={cn("flex items-center gap-1", getRarityStyle(event.rarity))}>
              <Star className="h-3 w-3 fill-current" />
              {event.rarity}
            </Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Event Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-lg">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="font-semibold">{formatDate(event.date, event.endDate)}</span>
              {isUpcoming && daysUntil > 0 && (
                <Badge variant="outline" className="ml-auto">
                  {daysUntil === 1 ? 'Tomorrow' : `${daysUntil} days away`}
                </Badge>
              )}
            </div>

            {event.peak && (
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <span>Peak time: <strong>{event.peak}</strong></span>
              </div>
            )}

            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{getVisibilityText()}</span>
            </div>

            <div className="flex items-center gap-3">
              <Info className="h-5 w-5 text-primary" />
              <span>Rarity Level:</span>
              <div className="flex gap-1">
                {getRarityStars(event.rarity)}
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">Description</h3>
            <p className="text-muted-foreground leading-relaxed">
              {event.description}
            </p>
          </div>

          {/* Did You Know Facts */}
          {event.facts && event.facts.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Did You Know?</h3>
              <div className="space-y-2">
                {event.facts.map((fact, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-border/30">
                    <Star className="h-4 w-4 text-amber-400 mt-0.5 shrink-0" />
                    <p className="text-sm text-muted-foreground">{fact}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4 border-t border-border/30">
            <Button className="flex-1 bg-primary hover:bg-primary/90">
              <Bell className="h-4 w-4 mr-2" />
              Set Reminder
            </Button>
            <Button variant="outline" className="flex-1 border-border/50 hover:bg-background/80">
              <Heart className="h-4 w-4 mr-2" />
              Add to Favorites
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventDetailsModal;