"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Upload, Folder, File, MoreVertical } from "lucide-react";

const files = [
  {
    id: 1,
    name: "Project Proposal",
    type: "document",
    size: "2.4 MB",
    modified: "2 hours ago",
    shared: true
  },
  {
    id: 2,
    name: "Design Assets",
    type: "folder",
    items: "24 items",
    modified: "Yesterday",
    shared: true
  },
  {
    id: 3,
    name: "Meeting Notes",
    type: "document",
    size: "542 KB",
    modified: "Dec 21, 2024",
    shared: false
  }
];

export function FilesView() {
  return (
    <main className="flex-1 p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Files</h1>
        <Button>
          <Upload className="h-4 w-4 mr-2" />
          Upload
        </Button>
      </div>
      <div className="grid gap-8 grid-cols-1 lg:grid-cols-4">
        <div className="lg:col-span-3">
          <Card className="p-6">
            <div className="flex justify-between items-center mb-6">
              <Input
                placeholder="Search files..."
                className="max-w-sm"
                prefix={<Search className="h-4 w-4 text-muted-foreground" />}
              />
            </div>
            <div className="space-y-2">
              {files.map((file) => (
                <div
                  key={file.id}
                  className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg cursor-pointer"
                >
                  <div className="flex items-center space-x-3">
                    {file.type === "folder" ? (
                      <Folder className="h-5 w-5 text-primary" />
                    ) : (
                      <File className="h-5 w-5 text-primary" />
                    )}
                    <div>
                      <p className="font-medium">{file.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {file.type === "folder" ? file.items : file.size}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-muted-foreground">
                      {file.modified}
                    </span>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
        <Card className="p-6">
          <h2 className="font-semibold mb-4">Quick Access</h2>
          <div className="space-y-4">
            <Button variant="outline" className="w-full justify-start">
              <Folder className="h-4 w-4 mr-2" />
              Recent Files
            </Button>
            <Button variant="outline" className="w-full justify-start">
              <Folder className="h-4 w-4 mr-2" />
              Shared with me
            </Button>
          </div>
        </Card>
      </div>
    </main>
  );
}