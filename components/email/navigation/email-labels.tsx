"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Plus, Tag } from "lucide-react";

interface EmailLabel {
  id: string;
  name: string;
  color: string;
}

interface EmailLabelsProps {
  labels: EmailLabel[];
  selectedLabels: string[];
  onToggleLabel: (labelId: string) => void;
}

export function EmailLabels({ labels, selectedLabels, onToggleLabel }: EmailLabelsProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between px-4 py-2">
        <h3 className="text-sm font-semibold">Labels</h3>
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
          {labels.map((label) => (
            <Button
              key={label.id}
              variant={selectedLabels.includes(label.id) ? "secondary" : "ghost"}
              className="w-full justify-start text-sm"
              onClick={() => onToggleLabel(label.id)}
            >
              <Tag className="h-4 w-4 mr-2" style={{ color: label.color }} />
              {label.name}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}