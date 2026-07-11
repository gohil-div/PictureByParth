import { images } from "@/lib/stories";

export function PortfolioMosaic() {
  return (
    <section className="px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 max-w-2xl">
          <p className="editorial-eyebrow">The Studio's Eye</p>
          <h2 className="serif-display-roman mt-6 text-5xl md:text-7xl">
            Fragments, <em>arranged.</em>
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-charcoal-soft">
            A composition, not a grid — the frames we return to, placed beside
            one another the way we'd hang them on a gallery wall.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6">
          <figure className="col-span-12 md:col-span-8">
            <div className="hover-zoom-slow aspect-[16/10]">
              <img
                src={images.hero1}
                alt="Bride in a stone chapel"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </figure>
          <figure className="col-span-6 md:col-span-4 md:mt-16">
            <div className="hover-zoom aspect-[3/4]">
              <img
                src={images.bouquet}
                alt="Bridal bouquet on antique linen"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </figure>

          <div className="col-span-12 md:col-span-4 md:py-16">
            <p className="serif-display text-3xl italic leading-snug md:text-4xl">
              "We photograph the pause, not the pose."
            </p>
            <p className="mt-6 text-[0.65rem] uppercase tracking-[0.32em] text-gold">
              Studio Note
            </p>
          </div>
          <figure className="col-span-7 md:col-span-4">
            <div className="hover-zoom aspect-[4/5]">
              <img
                src={images.bride1}
                alt="Bride on a marble staircase"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </figure>
          <figure className="col-span-5 md:col-span-4 md:mt-24">
            <div className="hover-zoom aspect-[3/4]">
              <img
                src={images.detail1}
                alt="Hands and rings"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </figure>

          <figure className="col-span-12 md:col-span-5">
            <div className="hover-zoom aspect-[4/3]">
              <img
                src={images.dance}
                alt="First dance in a candlelit ballroom"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </figure>
          <figure className="col-span-12 md:col-span-7 md:mt-20">
            <div className="hover-zoom-slow aspect-[16/9]">
              <img
                src={images.reception}
                alt="Candlelit reception under olive trees"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <figcaption className="mt-3 text-[0.65rem] uppercase tracking-[0.32em] text-charcoal-soft">
              Plate XI · Long tables, low candles
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
