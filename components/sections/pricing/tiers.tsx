"use client";

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const tiers = [
  {
    name: "Free",
    price: "0",
    description: "Perfect for getting started",
    features: [
      "Basic task management",
      "Limited integrations",
      "1 GB storage",
      "Up to 3 team members"
    ],
    cta: "Get Started",
    href: "/signup"
  },
  {
    name: "Pro",
    price: "15",
    description: "Best for growing teams",
    features: [
      "Unlimited tasks",
      "Advanced integrations",
      "10 GB storage",
      "AI-powered workflows",
      "Priority support"
    ],
    cta: "Try Pro",
    href: "/signup?plan=pro",
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Custom solutions",
      "Dedicated support",
      "Unlimited storage",
      "Advanced security",
      "Custom integrations"
    ],
    cta: "Contact Sales",
    href: "/contact"
  }
];

export function PricingTiers() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col p-8 rounded-lg ${
                tier.popular
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-card"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-accent px-3 py-1 text-sm rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-2xl font-bold">{tier.name}</h3>
                <div className="mt-2">
                  <span className="text-4xl font-bold">
                    {tier.price === "Custom" ? "Custom" : `$${tier.price}`}
                  </span>
                  {tier.price !== "Custom" && (
                    <span className="text-muted-foreground">/month</span>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {tier.description}
                </p>
              </div>
              <ul className="space-y-3 mb-6 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className="w-full"
                variant={tier.popular ? "secondary" : "default"}
                asChild
              >
                <a href={tier.href}>{tier.cta}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}