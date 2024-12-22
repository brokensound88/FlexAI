"use client";

import { Card } from "@/components/ui/card";
import { DashboardStats } from "@/components/dashboard/stats";
import { DashboardChart } from "@/components/dashboard/chart";
import { DashboardTasks } from "@/components/dashboard/tasks";

export function DashboardMain() {
  return (
    <main className="flex-1 p-8">
      <div className="grid gap-8">
        <DashboardStats />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Activity Overview</h2>
            <DashboardChart />
          </Card>
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Tasks</h2>
            <DashboardTasks />
          </Card>
        </div>
      </div>
    </main>
  );
}