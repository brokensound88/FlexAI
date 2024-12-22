"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Target, Plus, Trophy, Calendar } from "lucide-react";

interface FamilyGoal {
  id: string;
  title: string;
  description: string;
  deadline: Date;
  progress: number;
  participants: string[];
  milestones: {
    id: string;
    title: string;
    completed: boolean;
  }[];
}

interface FamilyGoalsProps {
  goals: FamilyGoal[];
  onAddGoal: () => void;
  onUpdateProgress: (goalId: string, progress: number) => void;
  onCompleteMilestone: (goalId: string, milestoneId: string) => void;
}

export function FamilyGoals({
  goals,
  onAddGoal,
  onUpdateProgress,
  onCompleteMilestone
}: FamilyGoalsProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Target className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold">Family Goals</h2>
        </div>
        <Button onClick={onAddGoal}>
          <Plus className="h-4 w-4 mr-2" />
          Add Goal
        </Button>
      </div>

      <div className="space-y-6">
        {goals.map((goal) => (
          <Card key={goal.id} className="p-4">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-medium">{goal.title}</h3>
                <p className="text-sm text-muted-foreground">{goal.description}</p>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                {goal.deadline.toLocaleDateString()}
              </div>
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Progress</span>
                <span className="text-sm font-medium">{goal.progress}%</span>
              </div>
              <Progress value={goal.progress} />
            </div>

            <div className="space-y-2">
              {goal.milestones.map((milestone) => (
                <div
                  key={milestone.id}
                  className="flex items-center justify-between p-2 hover:bg-muted/50 rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-6 w-6"
                      onClick={() => onCompleteMilestone(goal.id, milestone.id)}
                    >
                      <Trophy
                        className={`h-4 w-4 ${
                          milestone.completed ? "text-yellow-500" : "text-muted-foreground"
                        }`}
                      />
                    </Button>
                    <span className={milestone.completed ? "line-through" : ""}>
                      {milestone.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
}