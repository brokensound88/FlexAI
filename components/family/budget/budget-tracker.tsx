"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { DollarSign, PieChart, TrendingUp, Plus } from "lucide-react";

interface BudgetCategory {
  id: string;
  name: string;
  allocated: number;
  spent: number;
  color: string;
}

interface BudgetTrackerProps {
  categories: BudgetCategory[];
  onAddExpense: () => void;
  onViewReports: () => void;
}

export function BudgetTracker({ categories, onAddExpense, onViewReports }: BudgetTrackerProps) {
  const totalAllocated = categories.reduce((sum, cat) => sum + cat.allocated, 0);
  const totalSpent = categories.reduce((sum, cat) => sum + cat.spent, 0);
  const progress = (totalSpent / totalAllocated) * 100;

  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <DollarSign className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold">Family Budget</h2>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={onViewReports}>
            <PieChart className="h-4 w-4 mr-2" />
            Reports
          </Button>
          <Button onClick={onAddExpense}>
            <Plus className="h-4 w-4 mr-2" />
            Add Expense
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <p className="text-sm text-muted-foreground">Monthly Overview</p>
            <p className="text-sm font-medium">${totalSpent} / ${totalAllocated}</p>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="space-y-4">
          {categories.map((category) => (
            <div key={category.id} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: category.color }}
                  />
                  <span className="font-medium">{category.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">
                  ${category.spent} / ${category.allocated}
                </span>
              </div>
              <Progress
                value={(category.spent / category.allocated) * 100}
                className="h-1.5"
              />
            </div>
          ))}
        </div>

        <div className="pt-4 border-t">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Remaining Budget</span>
            <div className="flex items-center gap-1">
              <TrendingUp className="h-4 w-4 text-green-500" />
              <span className="font-medium text-green-500">
                ${totalAllocated - totalSpent}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}