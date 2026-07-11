import { images } from "@/lib/stories";

export function AboutHero() {
  return (
    <section className="relative h-[70svh] w-full overflow-hidden">
      <img
        src={images.hero1}
        alt="Bride walking through a stone chapel"
        className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/70" />
      <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-24 text-center">
        <p className="text-[0.7rem] uppercase tracking-[0.32em] text-ivory/85 animate-reveal-fade">
          About the Studio
        </p>
        <h1 className="serif-display-roman mt-8 text-[clamp(2.75rem,7vw,6rem)] text-ivory animate-reveal-up">
          Editors, <em>not</em> operators.
        </h1>
      </div>
    </section>
  );
}
