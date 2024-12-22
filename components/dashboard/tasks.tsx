"use client";

import { CheckCircle2, Circle } from "lucide-react";

const tasks = [
  {
    id: 1,
    title: "Review project proposal",
    completed: true,
    assignee: "John Doe",
    dueDate: "Today"
  },
  {
    id: 2,
    title: "Team meeting preparation",
    completed: false,
    assignee: "Sarah Chen",
    dueDate: "Tomorrow"
  },
  {
    id: 3,
    title: "Update documentation",
    completed: false,
    assignee: "Mike Wilson",
    dueDate: "Dec 24"
  }
];

export function DashboardTasks() {
  return (
    <div className="space-y-4">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
        >
          <div className="flex items-center space-x-3">
            {task.completed ? (
              <CheckCircle2 className="h-5 w-5 text-primary" />
            ) : (
              <Circle className="h-5 w-5 text-muted-foreground" />
            )}
            <div>
              <p className={task.completed ? "line-through text-muted-foreground" : ""}>
                {task.title}
              </p>
              <p className="text-sm text-muted-foreground">{task.assignee}</p>
            </div>
          </div>
          <span className="text-sm text-muted-foreground">{task.dueDate}</span>
        </div>
      ))}
    </div>
  );
}