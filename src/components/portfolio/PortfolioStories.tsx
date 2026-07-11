import { Link } from "@tanstack/react-router";
import { stories } from "@/lib/stories";
import { StoryCard } from "@/components/stories/StoryCard";
import { Reveal } from "@/components/layout/Reveal";

const placements = [
  "md:col-span-6 md:col-start-2",
  "md:col-span-6 md:col-start-8 md:mt-32",
  "md:col-span-6 md:col-start-3 md:mt-16",
];

export function PortfolioStories() {
  const featured = stories.slice(0, 3);

  return (
    <section className="border-t border-charcoal/10 bg-ivory-deep px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="editorial-eyebrow">Behind Every Frame</p>
            <h2 className="serif-display-roman mt-6 text-5xl md:text-7xl">
              A story, told in full.
            </h2>
          </div>
          <Link
            to="/stories"
            className="text-[0.7rem] uppercase tracking-[0.32em] text-charcoal link-underline"
          >
            Read the Stories
          </Link>
        </Reveal>

        <div className="mt-20 grid gap-x-10 gap-y-20 md:grid-cols-12">
          {featured.map((s, i) => (
            <Reveal key={s.slug} className={placements[i]} delayMs={i * 120}>
              <StoryCard story={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
