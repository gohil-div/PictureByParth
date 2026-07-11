import { Link } from "@tanstack/react-router";
import { images } from "@/lib/stories";
import { Reveal } from "@/components/layout/Reveal";

export function FeaturedWork() {
  return (
    <section className="px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="editorial-eyebrow">Selected Work</p>
            <h2 className="serif-display-roman mt-6 text-5xl md:text-7xl">
              A few favorite frames.
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="text-[0.7rem] uppercase tracking-[0.32em] text-charcoal link-underline"
          >
            View the Full Portfolio
          </Link>
        </Reveal>

        <div className="mt-20 grid grid-cols-12 gap-x-6 gap-y-16 md:gap-x-10">
          {/* Cluster 1 — large image, offset caption */}
          <Reveal className="col-span-12 md:col-span-7">
            <div className="hover-zoom-slow aspect-[4/5]">
              <img
                src={images.ceremony}
                alt="Cliffside ceremony at golden hour"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </Reveal>
          <Reveal
            className="col-span-12 md:col-span-4 md:col-start-9 md:mt-20"
            delayMs={150}
          >
            <p className="editorial-eyebrow">How the Day Began</p>
            <p className="serif-display mt-4 text-2xl italic leading-snug">
              Soft light through linen curtains, and a room gone quiet before
              the dress went on.
            </p>
          </Reveal>

          {/* Cluster 2 — small image, text, offset image */}
          <Reveal
            className="col-span-6 md:col-span-3 md:col-start-2 md:mt-8"
            delayMs={100}
          >
            <div className="hover-zoom aspect-[3/4]">
              <img
                src={images.detail1}
                alt="A bride's hands and rings"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal
            className="col-span-12 md:col-span-4 md:col-start-6"
            delayMs={200}
          >
            <p className="editorial-eyebrow">The Exchange</p>
            <p className="serif-display mt-4 text-2xl italic leading-snug">
              Two names, said slowly, beneath an olive canopy.
            </p>
          </Reveal>
          <Reveal
            className="col-span-6 md:col-span-4 md:col-start-10 md:-mt-12"
            delayMs={250}
          >
            <div className="hover-zoom aspect-[4/5]">
              <img
                src={images.bride1}
                alt="Bride on a marble staircase"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>

          {/* Cluster 3 — full-width panorama with caption */}
          <Reveal className="col-span-12 md:mt-8">
            <div className="hover-zoom-slow aspect-[21/9]">
              <img
                src={images.reception}
                alt="Candlelit reception under olive trees"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <p className="mt-4 text-[0.65rem] uppercase tracking-[0.32em] text-charcoal-soft">
              The Atmosphere · Long tables, low candles
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
