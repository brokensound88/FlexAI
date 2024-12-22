"use client";

import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { AnalyticsView } from "@/components/dashboard/views/analytics";

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <AnalyticsView />
      </div>
    </div>
  );
}