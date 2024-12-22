"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Book, MessageCircle, PlayCircle, HelpCircle } from "lucide-react";

const helpCategories = [
  {
    icon: Book,
    title: "Documentation",
    description: "Browse detailed guides and documentation"
  },
  {
    icon: MessageCircle,
    title: "Community Forum",
    description: "Connect with other users and share knowledge"
  },
  {
    icon: PlayCircle,
    title: "Video Tutorials",
    description: "Watch step-by-step video guides"
  },
  {
    icon: HelpCircle,
    title: "FAQ",
    description: "Find answers to common questions"
  }
];

export function HelpView() {
  return (
    <main className="flex-1 p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold mb-4">Help Center</h1>
        <div className="max-w-xl">
          <Input
            placeholder="Search for help..."
            prefix={<Search className="h-4 w-4 text-muted-foreground" />}
          />
        </div>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {helpCategories.map((category) => (
          <Card key={category.title} className="p-6">
            <category.icon className="h-8 w-8 text-primary mb-4" />
            <h2 className="font-semibold mb-2">{category.title}</h2>
            <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
            <Button variant="outline" className="w-full">Learn More</Button>
          </Card>
        ))}
      </div>
      <Card className="mt-8 p-6">
        <h2 className="text-lg font-semibold mb-4">Popular Articles</h2>
        <div className="space-y-4">
          <div className="p-4 hover:bg-muted/50 rounded-lg cursor-pointer">
            <h3 className="font-medium">Getting Started with Flex</h3>
            <p className="text-sm text-muted-foreground">Learn the basics of using Flex</p>
          </div>
          <div className="p-4 hover:bg-muted/50 rounded-lg cursor-pointer">
            <h3 className="font-medium">Team Collaboration Guide</h3>
            <p className="text-sm text-muted-foreground">Best practices for team collaboration</p>
          </div>
          <div className="p-4 hover:bg-muted/50 rounded-lg cursor-pointer">
            <h3 className="font-medium">Security Best Practices</h3>
            <p className="text-sm text-muted-foreground">Keep your workspace secure</p>
          </div>
        </div>
      </Card>
    </main>
  );
}