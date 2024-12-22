"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const categories = [
  "AI & Technology",
  "Remote Work",
  "Productivity",
  "Team Building",
  "Integration",
  "Security"
];

export function BlogSidebar() {
  return (
    <div className="space-y-8">
      <Card className="p-4">
        <div className="flex gap-2">
          <Input placeholder="Search posts..." />
          <Button size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              className="block w-full text-left px-2 py-1 rounded hover:bg-muted text-sm"
            >
              {category}
            </button>
          ))}
        </div>
      </Card>

      <Card className="p-4">
        <h3 className="font-semibold mb-4">Newsletter</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Stay updated with our latest insights and news.
        </p>
        <Input placeholder="Enter your email" className="mb-2" />
        <Button className="w-full">Subscribe</Button>
      </Card>
    </div>
  );
}