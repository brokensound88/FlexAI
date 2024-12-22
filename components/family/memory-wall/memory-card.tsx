"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share2, Calendar } from "lucide-react";
import { format } from "date-fns";
import type { FamilyMemory } from "@/types/family";

interface MemoryCardProps {
  memory: FamilyMemory;
  onReact: (memoryId: string, reaction: string) => void;
  onComment: (memoryId: string, comment: string) => void;
  onShare: (memoryId: string) => void;
}

export function MemoryCard({ memory, onReact, onComment, onShare }: MemoryCardProps) {
  const [isCommenting, setIsCommenting] = useState(false);
  const [comment, setComment] = useState("");

  return (
    <Card className="overflow-hidden">
      {memory.type === "photo" && (
        <div className="aspect-square relative">
          <img
            src={memory.content}
            alt={memory.title}
            className="object-cover w-full h-full"
          />
        </div>
      )}
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold">{memory.title}</h3>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1" />
            {format(memory.date, "MMM d, yyyy")}
          </div>
        </div>

        <div className="flex items-center gap-4 mt-4">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-1"
            onClick={() => onReact(memory.id, "heart")}
          >
            <Heart className="h-4 w-4" />
            {memory.reactions.size}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-1"
            onClick={() => setIsCommenting(!isCommenting)}
          >
            <MessageCircle className="h-4 w-4" />
            {memory.comments.length}
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center gap-1"
            onClick={() => onShare(memory.id)}
          >
            <Share2 className="h-4 w-4" />
            Share
          </Button>
        </div>

        {isCommenting && (
          <div className="mt-4 space-y-2">
            <textarea
              className="w-full p-2 rounded-md border resize-none"
              placeholder="Add a comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={2}
            />
            <Button
              size="sm"
              onClick={() => {
                onComment(memory.id, comment);
                setComment("");
                setIsCommenting(false);
              }}
            >
              Post
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
}