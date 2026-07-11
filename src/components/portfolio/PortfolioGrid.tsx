import { Link } from "@tanstack/react-router";
import { chapters, stories } from "@/lib/stories";

export function PortfolioGrid() {
  return (
    <section className="px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="editorial-eyebrow">Browse by Feeling</p>
          <h2 className="serif-display-roman mt-6 text-5xl md:text-7xl">
            Four <em>moods</em> of work.
          </h2>
          <p className="mt-6 text-sm leading-relaxed text-charcoal-soft">
            The archive isn't sorted by venue or year — it's sorted by the kind
            of memory each couple came looking for.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {chapters.map((c, i) => {
            const match = stories.find((s) => s.chapter === c.name);
            const tileContent = (
              <>
                <img
                  src={c.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-charcoal/30 to-charcoal/80 transition-opacity duration-700 group-hover:from-charcoal/10 group-hover:to-charcoal/70" />
                <div className="absolute inset-x-0 bottom-0 p-8">
                  <p className="text-[0.65rem] uppercase tracking-[0.32em] text-gold-soft">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="serif-display-roman mt-4 text-4xl text-ivory">
                    {c.name}
                  </h3>
                  <p className="mt-3 text-sm italic text-ivory/80">
                    {c.tagline}
                  </p>
                </div>
              </>
            );
            const tileStyle = { marginTop: i % 2 === 1 ? "3rem" : "0" };
            const tileClassName =
              "group relative block aspect-[3/4] overflow-hidden";

            return match ? (
              <Link
                key={c.name}
                to="/stories/$slug"
                params={{ slug: match.slug }}
                className={tileClassName}
                style={tileStyle}
              >
                {tileContent}
              </Link>
            ) : (
              <Link
                key={c.name}
                to="/stories"
                className={tileClassName}
                style={tileStyle}
              >
                {tileContent}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
