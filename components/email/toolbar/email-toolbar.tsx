"use client";

import { useState } from "react";
import { EmailSearch } from "./email-search";
import { EmailFilters } from "./email-filters";
import { EmailSort } from "./email-sort";
import { EmailActionsMenu } from "./email-actions-menu";
import { Separator } from "@/components/ui/separator";

interface EmailToolbarProps {
  selectedCount: number;
  onSearch: (query: string) => void;
  onSort: (field: string) => void;
}

export function EmailToolbar({ selectedCount, onSearch, onSort }: EmailToolbarProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortField, setSortField] = useState("date");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("desc");
  const [filters, setFilters] = useState<Array<{ id: string; type: string; value: string }>>([]);

  const handleSort = (field: string) => {
    if (field === sortField) {
      setSortDirection(prev => prev === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
    onSort(field);
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    onSearch(value);
  };

  const handleRemoveFilter = (id: string) => {
    setFilters(filters.filter(f => f.id !== id));
  };

  const handleClearFilters = () => {
    setFilters([]);
  };

  return (
    <div className="border-b">
      <div className="p-4 flex items-center justify-between gap-4">
        <EmailSearch
          value={searchQuery}
          onChange={handleSearch}
          onAdvancedSearch={() => {}}
        />
        <div className="flex items-center gap-4">
          <EmailActionsMenu
            selectedCount={selectedCount}
            onArchive={() => {}}
            onDelete={() => {}}
            onMove={() => {}}
            onLabel={() => {}}
            onFlag={() => {}}
            onStar={() => {}}
          />
          <Separator orientation="vertical" className="h-6" />
          <EmailSort
            field={sortField}
            direction={sortDirection}
            onSort={handleSort}
          />
        </div>
      </div>
      <EmailFilters
        filters={filters}
        onRemoveFilter={handleRemoveFilter}
        onClearFilters={handleClearFilters}
      />
    </div>
  );
}