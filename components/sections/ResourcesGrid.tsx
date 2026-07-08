import {
  TrendingUp,
  CheckSquare,
  FileText,
  Route,
  HeartHandshake,
  Gem,
  ArrowUpRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/ui/RevealOnScroll";
import { resources } from "@/lib/data";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  "trending-up": TrendingUp,
  "check-square": CheckSquare,
  "file-text": FileText,
  route: Route,
  "heart-handshake": HeartHandshake,
  gem: Gem,
};

export default function ResourcesGrid() {
  return (
    <Stagger className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {resources.map((resource, index) => {
        const Icon = iconMap[resource.icon] ?? FileText;
        return (
          <StaggerItem key={resource.title}>
            <div className="h-full rounded-3xl bg-white p-8 shadow-sm shadow-indigo/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              <span
                className={cn(
                  "mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br",
                  index % 2 === 0 ? "from-indigo to-violet" : "from-coral to-gold"
                )}
              >
                <Icon className="h-7 w-7 text-cream" />
              </span>
              <h3 className="font-heading text-xl font-bold text-indigo-dark">
                {resource.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-indigo-dark/70">
                {resource.description}
              </p>
              <div className="mt-6">
                {resource.comingSoon ? (
                  <span className="inline-flex cursor-not-allowed items-center rounded-full bg-coral/10 px-4 py-2 font-heading text-sm font-medium text-coral/70">
                    Coming Soon
                  </span>
                ) : (
                  <a
                    href={resource.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 font-heading text-sm font-medium text-coral"
                  >
                    {resource.cta}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                )}
              </div>
            </div>
          </StaggerItem>
        );
      })}
    </Stagger>
  );
}
