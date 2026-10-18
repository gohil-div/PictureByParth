import { Link } from "@tanstack/react-router";

export function PortfolioCTA() {
  return (
    <section className="border-t border-charcoal/10 px-6 py-24 text-center md:py-32">
      <p className="editorial-eyebrow">Ready to Begin?</p>
      <h2 className="serif-display-roman mt-8 text-4xl md:text-6xl">
        Let's compose your story.
      </h2>
      <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row">
        <Link
          to="/contact"
          className="text-[0.7rem] uppercase tracking-[0.32em] text-charcoal link-underline"
        >
          Enquire Now
        </Link>
      </div>
    </section>
  );
}
