import { Link } from "@tanstack/react-router";
import { stories } from "@/lib/stories";
import { StoryCard } from "@/components/stories/StoryCard";
import { Reveal } from "@/components/layout/Reveal";

const placements = [
  "md:col-span-7 md:col-start-1",
  "md:col-span-5 md:col-start-8 md:mt-24",
  "md:col-span-6 md:col-start-4 md:mt-12",
];

export function RecentStories() {
  const featured = stories.slice(0, 3);

  return (
    <section className="px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="editorial-eyebrow">Recent Weddings</p>
            <h2 className="serif-display-roman mt-6 text-5xl md:text-7xl">
              A few real stories.
            </h2>
          </div>
          <Link
            to="/stories"
            className="text-[0.7rem] uppercase tracking-[0.32em] text-charcoal link-underline"
          >
            Read All Stories
          </Link>
        </Reveal>

        <div className="mt-20 grid gap-x-10 gap-y-20 md:grid-cols-12">
          {featured.map((s, i) => (
            <Reveal key={s.slug} className={placements[i]} delayMs={i * 120}>
              <StoryCard story={s} aspect={i === 1 ? "tall" : "portrait"} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
