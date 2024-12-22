"use client";

import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { CalendarView } from "@/components/dashboard/views/calendar";

export default function CalendarPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <CalendarView />
      </div>
    </div>
  );
}