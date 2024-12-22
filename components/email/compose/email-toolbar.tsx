"use client";

import { Button } from "@/components/ui/button";
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Link,
  Image,
  AlignLeft,
  AlignCenter,
  AlignRight
} from "lucide-react";

export function EmailToolbar() {
  return (
    <div className="p-2 border-b flex flex-wrap gap-1">
      <Button variant="ghost" size="icon">
        <Bold className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <Italic className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <Underline className="h-4 w-4" />
      </Button>
      <div className="w-px h-6 bg-border mx-1" />
      <Button variant="ghost" size="icon">
        <List className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <ListOrdered className="h-4 w-4" />
      </Button>
      <div className="w-px h-6 bg-border mx-1" />
      <Button variant="ghost" size="icon">
        <AlignLeft className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <AlignCenter className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <AlignRight className="h-4 w-4" />
      </Button>
      <div className="w-px h-6 bg-border mx-1" />
      <Button variant="ghost" size="icon">
        <Link className="h-4 w-4" />
      </Button>
      <Button variant="ghost" size="icon">
        <Image className="h-4 w-4" />
      </Button>
    </div>
  );
}