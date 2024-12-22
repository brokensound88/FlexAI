"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, FileText, Image, Film, Music, Archive } from "lucide-react";
import type { EmailAttachment } from "@/types/email";

interface EmailAttachmentsListProps {
  attachments: EmailAttachment[];
}

export function EmailAttachmentsList({ attachments }: EmailAttachmentsListProps) {
  const getAttachmentIcon = (type: string) => {
    if (type.startsWith("image/")) return Image;
    if (type.startsWith("video/")) return Film;
    if (type.startsWith("audio/")) return Music;
    if (type.includes("zip") || type.includes("rar")) return Archive;
    return FileText;
  };

  const formatSize = (bytes: number) => {
    const units = ["B", "KB", "MB", "GB"];
    let size = bytes;
    let unitIndex = 0;
    
    while (size >= 1024 && unitIndex < units.length - 1) {
      size /= 1024;
      unitIndex++;
    }
    
    return `${size.toFixed(1)} ${units[unitIndex]}`;
  };

  return (
    <div className="p-4 border-t">
      <h3 className="font-medium mb-3">Attachments ({attachments.length})</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {attachments.map((attachment) => {
          const Icon = getAttachmentIcon(attachment.type);
          return (
            <Card key={attachment.id} className="p-3 flex items-center gap-3">
              <Icon className="h-8 w-8 text-muted-foreground" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">{attachment.name}</p>
                <p className="text-xs text-muted-foreground">{formatSize(attachment.size)}</p>
              </div>
              <Button variant="ghost" size="icon">
                <Download className="h-4 w-4" />
              </Button>
            </Card>
          );
        })}
      </div>
    </div>
  );
}