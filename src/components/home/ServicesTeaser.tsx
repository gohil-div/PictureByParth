import { Link } from "@tanstack/react-router";

const services = [
  {
    name: "The Full Story",
    description: "Full-day coverage, delivered as a ready-to-print album.",
  },
  {
    name: "The Elopement",
    description: "Intimate, half-day coverage for small ceremonies.",
  },
  {
    name: "The Editorial Add-On",
    description: "A second shooter, or a styled engagement sitting.",
  },
];

export function ServicesTeaser() {
  return (
    <section className="px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="editorial-eyebrow">Ways to Work Together</p>
            <h2 className="serif-display-roman mt-6 text-5xl md:text-7xl">
              Packages built around you.
            </h2>
          </div>
          <Link
            to="/services"
            className="text-[0.7rem] uppercase tracking-[0.32em] text-charcoal link-underline"
          >
            See All Services
          </Link>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {services.map((s) => (
            <div key={s.name} className="border-t border-charcoal/15 pt-6">
              <h3 className="serif-display-roman text-3xl">{s.name}</h3>
              <p className="mt-4 text-sm leading-relaxed text-charcoal-soft">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
