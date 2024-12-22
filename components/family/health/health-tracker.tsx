"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Activity, Calendar, Plus } from "lucide-react";

interface HealthRecord {
  id: string;
  type: 'appointment' | 'medication' | 'vaccination' | 'checkup';
  title: string;
  date: Date;
  member: string;
  notes?: string;
  reminder: boolean;
}

interface HealthTrackerProps {
  records: HealthRecord[];
  onAddRecord: () => void;
  onSetReminder: (id: string) => void;
}

export function HealthTracker({
  records,
  onAddRecord,
  onSetReminder
}: HealthTrackerProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-red-500" />
          <h2 className="text-lg font-semibold">Family Health</h2>
        </div>
        <Button onClick={onAddRecord}>
          <Plus className="h-4 w-4 mr-2" />
          Add Record
        </Button>
      </div>

      <div className="space-y-4">
        {records.map((record) => (
          <Card key={record.id} className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <Activity className="h-4 w-4 text-primary" />
                  <h3 className="font-medium">{record.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {record.member}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">
                  {record.date.toLocaleDateString()}
                </span>
              </div>
            </div>
            {record.notes && (
              <p className="text-sm text-muted-foreground mt-2">
                {record.notes}
              </p>
            )}
            <Button
              variant={record.reminder ? "secondary" : "ghost"}
              size="sm"
              className="mt-4"
              onClick={() => onSetReminder(record.id)}
            >
              Set Reminder
            </Button>
          </Card>
        ))}
      </div>
    </Card>
  );
}