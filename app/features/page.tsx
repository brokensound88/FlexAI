import { FeaturesHero } from "@/components/sections/features/hero";
import { FeaturesList } from "@/components/sections/features/list";
import { FeaturesCTA } from "@/components/sections/features/cta";

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <FeaturesHero />
      <FeaturesList />
      <FeaturesCTA />
    </div>
  );
}