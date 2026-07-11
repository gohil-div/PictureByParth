const services = [
  {
    name: "The Full Story",
    price: "From €6,500",
    description:
      "A full day of coverage, from the morning's quiet preparations to the last dance, fully edited and delivered as a ready-to-print album.",
    includes: [
      "Full-day coverage",
      "Two studio photographers",
      "Hand-edited story album",
    ],
  },
  {
    name: "The Elopement",
    price: "From €3,200",
    description:
      "For the intimate day — two witnesses, one quiet ceremony, and a story told in fewer, more deliberate frames.",
    includes: [
      "Half-day coverage",
      "One studio photographer",
      "Digital story gallery",
    ],
  },
  {
    name: "The Editorial Add-On",
    price: "From €900",
    description:
      "A second shooter for layered coverage, or an editorial-style engagement sitting ahead of the wedding day.",
    includes: [
      "Second photographer",
      "Engagement sitting",
      "Extended digital gallery",
    ],
  },
];

export function ServicesList() {
  return (
    <section className="px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="editorial-eyebrow">Our Packages</p>
        <h2 className="serif-display-roman mt-6 max-w-2xl text-5xl md:text-7xl">
          Chosen by conversation, <em>not</em> a form.
        </h2>

        <div className="mt-20 grid gap-16 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.name} className="border-t border-charcoal/15 pt-8">
              <h3 className="serif-display-roman text-3xl">{s.name}</h3>
              <p className="mt-2 text-[0.65rem] uppercase tracking-[0.32em] text-gold">
                {s.price}
              </p>
              <p className="mt-6 text-sm leading-relaxed text-charcoal-soft">
                {s.description}
              </p>
              <ul className="mt-6 space-y-2 text-sm text-charcoal-soft">
                {s.includes.map((item) => (
                  <li key={item}>· {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
