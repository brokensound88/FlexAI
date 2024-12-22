"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Plus, Utensils } from "lucide-react";

interface Meal {
  id: string;
  name: string;
  date: Date;
  type: "breakfast" | "lunch" | "dinner";
  recipe?: string;
  assignedTo?: string;
}

interface MealPlannerProps {
  meals: Meal[];
  onAddMeal: () => void;
  onEditMeal: (meal: Meal) => void;
}

export function MealPlanner({ meals, onAddMeal, onEditMeal }: MealPlannerProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Utensils className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold">Family Meal Planner</h2>
        </div>
        <Button onClick={onAddMeal}>
          <Plus className="h-4 w-4 mr-2" />
          Add Meal
        </Button>
      </div>

      <div className="space-y-4">
        {meals.map((meal) => (
          <Card
            key={meal.id}
            className="p-3 hover:bg-muted/50 cursor-pointer"
            onClick={() => onEditMeal(meal)}
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium">{meal.name}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  {meal.date.toLocaleDateString()}
                </div>
              </div>
              {meal.assignedTo && (
                <span className="text-sm text-muted-foreground">
                  {meal.assignedTo}
                </span>
              )}
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
}