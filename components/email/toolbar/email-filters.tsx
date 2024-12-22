"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface Filter {
  id: string;
  type: string;
  value: string;
}

interface EmailFiltersProps {
  filters: Filter[];
  onRemoveFilter: (id: string) => void;
  onClearFilters: () => void;
}

export function EmailFilters({ filters, onRemoveFilter, onClearFilters }: EmailFiltersProps) {
  if (filters.length === 0) return null;

  return (
    <div className="flex items-center gap-2 p-2 bg-muted/50 rounded-lg">
      <div className="flex flex-wrap gap-2">
        {filters.map((filter) => (
          <Badge key={filter.id} variant="secondary" className="flex items-center gap-1">
            <span className="text-xs text-muted-foreground">{filter.type}:</span>
            {filter.value}
            <Button
              variant="ghost"
              size="icon"
              className="h-4 w-4 hover:bg-transparent"
              onClick={() => onRemoveFilter(filter.id)}
            >
              <X className="h-3 w-3" />
            </Button>
          </Badge>
        ))}
      </div>
      <Button variant="ghost" size="sm" onClick={onClearFilters}>
        Clear all
      </Button>
    </div>
  );
}