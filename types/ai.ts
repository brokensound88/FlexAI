export interface AIProfile {
  id: string;
  userId: string;
  learningStyle: 'visual' | 'auditory' | 'kinesthetic';
  communicationPreferences: {
    tone: 'formal' | 'casual' | 'friendly' | 'professional';
    length: 'concise' | 'detailed' | 'balanced';
    format: 'bullet-points' | 'paragraphs' | 'mixed';
  };
  interests: string[];
  expertise: string[];
  contextHistory: ContextItem[];
  lastUpdated: Date;
}

export interface ContextItem {
  id: string;
  type: 'email' | 'chat' | 'document' | 'meeting';
  content: string;
  sentiment: number;
  keywords: string[];
  timestamp: Date;
}

export interface AIAssistant {
  id: string;
  name: string;
  avatar: string;
  specialization: 'writing' | 'organization' | 'analysis' | 'general';
  capabilities: string[];
}