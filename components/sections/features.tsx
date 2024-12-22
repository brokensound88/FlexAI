"use client";

import { MessageSquare, Calendar, Zap, Lock } from "lucide-react";
import { FeatureCard } from "@/components/ui/feature-card";

const features = [
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Team Communication",
    description: "Real-time messaging, video calls, and file sharing in one unified interface.",
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Smart Scheduling",
    description: "AI-powered calendar management and meeting scheduling across time zones.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Automation",
    description: "Streamline workflows with intelligent automation and integrations.",
  },
  {
    icon: <Lock className="h-6 w-6" />,
    title: "Enterprise Security",
    description: "Bank-grade encryption and advanced security controls for your data.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Everything you need in one place</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}