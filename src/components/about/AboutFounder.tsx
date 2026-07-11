import { images } from "@/lib/stories";
import { Reveal } from "@/components/layout/Reveal";

export function AboutFounder() {
  return (
    <section className="px-6 py-24 md:py-32">
      <Reveal className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center md:gap-20">
        <div className="hover-zoom aspect-[4/5] w-full">
          <img
            src={images.hero2}
            alt="Founder at work during a Tuscan wedding"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p className="editorial-eyebrow">The Founder</p>
          <p className="serif-display mt-8 text-3xl leading-snug italic md:text-4xl">
            "I never wanted to run a photo booth. I wanted to build a body of
            work — one wedding, one couple, one story at a time."
          </p>
          <p className="signature-mark mt-10 text-charcoal">Parth</p>
          <p className="mt-3 text-[0.65rem] uppercase tracking-[0.32em] text-charcoal-soft">
            Founder & Lead Photographer
          </p>
        </div>
      </Reveal>
    </section>
  );
}
