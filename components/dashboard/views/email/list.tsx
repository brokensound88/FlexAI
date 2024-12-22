"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Search, Star, MoreVertical } from "lucide-react";
import { Email } from "@/types/email";
import { formatDistanceToNow } from "date-fns";

const emails: Email[] = [
  {
    id: 1,
    from: {
      name: "Sarah Chen",
      email: "sarah@flex.com",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop"
    },
    subject: "Project Update: Q4 Roadmap",
    preview: "Hi team, I wanted to share the latest updates on our Q4 roadmap...",
    date: new Date(2024, 2, 22, 14, 30),
    read: false,
    starred: true,
    labels: ["work", "important"]
  },
  {
    id: 2,
    from: {
      name: "Michael Park",
      email: "michael@flex.com",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop"
    },
    subject: "Design Review Meeting",
    preview: "Let's schedule a design review meeting to discuss the new features...",
    date: new Date(2024, 2, 22, 11, 15),
    read: true,
    starred: false,
    labels: ["work"]
  }
];

interface EmailListProps {
  onSelectEmail: (email: Email) => void;
}

export function EmailList({ onSelectEmail }: EmailListProps) {
  return (
    <div className="flex-1 flex flex-col">
      <div className="p-4 border-b">
        <Input
          placeholder="Search emails..."
          prefix={<Search className="h-4 w-4 text-muted-foreground" />}
        />
      </div>
      <div className="flex-1 overflow-auto">
        {emails.map((email) => (
          <div
            key={email.id}
            className={`p-4 border-b hover:bg-muted/50 cursor-pointer ${
              !email.read ? "bg-muted/20" : ""
            }`}
            onClick={() => onSelectEmail(email)}
          >
            <div className="flex items-center space-x-4">
              <Checkbox />
              <Button
                variant="ghost"
                size="icon"
                className="text-muted-foreground hover:text-primary"
              >
                <Star
                  className={`h-4 w-4 ${email.starred ? "fill-current text-primary" : ""}`}
                />
              </Button>
              <img
                src={email.from.avatar}
                alt={email.from.name}
                className="h-8 w-8 rounded-full"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className={`font-medium ${!email.read ? "font-semibold" : ""}`}>
                    {email.from.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {formatDistanceToNow(email.date, { addSuffix: true })}
                  </p>
                </div>
                <p className={`text-sm truncate ${!email.read ? "font-semibold" : ""}`}>
                  {email.subject}
                </p>
                <p className="text-sm text-muted-foreground truncate">
                  {email.preview}
                </p>
              </div>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}