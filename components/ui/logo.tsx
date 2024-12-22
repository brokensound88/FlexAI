import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <Circle className="absolute text-primary/80" style={{ left: '0%' }} />
      <Circle className="absolute text-primary/80" style={{ left: '33%' }} />
      <Circle className="absolute text-primary/80" style={{ left: '66%' }} />
      <div className="relative z-10 mix-blend-overlay">
        <Circle className="text-primary" />
      </div>
    </div>
  );
}