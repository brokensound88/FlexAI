"use client";

import { BlogHero } from "@/components/sections/blog/hero";
import { BlogGrid } from "@/components/sections/blog/grid";
import { BlogSidebar } from "@/components/sections/blog/sidebar";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <BlogHero />
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <BlogGrid />
        </div>
        <div className="lg:col-span-1">
          <BlogSidebar />
        </div>
      </div>
    </div>
  );
}