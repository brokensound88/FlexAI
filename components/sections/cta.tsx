"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to transform your team's productivity?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Join thousands of teams already using Flex to streamline their work.
        </p>
        <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600">
          Get Started Now
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}