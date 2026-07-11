import { images } from "@/lib/stories";
import { Reveal } from "@/components/layout/Reveal";

export function AboutStory() {
  return (
    <>
      <section className="px-6 py-24 md:py-32">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="editorial-eyebrow">Our Beginning</p>
          <p className="serif-display mt-10 text-3xl leading-snug md:text-4xl">
            Picture by Parth was founded on a simple belief: a wedding is a
            story before it is an event, and it deserves to be composed rather
            than merely captured.
          </p>
        </Reveal>
      </section>

      <section className="px-6 pb-24 md:pb-32">
        <Reveal className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center md:gap-20">
          <div>
            <p className="editorial-eyebrow">How We Work</p>
            <h2 className="serif-display-roman mt-6 text-4xl md:text-5xl">
              Slow, deliberate, unobtrusive.
            </h2>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-charcoal-soft">
              A small number of weddings each year, chosen by conversation —
              never a fully booked calendar.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-charcoal-soft">
              On the day, we disappear into the background — no posed lineups,
              just watching for the moment your hands find each other without
              thinking.
            </p>
          </div>
          <div className="hover-zoom aspect-[4/5] w-full md:order-first">
            <img
              src={images.detail1}
              alt="A bride's hands resting on lace"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>
      </section>
    </>
  );
}
