"use client";

import { Card } from "@/components/ui/card";
import type { Email } from "@/types/email";

interface EmailContentProps {
  email: Email;
}

export function EmailContent({ email }: EmailContentProps) {
  return (
    <div className="p-4 overflow-auto flex-1">
      <Card className="p-6">
        {email.body.html ? (
          <div dangerouslySetInnerHTML={{ __html: email.body.html }} />
        ) : (
          <div className="whitespace-pre-wrap">{email.body.text}</div>
        )}
      </Card>
    </div>
  );
}