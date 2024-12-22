"use client";

import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { MessagesView } from "@/components/dashboard/views/messages";

export default function MessagesPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <MessagesView />
      </div>
    </div>
  );
}