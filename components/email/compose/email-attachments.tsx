"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Paperclip, X } from "lucide-react";
import type { EmailAttachment } from "@/types/email";

interface EmailAttachmentsProps {
  attachments: EmailAttachment[];
  onAdd: (attachments: EmailAttachment[]) => void;
  onRemove: (id: string) => void;
}

export function EmailAttachments({ attachments, onAdd, onRemove }: EmailAttachmentsProps) {
  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    // Handle file drop
  };

  return (
    <div
      className={`p-4 border-t ${
        isDragging ? "bg-muted" : ""
      }`}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
    >
      {attachments.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {attachments.map((attachment) => (
            <div
              key={attachment.id}
              className="flex items-center gap-2 p-2 bg-muted rounded-lg"
            >
              <span className="text-sm">{attachment.name}</span>
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4"
                onClick={() => onRemove(attachment.id)}
              >
                <X className="h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <Button variant="outline" onClick={() => document.getElementById("file-input")?.click()}>
            <Paperclip className="h-4 w-4 mr-2" />
            Attach Files
          </Button>
          <input
            id="file-input"
            type="file"
            multiple
            className="hidden"
            onChange={(e) => {
              // Handle file selection
            }}
          />
        </div>
      )}
    </div>
  );
}