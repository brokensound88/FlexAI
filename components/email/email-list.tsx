"use client";

import { useState } from "react";
import { Email } from "@/types/email";
import { formatDistanceToNow } from "date-fns";
import { Star, Paperclip, MoreVertical } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface EmailListProps {
  emails: Email[];
  onSelectEmail: (email: Email) => void;
}

export function EmailList({ emails, onSelectEmail }: EmailListProps) {
  const [selectedEmails, setSelectedEmails] = useState<Set<string>>(new Set());

  const toggleEmailSelection = (emailId: string) => {
    const newSelection = new Set(selectedEmails);
    if (newSelection.has(emailId)) {
      newSelection.delete(emailId);
    } else {
      newSelection.add(emailId);
    }
    setSelectedEmails(newSelection);
  };

  return (
    <div className="flex-1 overflow-auto">
      {emails.map((email) => (
        <div
          key={email.id}
          className={`group flex items-center p-4 border-b hover:bg-muted/50 cursor-pointer ${
            !email.read ? "bg-muted/20 font-medium" : ""
          }`}
          onClick={() => onSelectEmail(email)}
        >
          <div className="flex items-center space-x-4 min-w-0">
            <Checkbox
              checked={selectedEmails.has(email.id)}
              onCheckedChange={() => toggleEmailSelection(email.id)}
              onClick={(e) => e.stopPropagation()}
            />
            <Button
              variant="ghost"
              size="icon"
              className="opacity-0 group-hover:opacity-100"
              onClick={(e) => {
                e.stopPropagation();
                // Toggle starred status
              }}
            >
              <Star className={`h-4 w-4 ${email.starred ? "fill-yellow-400" : ""}`} />
            </Button>
            <Avatar className="h-8 w-8" />
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between">
                <p className="truncate">{email.from.name}</p>
                <p className="text-sm text-muted-foreground ml-2">
                  {formatDistanceToNow(email.date, { addSuffix: true })}
                </p>
              </div>
              <p className="truncate">{email.subject}</p>
              <div className="flex items-center text-sm text-muted-foreground">
                {email.attachments && email.attachments.length > 0 && (
                  <Paperclip className="h-4 w-4 mr-2" />
                )}
                <p className="truncate">{email.body.text}</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="opacity-0 group-hover:opacity-100 ml-2"
              onClick={(e) => {
                e.stopPropagation();
                // Show email actions menu
              }}
            >
              <MoreVertical className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}