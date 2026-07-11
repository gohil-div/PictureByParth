import { stories } from "@/lib/stories";
import { StoryCard } from "@/components/stories/StoryCard";
import { Reveal } from "@/components/layout/Reveal";

export function StoriesGrid() {
  return (
    <section className="px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <p className="editorial-eyebrow">The Full Archive</p>
        <h2 className="serif-display-roman mt-6 max-w-2xl text-5xl md:text-7xl">
          Read a story.
        </h2>

        <div className="mt-16 grid gap-x-10 gap-y-20 md:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal key={s.slug} delayMs={(i % 3) * 100}>
              <StoryCard story={s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
