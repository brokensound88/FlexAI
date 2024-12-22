"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Sparkles, Lightbulb, Bot } from 'lucide-react';
import { AIProfileManager } from '@/lib/ai/profile-manager';

interface EmailAssistantProps {
  content: string;
  onSuggestionSelect: (suggestion: string) => void;
}

export function EmailAssistant({ content, onSuggestionSelect }: EmailAssistantProps) {
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const analyzeDraft = async () => {
    setIsAnalyzing(true);
    try {
      const profileManager = AIProfileManager.getInstance();
      const analysis = await profileManager.analyzeEmailContext(content);
      setSuggestions(analysis.suggestedResponses);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <Card className="p-4 space-y-4">
      <div className="flex items-center gap-2">
        <Bot className="h-5 w-5 text-primary" />
        <h3 className="font-medium">AI Assistant</h3>
      </div>

      <Button
        variant="outline"
        className="w-full"
        onClick={analyzeDraft}
        disabled={isAnalyzing}
      >
        <Sparkles className="h-4 w-4 mr-2" />
        {isAnalyzing ? 'Analyzing...' : 'Analyze Draft'}
      </Button>

      {suggestions.length > 0 && (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Lightbulb className="h-4 w-4" />
            <span>Suggestions</span>
          </div>
          {suggestions.map((suggestion, index) => (
            <Button
              key={index}
              variant="ghost"
              className="w-full justify-start text-sm"
              onClick={() => onSuggestionSelect(suggestion)}
            >
              {suggestion}
            </Button>
          ))}
        </div>
      )}
    </Card>
  );
}