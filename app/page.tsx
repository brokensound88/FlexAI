import { Suspense } from "react";
import { HeroSection } from "@/components/sections/hero";
import { FeaturesSection } from "@/components/sections/features";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { CTASection } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Suspense fallback={<div className="min-h-screen" />}>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <CTASection />
      </Suspense>
    </div>
  );
}