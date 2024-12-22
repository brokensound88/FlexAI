"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Clock, Sparkles, TrendingUp } from "lucide-react";
import type { Letter } from "@/types/letter";

interface LetterContextProps {
  letter: Letter;
}

export function LetterContext({ letter }: LetterContextProps) {
  return (
    <Card className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Brain className="h-5 w-5 text-primary" />
          <h3 className="font-medium">Context Analysis</h3>
        </div>
        <Badge variant={letter.context.urgency === 'high' ? 'destructive' : 'secondary'}>
          {letter.context.urgency} priority
        </Badge>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm">Intent: {letter.context.intent}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-primary" />
          <span className="text-sm">
            Suggested response time: {letter.context.aiSuggestions.responseTime}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <TrendingUp className="h-4 w-4 text-primary" />
          <span className="text-sm">
            Engagement score: {letter.analytics.engagement}%
          </span>
        </div>

        {letter.context.aiSuggestions.actionItems.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Action Items</h4>
            <ul className="text-sm space-y-1">
              {letter.context.aiSuggestions.actionItems.map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Card>
  );
}