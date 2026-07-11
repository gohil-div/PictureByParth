import { createFileRoute } from "@tanstack/react-router";
import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesList } from "@/components/services/ServicesList";
import { ServicesProcess } from "@/components/services/ServicesProcess";
import { ServicesCTA } from "@/components/services/ServicesCTA";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/services")({
  head: () =>
    pageMeta({
      title: "Services — Picture by Parth",
      description:
        "Wedding photography packages from Picture by Parth — full-day coverage, intimate elopements, and editorial add-ons.",
      path: "/services",
    }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <MarketingLayout>
      <ServicesHero />
      <ServicesList />
      <ServicesProcess />
      <ServicesCTA />
    </MarketingLayout>
  );
}
