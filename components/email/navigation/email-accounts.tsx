"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Plus } from "lucide-react";
import type { EmailAccount } from "@/types/email";

interface EmailAccountsProps {
  accounts: EmailAccount[];
  selectedAccount: EmailAccount | null;
  onSelectAccount: (account: EmailAccount) => void;
}

export function EmailAccounts({ accounts, selectedAccount, onSelectAccount }: EmailAccountsProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between px-4 py-2">
        <h3 className="text-sm font-semibold">Accounts</h3>
        <div className="flex gap-1">
          <Button variant="ghost" size="icon" onClick={() => setIsExpanded(!isExpanded)}>
            <ChevronDown className={`h-4 w-4 transition-transform ${isExpanded ? "" : "-rotate-90"}`} />
          </Button>
          <Button variant="ghost" size="icon">
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      {isExpanded && (
        <div className="space-y-1 px-2">
          {accounts.map((account) => (
            <Button
              key={account.id}
              variant={selectedAccount?.id === account.id ? "secondary" : "ghost"}
              className="w-full justify-start text-sm"
              onClick={() => onSelectAccount(account)}
            >
              <div className={`w-2 h-2 rounded-full mr-2 ${account.connected ? "bg-green-500" : "bg-red-500"}`} />
              {account.email}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}