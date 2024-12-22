"use client";

import Link from "next/link";
import { 
  Home,
  Calendar,
  MessageSquare,
  Mail,
  FolderOpen,
  Users,
  BarChart,
  Settings,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Overview", href: "/dashboard", icon: Home },
  { name: "Calendar", href: "/dashboard/calendar", icon: Calendar },
  { name: "Messages", href: "/dashboard/messages", icon: MessageSquare },
  { name: "Email", href: "/dashboard/email", icon: Mail },
  { name: "Files", href: "/dashboard/files", icon: FolderOpen },
  { name: "Team", href: "/dashboard/team", icon: Users },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
  { name: "Help", href: "/dashboard/help", icon: HelpCircle },
];

export function DashboardSidebar() {
  return (
    <div className="w-64 border-r bg-card">
      <div className="space-y-1 p-4">
        {navigation.map((item) => (
          <Link key={item.name} href={item.href}>
            <Button
              variant="ghost"
              className="w-full justify-start"
            >
              <item.icon className="h-4 w-4 mr-2" />
              {item.name}
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
}