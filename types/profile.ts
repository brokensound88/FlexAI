export interface UserProfile {
  id: string;
  publicKey: string;
  encryptedPrivateKey: string;
  aiProfile: string; // Encrypted AIProfile
  preferences: {
    encryption: {
      algorithm: 'AES-256' | 'ChaCha20';
      keySize: 256 | 512 | 1024;
    };
    privacy: {
      dataRetention: number; // days
      aiLearningEnabled: boolean;
      shareAnalytics: boolean;
    };
  };
  blockchainAddress?: string;
}