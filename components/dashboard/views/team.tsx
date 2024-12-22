"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Plus, Mail, Calendar } from "lucide-react";

const team = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Product Manager",
    email: "sarah@flex.com",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop",
    status: "online"
  },
  {
    id: 2,
    name: "Michael Park",
    role: "Lead Developer",
    email: "michael@flex.com",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop",
    status: "offline"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Designer",
    email: "elena@flex.com",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop",
    status: "online"
  }
];

export function TeamView() {
  return (
    <main className="flex-1 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Team</h1>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Member
        </Button>
      </div>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-4">
        <div className="lg:col-span-3">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <Input
                placeholder="Search team members..."
                className="max-w-sm"
                prefix={<Search className="h-4 w-4 text-muted-foreground" />}
              />
            </div>
            <div className="space-y-4">
              {team.map((member) => (
                <div
                  key={member.id}
                  className="flex items-center justify-between p-4 hover:bg-muted/50 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="h-12 w-12 rounded-full"
                      />
                      <div
                        className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-background ${
                          member.status === "online" ? "bg-green-500" : "bg-gray-400"
                        }`}
                      />
                    </div>
                    <div>
                      <h3 className="font-medium">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Calendar className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        <Card className="p-6">
          <h2 className="font-semibold mb-4">Team Stats</h2>
          <div className="space-y-4">
            <div className="p-3 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">Total Members</p>
              <p className="text-2xl font-bold">12</p>
            </div>
            <div className="p-3 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">Active Now</p>
              <p className="text-2xl font-bold">8</p>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}