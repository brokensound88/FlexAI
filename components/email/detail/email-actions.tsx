"use client";

import { Button } from "@/components/ui/button";
import { Reply, Forward, Trash2, Archive, Flag } from "lucide-react";

interface EmailActionsProps {
  onReply: () => void;
  onForward: () => void;
  onDelete: () => void;
  onArchive: () => void;
  onFlag: () => void;
}

export function EmailActions({ onReply, onForward, onDelete, onArchive, onFlag }: EmailActionsProps) {
  return (
    <div className="p-4 border-t flex items-center justify-between">
      <div className="flex gap-2">
        <Button onClick={onReply}>
          <Reply className="h-4 w-4 mr-2" />
          Reply
        </Button>
        <Button variant="outline" onClick={onForward}>
          <Forward className="h-4 w-4 mr-2" />
          Forward
        </Button>
      </div>
      <div className="flex gap-2">
        <Button variant="ghost" size="icon" onClick={onFlag}>
          <Flag className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={onArchive}>
          <Archive className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={onDelete}>
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}