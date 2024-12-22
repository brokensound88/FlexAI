"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Send } from "lucide-react";

const messages = [
  {
    id: 1,
    sender: "John Doe",
    content: "Hey, how's the project coming along?",
    time: "10:30 AM",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop"
  },
  {
    id: 2,
    sender: "Sarah Chen",
    content: "I've updated the design files, can you take a look?",
    time: "11:45 AM",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=32&h=32&fit=crop"
  }
];

export function MessagesView() {
  return (
    <main className="flex-1 p-8">
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-4 h-[calc(100vh-8rem)]">
        <Card className="p-4">
          <div className="mb-4">
            <Input
              placeholder="Search messages..."
              className="w-full"
              prefix={<Search className="h-4 w-4 text-muted-foreground" />}
            />
          </div>
          <div className="space-y-2">
            {messages.map((message) => (
              <div
                key={message.id}
                className="p-3 rounded-lg hover:bg-muted/50 cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={message.avatar}
                    alt={message.sender}
                    className="h-8 w-8 rounded-full"
                  />
                  <div>
                    <p className="font-medium">{message.sender}</p>
                    <p className="text-sm text-muted-foreground truncate">
                      {message.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <Card className="lg:col-span-3 p-4 flex flex-col">
          <div className="flex-1 overflow-y-auto mb-4">
            {messages.map((message) => (
              <div key={message.id} className="mb-4">
                <div className="flex items-start space-x-3">
                  <img
                    src={message.avatar}
                    alt={message.sender}
                    className="h-8 w-8 rounded-full"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <p className="font-medium">{message.sender}</p>
                      <span className="text-xs text-muted-foreground">
                        {message.time}
                      </span>
                    </div>
                    <p className="mt-1">{message.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex space-x-2">
            <Input placeholder="Type a message..." className="flex-1" />
            <Button size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}