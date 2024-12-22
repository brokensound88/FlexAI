"use client";

import { Textarea } from "@/components/ui/textarea";

interface EmailEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function EmailEditor({ value, onChange }: EmailEditorProps) {
  return (
    <Textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Write your message..."
      className="w-full h-full resize-none border-none"
    />
  );
}