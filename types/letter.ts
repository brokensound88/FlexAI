export interface LetterThread {
  id: string;
  contextId: string;
  aiSummary: string;
  sentiment: number;
  priority: number;
  timeline: {
    created: Date;
    lastActivity: Date;
    predictedResponse?: Date;
  };
  participants: {
    id: string;
    role: 'author' | 'recipient' | 'collaborator';
    aiProfile: string;
  }[];
  status: 'draft' | 'sent' | 'delivered' | 'read' | 'archived';
  encryption: {
    algorithm: string;
    publicKey: string;
    signature: string;
  };
  metadata: {
    category: string;
    tags: string[];
    language: string;
    readingTime: number;
    aiTags: string[];
  };
}

export interface Letter extends Omit<Email, 'type'> {
  threadId: string;
  context: {
    intent: string;
    tone: string;
    urgency: 'low' | 'medium' | 'high';
    aiSuggestions: {
      responseTime: string;
      actionItems: string[];
      followUps: string[];
    };
  };
  version: {
    number: number;
    history: string[];
    collaborators: string[];
  };
  analytics: {
    openRate: number;
    responseTime: number;
    engagement: number;
  };
}