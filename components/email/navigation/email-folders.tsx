"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Plus } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { EmailFolder } from "@/types/email";

interface EmailFoldersProps {
  folders: EmailFolder[];
  selectedFolder: EmailFolder | null;
  onSelectFolder: (folder: EmailFolder) => void;
}

export function EmailFolders({ folders, selectedFolder, onSelectFolder }: EmailFoldersProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between px-4 py-2">
        <h3 className="text-sm font-semibold">Folders</h3>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" onClick={() => setIsExpanded(!isExpanded)}>
            <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? "" : "-rotate-90"}`} />
          </Button>
          <Button variant="ghost" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {isExpanded && (
        <div className="space-y-1 px-2">
          {folders.map((folder) => (
            <Button
              key={folder.id}
              variant={selectedFolder?.id === folder.id ? "secondary" : "ghost"}
              className="w-full justify-between text-sm group"
              onClick={() => onSelectFolder(folder)}
            >
              <span>{folder.name}</span>
              {folder.unread > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {folder.unread}
                </Badge>
              )}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}