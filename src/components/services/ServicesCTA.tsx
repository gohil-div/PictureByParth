import { Link } from "@tanstack/react-router";

export function ServicesCTA() {
  return (
    <section className="border-t border-charcoal/10 bg-ivory-deep px-6 py-24 text-center md:py-32">
      <p className="editorial-eyebrow">Every Wedding Is Different</p>
      <h2 className="serif-display-roman mt-8 text-4xl md:text-6xl">
        Not sure which fits?
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-charcoal-soft">
        Tell us about your day and we'll recommend the right way to work
        together.
      </p>
      <div className="mt-12">
        <Link
          to="/contact"
          className="group inline-flex items-center gap-5 border border-charcoal/30 px-9 py-5 text-[0.7rem] uppercase tracking-[0.32em] text-charcoal transition-all duration-700 hover:border-charcoal hover:bg-charcoal hover:text-ivory"
        >
          <span>Start the Conversation</span>
          <span className="h-px w-10 bg-current transition-all duration-700 group-hover:w-16" />
        </Link>
      </div>
    </section>
  );
}
