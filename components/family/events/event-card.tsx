"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Bell } from "lucide-react";
import { format } from "date-fns";
import type { FamilyEvent } from "@/types/family";

interface EventCardProps {
  event: FamilyEvent;
  onRSVP: (eventId: string, status: 'yes' | 'no' | 'maybe') => void;
  onReminder: (eventId: string) => void;
}

export function EventCard({ event, onRSVP, onReminder }: EventCardProps) {
  const getEventTypeColor = (type: FamilyEvent['type']) => {
    const colors = {
      birthday: 'bg-pink-500',
      recital: 'bg-purple-500',
      sports: 'bg-blue-500',
      party: 'bg-green-500',
      holiday: 'bg-red-500',
      other: 'bg-gray-500'
    };
    return colors[type] || colors.other;
  };

  return (
    <Card className="p-4 space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge className={getEventTypeColor(event.type)}>
              {event.type}
            </Badge>
            <h3 className="font-semibold">{event.title}</h3>
          </div>
          
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {format(event.date, "EEEE, MMMM d, yyyy 'at' h:mm a")}
            </div>
            
            {event.location && (
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {event.location.address}
              </div>
            )}
            
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              {event.participants.length} participants
            </div>
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={() => onReminder(event.id)}
        >
          <Bell className="h-4 w-4" />
        </Button>
      </div>

      <div className="flex gap-2">
        <Button
          variant="outline"
          className="flex-1"
          onClick={() => onRSVP(event.id, 'yes')}
        >
          Yes
        </Button>
        <Button
          variant="outline"
          className="flex-1"
          onClick={() => onRSVP(event.id, 'maybe')}
        >
          Maybe
        </Button>
        <Button
          variant="outline"
          className="flex-1"
          onClick={() => onRSVP(event.id, 'no')}
        >
          No
        </Button>
      </div>
    </Card>
  );
}