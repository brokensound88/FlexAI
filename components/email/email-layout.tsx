"use client";

import { useState } from "react";
import { EmailNavigation } from "./navigation/email-navigation";
import { EmailList } from "./email-list";
import { EmailDetail } from "./detail/email-detail";
import { EmailCompose } from "./compose/email-compose";
import { EmailToolbar } from "./toolbar/email-toolbar";
import type { Email, EmailAccount, EmailFolder } from "@/types/email";

// Mock data for demonstration
const mockAccounts: EmailAccount[] = [
  {
    id: "1",
    type: "gmail",
    email: "john@gmail.com",
    name: "John Doe",
    connected: true
  }
];

const mockFolders: EmailFolder[] = [
  { id: "inbox", name: "Inbox", type: "inbox", unread: 3, total: 120 },
  { id: "sent", name: "Sent", type: "sent", unread: 0, total: 50 },
  { id: "drafts", name: "Drafts", type: "drafts", unread: 1, total: 5 },
  { id: "trash", name: "Trash", type: "trash", unread: 0, total: 10 }
];

const mockEmails: Email[] = [
  {
    id: "1",
    accountId: "1",
    folderId: "inbox",
    subject: "Project Update: Q4 Roadmap",
    from: {
      name: "Sarah Chen",
      email: "sarah@company.com",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop"
    },
    to: [{ name: "John Doe", email: "john@gmail.com", type: "to" }],
    date: new Date(),
    body: {
      text: "Hi team, I wanted to share the latest updates on our Q4 roadmap...",
      html: "<p>Hi team,</p><p>I wanted to share the latest updates on our Q4 roadmap...</p>"
    },
    read: false,
    starred: true,
    labels: ["work", "important"],
    flags: {
      forwarded: false,
      replied: false,
      important: true
    }
  }
];

export function EmailLayout() {
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);
  const [isComposing, setIsComposing] = useState(false);
  const [selectedEmails, setSelectedEmails] = useState<Set<string>>(new Set());

  const handleSearch = (query: string) => {
    // Implement email search
  };

  const handleSort = (field: string) => {
    // Implement email sorting
  };

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <EmailNavigation
        accounts={mockAccounts}
        folders={mockFolders}
        onComposeClick={() => setIsComposing(true)}
      />
      
      <div className="flex-1 flex flex-col min-w-0">
        <EmailToolbar
          selectedCount={selectedEmails.size}
          onSearch={handleSearch}
          onSort={handleSort}
        />
        
        <div className="flex-1 flex min-h-0">
          <div className={`flex-1 ${selectedEmail ? 'hidden lg:block' : ''}`}>
            <EmailList
              emails={mockEmails}
              onSelectEmail={setSelectedEmail}
            />
          </div>
          
          {selectedEmail && (
            <div className="flex-1 border-l">
              <EmailDetail
                email={selectedEmail}
                onBack={() => setSelectedEmail(null)}
              />
            </div>
          )}
        </div>
      </div>

      {isComposing && (
        <div className="fixed bottom-4 right-4 w-[600px] h-[500px] bg-background border rounded-lg shadow-lg">
          <EmailCompose />
        </div>
      )}
    </div>
  );
}