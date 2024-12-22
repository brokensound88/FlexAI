"use client";

import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SettingsView() {
  return (
    <main className="flex-1 p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Settings</h1>
      </div>
      <Tabs defaultValue="profile">
        <TabsList className="mb-8">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
        </TabsList>
        <TabsContent value="profile">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-6">Profile Settings</h2>
            <div className="space-y-4 max-w-md">
              <div>
                <label className="text-sm font-medium">Name</label>
                <Input defaultValue="John Doe" />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <Input defaultValue="john@flex.com" type="email" />
              </div>
              <div>
                <label className="text-sm font-medium">Role</label>
                <Input defaultValue="Product Manager" />
              </div>
              <Button>Save Changes</Button>
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="notifications">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-6">Notification Preferences</h2>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Push Notifications</p>
                  <p className="text-sm text-muted-foreground">Receive push notifications</p>
                </div>
                <Switch />
              </div>
            </div>
          </Card>
        </TabsContent>
        <TabsContent value="security">
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-6">Security Settings</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-4">Change Password</h3>
                <div className="space-y-4 max-w-md">
                  <Input type="password" placeholder="Current Password" />
                  <Input type="password" placeholder="New Password" />
                  <Input type="password" placeholder="Confirm New Password" />
                  <Button>Update Password</Button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Two-Factor Authentication</p>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security</p>
                </div>
                <Switch />
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}