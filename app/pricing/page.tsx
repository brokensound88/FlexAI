import { PricingHero } from "@/components/sections/pricing/hero";
import { PricingTiers } from "@/components/sections/pricing/tiers";
import { PricingFAQ } from "@/components/sections/pricing/faq";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <PricingHero />
      <PricingTiers />
      <PricingFAQ />
    </div>
  );
}