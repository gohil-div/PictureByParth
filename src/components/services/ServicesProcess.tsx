const steps = [
  {
    step: "01",
    title: "Enquire",
    description:
      "Tell us your date, your venue, and a little about your story.",
  },
  {
    step: "02",
    title: "Consultation",
    description:
      "A quiet conversation — by call or in person — to see if we're a fit.",
  },
  {
    step: "03",
    title: "Book the Date",
    description:
      "We hold your date and begin planning the shape of your coverage.",
  },
  {
    step: "04",
    title: "The Day",
    description:
      "We arrive early, stay late, and stay out of the way in between.",
  },
  {
    step: "05",
    title: "Delivery",
    description: "Your story arrives edited, sequenced, and ready to keep.",
  },
];

export function ServicesProcess() {
  return (
    <section className="border-t border-charcoal/10 px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="editorial-eyebrow">How It Works</p>
        <h2 className="serif-display-roman mt-6 max-w-2xl text-5xl md:text-7xl">
          From enquiry to album.
        </h2>

        <div className="mt-20 grid gap-x-8 gap-y-16 md:grid-cols-5">
          {steps.map((s) => (
            <div key={s.step} className="border-t border-charcoal/15 pt-6">
              <p className="text-[0.65rem] uppercase tracking-[0.32em] text-gold">
                {s.step}
              </p>
              <h3 className="serif-display-roman mt-4 text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
