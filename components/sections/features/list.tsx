"use client";

import { Card } from "@/components/ui/card";
import {
  MessageSquare,
  Calendar,
  Zap,
  Lock,
  Users,
  BarChart,
  Cloud,
  Globe
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Team Communication",
    description: "Real-time messaging, video calls, and file sharing in one unified interface."
  },
  {
    icon: Calendar,
    title: "Smart Scheduling",
    description: "AI-powered calendar management and meeting scheduling across time zones."
  },
  {
    icon: Zap,
    title: "Automation",
    description: "Streamline workflows with intelligent automation and integrations."
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-grade encryption and advanced security controls for your data."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Work together seamlessly with shared workspaces and real-time editing."
  },
  {
    icon: BarChart,
    title: "Analytics & Insights",
    description: "Track team performance and productivity with detailed analytics."
  },
  {
    icon: Cloud,
    title: "Cloud Storage",
    description: "Secure cloud storage with version control and file recovery."
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Access your workspace from anywhere, on any device."
  }
];

export function FeaturesList() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((Feature, index) => (
            <Card key={index} className="p-6">
              <Feature.icon className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{Feature.title}</h3>
              <p className="text-muted-foreground">{Feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}