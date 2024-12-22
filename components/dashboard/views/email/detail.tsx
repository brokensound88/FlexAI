"use client";

import { Button } from "@/components/ui/button";
import { 
  ArrowLeft,
  Star,
  Reply,
  Forward,
  MoreVertical,
  Trash2,
  Archive
} from "lucide-react";
import { Email } from "@/types/email";
import { format } from "date-fns";

interface EmailDetailProps {
  email: Email;
  onBack: () => void;
}

export function EmailDetail({ email, onBack }: EmailDetailProps) {
  return (
    <div className="flex-1 flex flex-col">
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h2 className="text-lg font-semibold">{email.subject}</h2>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Archive className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Trash2 className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="p-6 flex-1">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <img
              src={email.from.avatar}
              alt={email.from.name}
              className="h-12 w-12 rounded-full"
            />
            <div>
              <p className="font-medium">{email.from.name}</p>
              <p className="text-sm text-muted-foreground">{email.from.email}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">
              {format(email.date, "MMM d, yyyy h:mm a")}
            </span>
            <Button variant="ghost" size="icon">
              <Star
                className={`h-4 w-4 ${email.starred ? "fill-current text-primary" : ""}`}
              />
            </Button>
          </div>
        </div>
        <div className="prose max-w-none">
          <p>{email.preview}</p>
        </div>
      </div>
      <div className="p-4 border-t">
        <div className="flex space-x-2">
          <Button>
            <Reply className="h-4 w-4 mr-2" />
            Reply
          </Button>
          <Button variant="outline">
            <Forward className="h-4 w-4 mr-2" />
            Forward
          </Button>
        </div>
      </div>
    </div>
  );
}