"use client";

import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { formatDistanceToNow } from "date-fns";
import { Star, Reply, Forward, MoreVertical, ChevronLeft } from "lucide-react";
import type { Email } from "@/types/email";

interface EmailHeaderProps {
  email: Email;
  onBack: () => void;
  onReply: () => void;
  onForward: () => void;
  onStar: () => void;
}

export function EmailHeader({ email, onBack, onReply, onForward, onStar }: EmailHeaderProps) {
  return (
    <div className="p-4 border-b">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={onBack}>
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <h2 className="text-lg font-semibold">{email.subject}</h2>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={onStar}>
            <Star className={`h-4 w-4 ${email.starred ? "fill-yellow-400" : ""}`} />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreVertical className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="flex items-start gap-4">
        <Avatar className="h-10 w-10" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">{email.from.name}</p>
              <p className="text-sm text-muted-foreground">{email.from.email}</p>
            </div>
            <p className="text-sm text-muted-foreground">
              {formatDistanceToNow(email.date, { addSuffix: true })}
            </p>
          </div>
          <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
            <span>To:</span>
            {email.to.map((recipient) => (
              <span key={recipient.email}>{recipient.name}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}