import { TestimonialsSection } from "@/components/common/TestimonialsSection";

export function StoriesTestimonials() {
  return (
    <TestimonialsSection
      eyebrow="In Their Words"
      lead={{
        quote:
          "Years later, we still open the book together — and the room goes quiet.",
        attribution: "Sophia & Lior · Mallorca",
      }}
      supporting={[
        {
          quote: "A quiet elegance we didn't know we needed.",
          attribution: "Margaux & Julien · Provence",
        },
        {
          quote: "They composed our day like a chapter, not a checklist.",
          attribution: "Elena & Marco · Lake Como",
        },
        {
          quote: "The most patient, unobtrusive artists we've ever met.",
          attribution: "Nora & Sam · Sicily",
        },
      ]}
    />
  );
}
