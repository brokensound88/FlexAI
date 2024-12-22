"use client";

import { Card } from "@/components/ui/card";
import { Users, MessageSquare, CheckSquare, Clock } from "lucide-react";

const stats = [
  {
    name: "Team Members",
    value: "12",
    icon: Users,
    change: "+2 this week"
  },
  {
    name: "Active Projects",
    value: "8",
    icon: CheckSquare,
    change: "+1 this week"
  },
  {
    name: "Messages",
    value: "24",
    icon: MessageSquare,
    change: "+8 today"
  },
  {
    name: "Hours Tracked",
    value: "164",
    icon: Clock,
    change: "+23 this week"
  }
];

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat) => (
        <Card key={stat.name} className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">{stat.name}</p>
              <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
              <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
            </div>
            <stat.icon className="h-8 w-8 text-primary opacity-75" />
          </div>
        </Card>
      ))}
    </div>
  );
}