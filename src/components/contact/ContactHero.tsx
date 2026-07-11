export function ContactHero() {
  return (
    <section className="px-6 pb-16 pt-40 text-center md:pt-48">
      <p className="editorial-eyebrow animate-reveal-fade">Enquire</p>
      <h1
        className="serif-display-roman mt-8 text-[clamp(2.75rem,7vw,6rem)] animate-reveal-up"
        style={{ animationDelay: "0.2s" }}
      >
        Let's talk about <em>your</em> day.
      </h1>
      <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-charcoal-soft">
        We accept a small number of weddings each year, by personal
        conversation. Tell us your date, your venue, and a little about the
        story you'd like told.
      </p>
    </section>
  );
}
