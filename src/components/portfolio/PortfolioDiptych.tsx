import { images } from "@/lib/stories";
import { Reveal } from "@/components/layout/Reveal";

export function PortfolioDiptych() {
  return (
    <section className="border-t border-charcoal/10 px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal className="text-center">
          <p className="serif-display text-[clamp(2.5rem,9vw,7rem)] italic leading-none">
            Unposed.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 md:gap-10">
          <Reveal className="col-span-1" delayMs={100}>
            <div className="hover-zoom-slow aspect-[3/4]">
              <img
                src={images.bride1}
                alt="Bride caught in a quiet moment before the ceremony"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
          <Reveal className="col-span-1 md:mt-16" delayMs={220}>
            <div className="hover-zoom-slow aspect-[3/4]">
              <img
                src={images.dance}
                alt="A first dance, mid-laugh"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        <Reveal delayMs={320} className="mt-10 text-center">
          <p className="mx-auto max-w-md text-sm leading-relaxed text-charcoal-soft">
            The moments no one directs — a breath before the vows, a laugh
            nobody saw coming.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
