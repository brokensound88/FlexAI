export interface EmailAccount {
  id: string;
  type: 'gmail' | 'outlook' | 'imap' | 'other';
  email: string;
  name: string;
  connected: boolean;
}

export interface EmailFolder {
  id: string;
  name: string;
  type: 'inbox' | 'sent' | 'drafts' | 'trash' | 'spam' | 'custom';
  unread: number;
  total: number;
}

export interface EmailAttachment {
  id: string;
  name: string;
  size: number;
  type: string;
  url: string;
}

export interface EmailSender {
  name: string;
  email: string;
  avatar?: string;
}

export interface EmailRecipient extends EmailSender {
  type: 'to' | 'cc' | 'bcc';
}

export interface Email {
  id: string;
  accountId: string;
  folderId: string;
  subject: string;
  from: EmailSender;
  to: EmailRecipient[];
  cc?: EmailRecipient[];
  bcc?: EmailRecipient[];
  date: Date;
  body: {
    text: string;
    html?: string;
  };
  attachments?: EmailAttachment[];
  read: boolean;
  starred: boolean;
  labels: string[];
  flags: {
    forwarded: boolean;
    replied: boolean;
    important: boolean;
  };
  threadId?: string;
}