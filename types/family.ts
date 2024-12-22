export interface FamilyMember {
  id: string;
  name: string;
  role: 'parent' | 'child' | 'grandparent' | 'relative';
  avatar?: string;
  preferences: {
    communicationStyle: 'text' | 'voice' | 'video';
    notificationPreferences: string[];
    accessibility: {
      fontSize: number;
      colorMode: 'default' | 'high-contrast';
      textToSpeech: boolean;
    };
  };
}

export interface FamilyEvent {
  id: string;
  type: 'birthday' | 'recital' | 'sports' | 'party' | 'holiday' | 'other';
  title: string;
  date: Date;
  location?: {
    address: string;
    coordinates?: [number, number];
  };
  organizer: string;
  participants: string[];
  rsvpStatus: Map<string, 'yes' | 'no' | 'maybe'>;
  reminders: {
    type: 'notification' | 'email' | 'calendar';
    time: number; // minutes before event
  }[];
  attachments?: {
    type: 'image' | 'video' | 'document';
    url: string;
    thumbnail?: string;
  }[];
}

export interface FamilyMemory {
  id: string;
  type: 'photo' | 'video' | 'story' | 'milestone';
  title: string;
  date: Date;
  content: string;
  tags: string[];
  location?: string;
  participants: string[];
  reactions: Map<string, string>;
  comments: {
    id: string;
    author: string;
    content: string;
    timestamp: Date;
  }[];
}