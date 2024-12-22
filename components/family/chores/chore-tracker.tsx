"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Plus, Star } from "lucide-react";

interface Chore {
  id: string;
  title: string;
  assignee: string;
  points: number;
  completed: boolean;
  dueDate: Date;
  recurring: boolean;
}

interface ChoreTrackerProps {
  chores: Chore[];
  onAddChore: () => void;
  onCompleteChore: (id: string) => void;
}

export function ChoreTracker({ chores, onAddChore, onCompleteChore }: ChoreTrackerProps) {
  const completedChores = chores.filter(chore => chore.completed).length;
  const progress = (completedChores / chores.length) * 100;

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold">Family Chores</h2>
          <p className="text-sm text-muted-foreground">
            {completedChores} of {chores.length} completed
          </p>
        </div>
        <Button onClick={onAddChore}>
          <Plus className="h-4 w-4 mr-2" />
          Add Chore
        </Button>
      </div>

      <Progress value={progress} className="mb-6" />

      <div className="space-y-4">
        {chores.map((chore) => (
          <div
            key={chore.id}
            className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onCompleteChore(chore.id)}
              >
                <CheckCircle
                  className={`h-5 w-5 ${
                    chore.completed ? "text-green-500 fill-green-500" : ""
                  }`}
                />
              </Button>
              <div>
                <p className={chore.completed ? "line-through" : ""}>
                  {chore.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  Assigned to: {chore.assignee}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-500" />
              <span className="text-sm font-medium">{chore.points}</span>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}