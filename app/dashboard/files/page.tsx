"use client";

import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardSidebar } from "@/components/dashboard/sidebar";
import { FilesView } from "@/components/dashboard/views/files";

export default function FilesPage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <div className="flex">
        <DashboardSidebar />
        <FilesView />
      </div>
    </div>
  );
}