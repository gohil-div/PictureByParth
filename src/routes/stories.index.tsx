import { createFileRoute } from "@tanstack/react-router";
import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { StoriesHero } from "@/components/stories/StoriesHero";
import { StoriesGrid } from "@/components/stories/StoriesGrid";
import { StoriesTestimonials } from "@/components/stories/StoriesTestimonials";
import { StoriesCTA } from "@/components/stories/StoriesCTA";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/stories/")({
  head: () =>
    pageMeta({
      title: "Stories — Picture by Parth",
      description:
        "Browse real wedding stories captured by Picture by Parth, and read each one in full.",
      path: "/stories",
    }),
  component: StoriesPage,
});

function StoriesPage() {
  return (
    <MarketingLayout>
      <StoriesHero />
      <StoriesGrid />
      {/* <StoriesTestimonials /> */}
      <StoriesCTA />
    </MarketingLayout>
  );
}
