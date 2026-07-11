import { Reveal } from "@/components/layout/Reveal";

type Testimonial = {
  quote: string;
  attribution?: string;
};

type TestimonialsSectionProps = {
  eyebrow: string;
  lead: Testimonial;
  supporting: Testimonial[];
};

export function TestimonialsSection({
  eyebrow,
  lead,
  supporting,
}: TestimonialsSectionProps) {
  return (
    <section className="border-y border-charcoal/10 bg-ivory-deep px-6 py-24 text-center md:px-12 md:py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <p className="editorial-eyebrow">{eyebrow}</p>
          <p
            aria-hidden="true"
            className="serif-display mt-6 text-charcoal/15 text-[6rem] leading-none md:text-[9rem]"
          >
            "
          </p>
          <blockquote className="serif-display -mt-10 text-3xl leading-tight md:-mt-16 md:text-5xl">
            {lead.quote}
          </blockquote>
          {lead.attribution && (
            <p className="mt-8 text-[0.65rem] uppercase tracking-[0.32em] text-charcoal-soft">
              {lead.attribution}
            </p>
          )}
        </Reveal>

        <div className="mt-20 grid gap-10 text-left md:grid-cols-3">
          {supporting.map((t, i) => (
            <Reveal key={t.attribution ?? i} delayMs={i * 100}>
              <p className="text-base italic leading-relaxed text-charcoal-soft">
                "{t.quote}"
              </p>
              {t.attribution && (
                <p className="mt-3 text-[0.6rem] uppercase tracking-[0.28em] text-charcoal-soft/70">
                  {t.attribution}
                </p>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
