"use client";

import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { TeamView } from "@/components/dashboard/views/team";

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <TeamView />
      </div>
    </div>
  );
}