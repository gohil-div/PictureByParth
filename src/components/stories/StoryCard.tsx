import { Link } from "@tanstack/react-router";
import type { Story } from "@/lib/stories";

type StoryCardProps = {
  story: Story;
  aspect?: "portrait" | "tall";
  className?: string;
};

export function StoryCard({
  story,
  aspect = "portrait",
  className,
}: StoryCardProps) {
  return (
    <Link
      to="/stories/$slug"
      params={{ slug: story.slug }}
      className={`group block ${className ?? ""}`}
    >
      <div
        className={`hover-zoom-quick w-full bg-ivory-deep ${
          aspect === "tall" ? "aspect-[3/4]" : "aspect-[4/5]"
        }`}
      >
        <img
          src={story.cover}
          alt={story.coverAlt}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="mt-6">
        <p className="text-[0.65rem] uppercase tracking-[0.32em] text-gold">
          {story.chapter}
        </p>
        <h3 className="serif-display-roman mt-3 text-3xl md:text-4xl">
          {story.couple}
        </h3>
        <p className="mt-2 text-[0.65rem] uppercase tracking-[0.28em] text-charcoal-soft">
          {story.location} · {story.date} {story.year}
        </p>
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-charcoal-soft line-clamp-2">
          {story.intro}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.32em] text-charcoal opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          Read the Story
          <span className="h-px w-6 bg-current transition-all duration-500 group-hover:w-10" />
        </span>
      </div>
    </Link>
  );
}
