"use client";

import { Button } from "@/components/ui/button";
import {
  Archive,
  Flag,
  Folder,
  MoreHorizontal,
  Star,
  Tag,
  Trash2
} from "lucide-react";

interface EmailActionsMenuProps {
  selectedCount: number;
  onArchive: () => void;
  onDelete: () => void;
  onMove: () => void;
  onLabel: () => void;
  onFlag: () => void;
  onStar: () => void;
}

export function EmailActionsMenu({
  selectedCount,
  onArchive,
  onDelete,
  onMove,
  onLabel,
  onFlag,
  onStar
}: EmailActionsMenuProps) {
  if (selectedCount === 0) return null;

  return (
    <div className="flex items-center gap-1">
      <Button variant="ghost" size="icon" onClick={onArchive}>
        <Archive className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" onClick={onDelete}>
        <Trash2 className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" onClick={onMove}>
        <Folder className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" onClick={onLabel}>
        <Tag className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" onClick={onFlag}>
        <Flag className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon" onClick={onStar}>
        <Star className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <MoreHorizontal className="h-4 w-4" />
      </Button>
    </div>
  );
}