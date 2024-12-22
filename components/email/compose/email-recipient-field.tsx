"use client";

import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import type { EmailRecipient } from "@/types/email";

interface EmailRecipientFieldProps {
  type: "to" | "cc" | "bcc";
  recipients: EmailRecipient[];
  onChange: (recipients: EmailRecipient[]) => void;
}

export function EmailRecipientField({ type, recipients, onChange }: EmailRecipientFieldProps) {
  const handleRemove = (email: string) => {
    onChange(recipients.filter(r => r.email !== email));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && e.currentTarget.value) {
      const email = e.currentTarget.value;
      onChange([...recipients, { email, name: email, type }]);
      e.currentTarget.value = "";
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2 mb-2">
      <span className="text-sm font-medium uppercase w-12">{type}:</span>
      <div className="flex-1 flex flex-wrap gap-2">
        {recipients.map((recipient) => (
          <Badge key={recipient.email} variant="secondary" className="flex items-center gap-1">
            {recipient.name}
            <button onClick={() => handleRemove(recipient.email)}>
              <X className="h-3 w-3" />
            </button>
          </Badge>
        ))}
        <Input
          type="email"
          className="border-none shadow-none flex-1 min-w-[200px]"
          placeholder="Enter email address"
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}