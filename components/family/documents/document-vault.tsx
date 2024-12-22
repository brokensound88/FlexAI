"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  File,
  Lock,
  Search,
  Upload,
  FolderOpen,
  Shield,
  Download
} from "lucide-react";

interface Document {
  id: string;
  name: string;
  type: string;
  size: number;
  lastModified: Date;
  encrypted: boolean;
  sharedWith: string[];
}

interface DocumentVaultProps {
  documents: Document[];
  onUpload: () => void;
  onDownload: (id: string) => void;
  onShare: (id: string) => void;
}

export function DocumentVault({
  documents,
  onUpload,
  onDownload,
  onShare
}: DocumentVaultProps) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Lock className="h-5 w-5 text-primary" />
          <h2 className="text-lg font-semibold">Family Document Vault</h2>
        </div>
        <Button onClick={onUpload}>
          <Upload className="h-4 w-4 mr-2" />
          Upload
        </Button>
      </div>

      <div className="flex items-center gap-2 mb-6">
        <Search className="h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search documents..." className="flex-1" />
      </div>

      <div className="space-y-4">
        {documents.map((doc) => (
          <Card key={doc.id} className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <File className="h-8 w-8 text-primary" />
                <div>
                  <h3 className="font-medium">{doc.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>{doc.type}</span>
                    <span>•</span>
                    <span>{formatSize(doc.size)}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {doc.encrypted && (
                  <Shield className="h-4 w-4 text-green-500" />
                )}
                <Button variant="ghost" size="icon" onClick={() => onDownload(doc.id)}>
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Card>
  );
}

function formatSize(bytes: number): string {
  const units = ['B', 'KB', 'MB', 'GB'];
  let size = bytes;
  let unitIndex = 0;
  
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }
  
  return `${size.toFixed(1)} ${units[unitIndex]}`;
}