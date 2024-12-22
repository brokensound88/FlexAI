"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/types/blog";
import { formatDate } from "@/lib/utils";

const posts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of AI in Workplace Collaboration",
    excerpt: "Explore how artificial intelligence is transforming team collaboration and productivity.",
    date: "2024-03-20",
    author: "Sarah Chen",
    category: "AI & Technology",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=400&fit=crop"
  },
  {
    id: 2,
    title: "Building a Culture of Remote Collaboration",
    excerpt: "Best practices for maintaining team cohesion and productivity in remote work environments.",
    date: "2024-03-18",
    author: "Michael Park",
    category: "Remote Work",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=400&fit=crop"
  },
  {
    id: 3,
    title: "Maximizing Productivity with Flex",
    excerpt: "Tips and tricks for getting the most out of your Flex workspace.",
    date: "2024-03-15",
    author: "Elena Rodriguez",
    category: "Productivity",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop"
  }
];

export function BlogGrid() {
  return (
    <div className="grid gap-8">
      {posts.map((post) => (
        <Link key={post.id} href={`/blog/${post.id}`}>
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-[2/1] relative">
              <img
                src={post.image}
                alt={post.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="p-6">
              <Badge className="mb-2">{post.category}</Badge>
              <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>{post.author}</span>
                <span>{formatDate(post.date)}</span>
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}