"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Book, Clock, HelpCircle, Plus } from "lucide-react";

interface Assignment {
  id: string;
  subject: string;
  title: string;
  dueDate: Date;
  status: 'not-started' | 'in-progress' | 'completed';
  needsHelp: boolean;
}

interface HomeworkHelperProps {
  assignments: Assignment[];
  onAddAssignment: () => void;
  onRequestHelp: (id: string) => void;
  onUpdateStatus: (id: string, status: Assignment['status']) => void;
}

export function HomeworkHelper({
  assignments,
  onAddAssignment,
  onRequestHelp,
  onUpdateStatus
}: HomeworkHelperProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold">Homework Helper</h2>
          <p className="text-sm text-muted-foreground">
            Track assignments and get help
          </p>
        </div>
        <Button onClick={onAddAssignment}>
          <Plus className="h-4 w-4 mr-2" />
          Add Assignment
        </Button>
      </div>

      <div className="space-y-4">
        {assignments.map((assignment) => (
          <Card key={assignment.id} className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Book className="h-5 w-5 text-primary" />
                <div>
                  <h3 className="font-medium">{assignment.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {assignment.subject}
                  </p>
                </div>
              </div>
              <Button
                variant={assignment.needsHelp ? "secondary" : "ghost"}
                size="sm"
                onClick={() => onRequestHelp(assignment.id)}
              >
                <HelpCircle className="h-4 w-4 mr-2" />
                Get Help
              </Button>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                Due: {assignment.dueDate.toLocaleDateString()}
              </div>
              <select
                className="text-sm bg-transparent border rounded-md px-2 py-1"
                value={assignment.status}
                onChange={(e) => 
                  onUpdateStatus(assignment.id, e.target.value as Assignment['status'])
                }
              >
                <option value="not-started">Not Started</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
}