"use client";

import { useState } from "react";
import { EmailAccounts } from "./email-accounts";
import { EmailFolders } from "./email-folders";
import { EmailLabels } from "./email-labels";
import { Button } from "@/components/ui/button";
import { PenSquare } from "lucide-react";
import type { EmailAccount, EmailFolder } from "@/types/email";

interface EmailNavigationProps {
  accounts: EmailAccount[];
  folders: EmailFolder[];
  onComposeClick: () => void;
}

export function EmailNavigation({ accounts, folders, onComposeClick }: EmailNavigationProps) {
  const [selectedAccount, setSelectedAccount] = useState<EmailAccount | null>(accounts[0] || null);
  const [selectedFolder, setSelectedFolder] = useState<EmailFolder | null>(folders[0] || null);
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);

  const labels = [
    { id: "1", name: "Important", color: "#ef4444" },
    { id: "2", name: "Work", color: "#3b82f6" },
    { id: "3", name: "Personal", color: "#22c55e" },
    { id: "4", name: "Projects", color: "#a855f7" }
  ];

  const toggleLabel = (labelId: string) => {
    setSelectedLabels(prev => 
      prev.includes(labelId) 
        ? prev.filter(id => id !== labelId)
        : [...prev, labelId]
    );
  };

  return (
    <div className="w-64 border-r bg-card flex flex-col h-full">
      <div className="p-4">
        <Button className="w-full" onClick={onComposeClick}>
          <PenSquare className="h-4 w-4 mr-2" />
          Compose
        </Button>
      </div>

      <div className="flex-1 overflow-auto">
        <EmailAccounts
          accounts={accounts}
          selectedAccount={selectedAccount}
          onSelectAccount={setSelectedAccount}
        />
        
        <EmailFolders
          folders={folders}
          selectedFolder={selectedFolder}
          onSelectFolder={setSelectedFolder}
        />
        
        <EmailLabels
          labels={labels}
          selectedLabels={selectedLabels}
          onToggleLabel={toggleLabel}
        />
      </div>
    </div>
  );
}