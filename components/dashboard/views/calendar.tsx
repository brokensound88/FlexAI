"use client";

import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export function CalendarView() {
  const date = new Date();

  return (
    <main className="flex-1 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Calendar</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Event
        </Button>
      </div>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-4">
        <Card className="lg:col-span-3 p-6">
          <Calendar
            mode="single"
            selected={date}
            className="rounded-md border"
          />
        </Card>
        <Card className="p-6">
          <h2 className="font-semibold mb-4">Upcoming Events</h2>
          <div className="space-y-4">
            <div className="p-3 bg-muted/50 rounded-lg">
              <p className="font-medium">Team Meeting</p>
              <p className="text-sm text-muted-foreground">Today, 2:00 PM</p>
            </div>
            <div className="p-3 bg-muted/50 rounded-lg">
              <p className="font-medium">Project Review</p>
              <p className="text-sm text-muted-foreground">Tomorrow, 10:00 AM</p>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}