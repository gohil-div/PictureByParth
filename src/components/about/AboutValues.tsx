const values = [
  {
    title: "Editorial, not documentary",
    description:
      "Every gallery is sequenced and paced deliberately — a beginning, a rhythm, a close. Never a folder of photos.",
  },
  {
    title: "A small number of weddings",
    description:
      "We take on a limited number of dates each year so that every couple gets our full, undivided attention.",
  },
  {
    title: "Slow and considered",
    description:
      "We watch before we shoot. The best frames are rarely the posed ones — they're the ones nobody noticed us take.",
  },
];

export function AboutValues() {
  return (
    <section className="border-y border-charcoal/10 bg-ivory-deep px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="editorial-eyebrow">Our Approach</p>
        <h2 className="serif-display-roman mt-6 max-w-2xl text-5xl md:text-7xl">
          Three things we believe.
        </h2>

        <div className="mt-20 grid gap-16 md:grid-cols-3">
          {values.map((v, i) => (
            <div key={v.title} className={i === 1 ? "md:mt-12" : ""}>
              <p className="text-[0.65rem] uppercase tracking-[0.32em] text-gold">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="serif-display-roman mt-4 text-3xl">{v.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-charcoal-soft">
                {v.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
