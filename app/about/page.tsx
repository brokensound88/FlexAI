import { AboutHero } from "@/components/sections/about/hero";
import { AboutMission } from "@/components/sections/about/mission";
import { AboutTeam } from "@/components/sections/about/team";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <AboutHero />
      <AboutMission />
      <AboutTeam />
    </div>
  );
}