"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

interface EmailSortProps {
  field: string;
  direction: "asc" | "desc";
  onSort: (field: string) => void;
}

export function EmailSort({ field, direction, onSort }: EmailSortProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      className="flex items-center gap-1"
      onClick={() => onSort(field)}
    >
      {field}
      <ArrowUpDown className={`h-4 w-4 transition-transform ${
        direction === "desc" ? "rotate-180" : ""
      }`} />
    </Button>
  );
}