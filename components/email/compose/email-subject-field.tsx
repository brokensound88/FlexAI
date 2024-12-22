"use client";

import { Input } from "@/components/ui/input";

interface EmailSubjectFieldProps {
  value: string;
  onChange: (value: string) => void;
}

export function EmailSubjectField({ value, onChange }: EmailSubjectFieldProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium uppercase w-12">Subject:</span>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter subject"
        className="flex-1"
      />
    </div>
  );
}