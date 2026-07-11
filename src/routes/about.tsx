import { createFileRoute } from "@tanstack/react-router";
import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutBreak } from "@/components/about/AboutBreak";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutFounder } from "@/components/about/AboutFounder";
import { AboutCTA } from "@/components/about/AboutCTA";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageMeta({
      title: "About — Picture by Parth",
      description:
        "Picture by Parth is an invitation-first editorial wedding studio composing intimate stories across Italy and beyond.",
      path: "/about",
    }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <MarketingLayout>
      <AboutHero />
      <AboutStory />
      <AboutBreak />
      <AboutValues />
      <AboutFounder />
      <AboutCTA />
    </MarketingLayout>
  );
}
