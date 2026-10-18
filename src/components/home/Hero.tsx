import { Link } from "@tanstack/react-router";
import { images } from "@/lib/stories";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-charcoal">
      <img
        src={images.hero2}
        alt="Bride and groom walking through a sunlit Tuscan olive grove"
        className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
        loading="eager"
      />
      {/* protect header legibility at the top */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-transparent" />
      {/* protect text legibility at the bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-transparent to-transparent" />

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 md:px-12 md:pb-20">
        <div className="animate-reveal-fade" style={{ animationDelay: "0.3s" }}>
          <p className="editorial-eyebrow !text-gold-soft">Picture by Parth</p>
        </div>

        <h1
          className="serif-display-roman mt-6 max-w-3xl text-[clamp(2.75rem,7vw,6rem)] text-ivory animate-reveal-up"
          style={{ animationDelay: "0.6s" }}
        >
          Stories worth remembering.
        </h1>

        <div
          className="mt-10 flex flex-col items-start gap-6 animate-reveal-fade md:flex-row md:items-center md:gap-10"
          style={{ animationDelay: "1.1s" }}
        >
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-5 border border-ivory/40 px-8 py-4 text-[0.7rem] uppercase tracking-[0.32em] text-ivory transition-all duration-700 hover:border-ivory hover:bg-ivory hover:text-charcoal"
          >
            <span>View the Portfolio</span>
            <span className="h-px w-8 bg-current transition-all duration-700 group-hover:w-14" />
          </Link>
          <p className="text-[0.65rem] uppercase tracking-[0.32em] text-ivory/70">
            Based in Rajkot · Available across India
          </p>
        </div>
      </div>
    </section>
  );
}
