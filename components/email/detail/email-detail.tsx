"use client";

import { EmailHeader } from "./email-header";
import { EmailContent } from "./email-content";
import { EmailAttachmentsList } from "./email-attachments-list";
import { EmailActions } from "./email-actions";
import type { Email } from "@/types/email";

interface EmailDetailProps {
  email: Email;
  onBack: () => void;
}

export function EmailDetail({ email, onBack }: EmailDetailProps) {
  const handleReply = () => {
    // Handle reply
  };

  const handleForward = () => {
    // Handle forward
  };

  const handleDelete = () => {
    // Handle delete
  };

  const handleArchive = () => {
    // Handle archive
  };

  const handleFlag = () => {
    // Handle flag
  };

  const handleStar = () => {
    // Handle star
  };

  return (
    <div className="flex flex-col h-full bg-background">
      <EmailHeader
        email={email}
        onBack={onBack}
        onReply={handleReply}
        onForward={handleForward}
        onStar={handleStar}
      />
      <EmailContent email={email} />
      {email.attachments && email.attachments.length > 0 && (
        <EmailAttachmentsList attachments={email.attachments} />
      )}
      <EmailActions
        onReply={handleReply}
        onForward={handleForward}
        onDelete={handleDelete}
        onArchive={handleArchive}
        onFlag={handleFlag}
      />
    </div>
  );
}