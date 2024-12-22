"use client";

import { Button } from "@/components/ui/button";
import { 
  Plus,
  Inbox,
  Send,
  Star,
  Archive,
  Trash2,
  Tag,
  AlertCircle
} from "lucide-react";

const categories = [
  { name: "Inbox", icon: Inbox, count: 24 },
  { name: "Sent", icon: Send, count: 5 },
  { name: "Starred", icon: Star, count: 3 },
  { name: "Archive", icon: Archive, count: 15 },
  { name: "Spam", icon: AlertCircle, count: 2 },
  { name: "Trash", icon: Trash2, count: 8 }
];

const labels = [
  { name: "Important", color: "red" },
  { name: "Work", color: "blue" },
  { name: "Personal", color: "green" },
  { name: "Projects", color: "purple" }
];

export function EmailSidebar() {
  return (
    <div className="w-64 border-r p-4 flex flex-col h-[calc(100vh-4rem)]">
      <Button className="mb-6">
        <Plus className="h-4 w-4 mr-2" />
        Compose
      </Button>

      <div className="space-y-1">
        {categories.map((category) => (
          <Button
            key={category.name}
            variant="ghost"
            className="w-full justify-start"
          >
            <category.icon className="h-4 w-4 mr-2" />
            {category.name}
            {category.count > 0 && (
              <span className="ml-auto text-xs bg-muted px-2 py-0.5 rounded-full">
                {category.count}
              </span>
            )}
          </Button>
        ))}
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium">Labels</h3>
          <Button variant="ghost" size="icon">
            <Tag className="h-4 w-4" />
          </Button>
        </div>
        <div className="space-y-1">
          {labels.map((label) => (
            <Button
              key={label.name}
              variant="ghost"
              className="w-full justify-start"
            >
              <span
                className={`h-2 w-2 rounded-full bg-${label.color}-500 mr-2`}
              />
              {label.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}