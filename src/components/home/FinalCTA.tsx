import { images } from "@/lib/stories";

export function FinalCTA() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden">
      <img
        src={images.dance}
        alt="First dance in a candlelit ballroom"
        className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-charcoal/40" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="editorial-eyebrow !text-gold-soft">Let's Talk</p>
        <h2 className="serif-display-roman mt-8 text-[clamp(3rem,8vw,7.5rem)] text-ivory">
          Let's tell <em>your</em> story.
        </h2>
        <p className="mt-8 max-w-xl text-base leading-relaxed text-ivory/85">
          We accept a small number of weddings each year. Begin with a quiet
          message — we'll write back the same day.
        </p>
        <div className="mt-14 flex flex-col items-center gap-5 sm:flex-row">
          {/* <a
            href="mailto:hello@picturebyparth.com"
            className="group inline-flex items-center gap-5 border border-ivory/40 bg-ivory/5 px-9 py-5 text-[0.7rem] uppercase tracking-[0.32em] text-ivory backdrop-blur-sm transition-all duration-700 hover:border-ivory hover:bg-ivory hover:text-charcoal"
          >
            <span>Book a Consultation</span>
            <span className="h-px w-10 bg-current transition-all duration-700 group-hover:w-16" />
          </a> */}
          <a
            href="https://wa.me/9574559914"
            className="text-[0.7rem] uppercase tracking-[0.32em] text-ivory link-underline"
          >
            Catch me on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
