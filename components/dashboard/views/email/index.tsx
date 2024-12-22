"use client";

import { EmailSidebar } from "./sidebar";
import { EmailList } from "./list";
import { EmailDetail } from "./detail";
import { useState } from "react";
import { Email } from "@/types/email";

export function EmailView() {
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null);

  return (
    <main className="flex-1 flex">
      <EmailSidebar />
      <div className="flex-1 flex flex-col">
        {selectedEmail ? (
          <EmailDetail email={selectedEmail} onBack={() => setSelectedEmail(null)} />
        ) : (
          <EmailList onSelectEmail={setSelectedEmail} />
        )}
      </div>
    </main>
  );
}