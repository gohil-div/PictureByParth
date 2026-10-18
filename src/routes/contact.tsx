import { createFileRoute } from "@tanstack/react-router";
import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactDetails } from "@/components/contact/ContactDetails";
import { ContactFAQ } from "@/components/contact/ContactFAQ";
import { ContactCTA } from "@/components/contact/ContactCTA";
import { pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageMeta({
      title: "Contact — Picture by Parth",
      description:
        "Get in touch with Picture by Parth to enquire about your wedding date and begin the conversation.",
      path: "/contact",
    }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <MarketingLayout>
      <ContactHero />
      <ContactDetails />
      {/* <ContactFAQ /> */}
      <ContactCTA />
    </MarketingLayout>
  );
}
