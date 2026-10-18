import { Link } from "@tanstack/react-router";
import { images } from "@/lib/stories";
import { Reveal } from "@/components/layout/Reveal";

export function IntroAbout() {
  return (
    <section className="border-y border-charcoal/10 bg-ivory-deep px-6 py-24 md:px-12 md:py-32">
      <Reveal className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center md:gap-20">
        <div className="hover-zoom aspect-[4/5] w-full">
          <img
            src={images.Aboutparth}
            alt="The photographer at work during a Tuscan wedding"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p className="editorial-eyebrow">Meet the Studio</p>
          <h2 className="serif-display-roman mt-6 text-4xl md:text-6xl">
            A photographer, <em>not</em> a vendor.
          </h2>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-charcoal-soft">
           I believe in doing everything with passion and love, even when life makes it hard to find them. Sometimes, all we need is time, faith, and a little reminder of our purpose.
          </p>
           <p className="mt-8 max-w-md text-sm leading-relaxed text-charcoal-soft">
           For me, that reminder often comes from behind the camera. Letting the light in, going with the flow, and capturing moments brings back the spark I need for new beginnings. And sometimes, the best subject is myself. Little portraits, big feelings. Haha!
          </p>
          {/* <p className="signature-mark mt-6 text-charcoal">Parth</p> */}
          <Link
            to="/about"
            className="mt-6 inline-block text-[0.7rem] uppercase tracking-[0.32em] text-charcoal link-underline"
          >
            More About Me
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
