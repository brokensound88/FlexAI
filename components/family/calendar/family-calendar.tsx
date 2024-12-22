"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Filter } from "lucide-react";
import type { FamilyEvent } from "@/types/family";

interface FamilyCalendarProps {
  events: FamilyEvent[];
  onAddEvent: () => void;
  onSelectEvent: (event: FamilyEvent) => void;
}

export function FamilyCalendar({ events, onAddEvent, onSelectEvent }: FamilyCalendarProps) {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [view, setView] = useState<"month" | "week" | "day">("month");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Family Calendar</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button size="sm" onClick={onAddEvent}>
            <Plus className="h-4 w-4 mr-2" />
            Add Event
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <Card className="lg:col-span-3 p-4">
          <Calendar
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
            className="rounded-md border"
          />
        </Card>

        <Card className="p-4">
          <h3 className="font-semibold mb-4">Upcoming Events</h3>
          <div className="space-y-2">
            {events.map((event) => (
              <Button
                key={event.id}
                variant="ghost"
                className="w-full justify-start text-sm"
                onClick={() => onSelectEvent(event)}
              >
                <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                {event.title}
              </Button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}