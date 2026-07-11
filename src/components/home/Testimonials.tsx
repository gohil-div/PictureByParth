import { TestimonialsSection } from "@/components/common/TestimonialsSection";

export function Testimonials() {
  return (
    <TestimonialsSection
      eyebrow="Kind Words"
      lead={{
        quote:
          "He disappeared into the day and handed us back our best memories.",
        attribution: "Amelia & Thomas · Tuscany",
      }}
      supporting={[
        {
          quote:
            "Every photo feels like it was taken by someone who actually knew us.",
          attribution: "Isabel & Rafael · Amalfi Coast",
        },
        {
          quote:
            "Worth every penny — and then some. We'll be recommending him for years.",
          attribution: "Claire & Henry · Cotswolds",
        },
      ]}
    />
  );
}
