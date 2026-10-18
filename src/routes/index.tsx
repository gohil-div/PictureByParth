import { createFileRoute } from "@tanstack/react-router";
import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { Hero } from "@/components/home/Hero";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { IntroAbout } from "@/components/home/IntroAbout";
import { RecentStories } from "@/components/home/RecentStories";
import { SocialStrip } from "@/components/home/SocialStrip";
import { FinalCTA } from "@/components/home/FinalCTA";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    pageMeta({
      title: "Picture by Parth — Fine Art Wedding & Portrait Photography",
      description:
        "Picture by Parth is a fine art wedding & portrait photography studio based in Rajkot, available across India. View the portfolio and enquire about your date.",
      path: "/",
    }),
  component: Landing,
});

function Landing() {
  return (
    <MarketingLayout>
      <Hero />
      <FeaturedWork />
      <IntroAbout />
      {/* <ServicesTeaser /> */}
      <RecentStories />
      {/* <Testimonials /> */}
      <SocialStrip />
      <FinalCTA />
    </MarketingLayout>
  );
}
