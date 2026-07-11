import { createFileRoute } from "@tanstack/react-router";
import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { PortfolioHero } from "@/components/portfolio/PortfolioHero";
import { PortfolioMosaic } from "@/components/portfolio/PortfolioMosaic";
import { PortfolioDiptych } from "@/components/portfolio/PortfolioDiptych";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";
import { PortfolioStories } from "@/components/portfolio/PortfolioStories";
import { PortfolioCTA } from "@/components/portfolio/PortfolioCTA";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/portfolio")({
  head: () =>
    pageMeta({
      title: "Portfolio — Picture by Parth",
      description:
        "A selected portfolio of editorial wedding work from Picture by Parth, sorted by chapter — Love, Beginnings, Legacy, Celebrations.",
      path: "/portfolio",
    }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <MarketingLayout>
      <PortfolioHero />
      <PortfolioMosaic />
      <PortfolioDiptych />
      <PortfolioGrid />
      <PortfolioStories />
      <PortfolioCTA />
    </MarketingLayout>
  );
}
