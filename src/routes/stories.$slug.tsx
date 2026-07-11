import { useMemo, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MarketingLayout } from "@/components/layout/MarketingLayout";
import { findStory, stories, type StoryBlock } from "@/lib/stories";
import {
  StoryLightbox,
  type GalleryImage,
} from "@/components/stories/StoryLightbox";

function imagesInBlock(block: StoryBlock): number {
  switch (block.kind) {
    case "single":
      return 1;
    case "pair":
      return 2;
    case "trio":
      return block.items.length;
    default:
      return 0;
  }
}

function buildGallery(blocks: StoryBlock[]): GalleryImage[] {
  const gallery: GalleryImage[] = [];
  for (const block of blocks) {
    if (block.kind === "single") {
      gallery.push({ src: block.src, alt: block.alt });
    } else if (block.kind === "pair") {
      gallery.push({ src: block.left.src, alt: block.left.alt });
      gallery.push({ src: block.right.src, alt: block.right.alt });
    } else if (block.kind === "trio") {
      for (const item of block.items)
        gallery.push({ src: item.src, alt: item.alt });
    }
  }
  return gallery;
}

export const Route = createFileRoute("/stories/$slug")({
  loader: ({ params }) => {
    const story = findStory(params.slug);
    if (!story) throw notFound();
    return { story };
  },
  head: ({ loaderData }) => {
    const s = loaderData?.story;
    if (!s) return { meta: [{ title: "Story · Picture by Parth" }] };
    return {
      meta: [
        { title: `${s.couple} — ${s.location} · Picture by Parth` },
        { name: "description", content: s.intro.slice(0, 155) },
        { property: "og:title", content: `${s.couple} — ${s.location}` },
        { property: "og:description", content: s.intro.slice(0, 155) },
        { property: "og:image", content: s.cover },
        { property: "og:type", content: "article" },
      ],
    };
  },
  notFoundComponent: () => (
    <MarketingLayout>
      <div className="flex min-h-screen items-center justify-center px-6 text-center">
        <div>
          <p className="editorial-eyebrow">Not Found</p>
          <h1 className="serif-display-roman mt-6 text-5xl">
            This story is unwritten.
          </h1>
          <Link
            to="/stories"
            className="mt-10 inline-block text-[0.7rem] uppercase tracking-[0.32em] link-underline"
          >
            Return to Stories
          </Link>
        </div>
      </div>
    </MarketingLayout>
  ),
  component: StoryPage,
});

function StoryPage() {
  const { story } = Route.useLoaderData();
  const other = stories.find((s) => s.slug !== story.slug);
  const gallery = useMemo(() => buildGallery(story.blocks), [story.blocks]);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  let running = 0;
  const blocksWithStart = story.blocks.map((block) => {
    const start = running;
    running += imagesInBlock(block);
    return { block, start };
  });

  return (
    <MarketingLayout>
      <article>
        {/* Hero */}
        <header className="relative h-[100svh] w-full overflow-hidden">
          <img
            src={story.cover}
            alt={story.coverAlt}
            className="absolute inset-0 h-full w-full object-cover animate-ken-burns"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-charcoal/70" />
          <div className="relative z-10 flex h-full flex-col items-center justify-end px-6 pb-24 text-center">
            <p className="text-[0.7rem] uppercase tracking-[0.32em] text-ivory/85 animate-reveal-fade">
              {story.chapter}
            </p>
            <h1 className="serif-display-roman mt-8 text-[clamp(3rem,9vw,8rem)] text-ivory animate-reveal-up">
              {story.couple}
            </h1>
            <div className="mt-8 flex items-center gap-4 text-[0.65rem] uppercase tracking-[0.32em] text-ivory/90 animate-reveal-fade">
              <span>{story.location}</span>
              <span className="h-px w-8 bg-ivory/60" />
              <span>
                {story.date} {story.year}
              </span>
            </div>
          </div>
        </header>

        {/* Introduction */}
        <section className="px-6 py-32 md:py-48">
          <div className="mx-auto max-w-2xl text-center">
            <p className="editorial-eyebrow">An Introduction</p>
            <p className="serif-display mt-10 text-3xl leading-snug md:text-4xl">
              {story.intro}
            </p>
            <div className="mt-12 inline-block">
              <span className="editorial-rule" />
            </div>
          </div>
        </section>

        {/* Blocks */}
        <div className="space-y-24 px-6 pb-32 md:space-y-40 md:pb-48">
          {blocksWithStart.map(({ block, start }, i) => (
            <BlockRender
              key={i}
              block={block}
              index={i}
              startIndex={start}
              onImageClick={setLightboxIndex}
            />
          ))}
        </div>

        {/* Closing */}
        <section className="border-t border-charcoal/10 px-6 py-32 text-center">
          <p className="editorial-eyebrow">— Fin —</p>
          <h2 className="serif-display-roman mt-8 text-4xl md:text-6xl">
            End of <em>Chapter.</em>
          </h2>
          {other && (
            <Link
              to="/stories/$slug"
              params={{ slug: other.slug }}
              className="mt-16 inline-flex items-center gap-5 border border-charcoal/30 px-9 py-5 text-[0.7rem] uppercase tracking-[0.32em] text-charcoal transition-all duration-700 hover:border-charcoal hover:bg-charcoal hover:text-ivory"
            >
              <span>Read · {other.couple}</span>
              <span className="h-px w-10 bg-current transition-all duration-700 group-hover:w-16" />
            </Link>
          )}
          <div className="mt-10">
            <Link
              to="/stories"
              className="text-[0.65rem] uppercase tracking-[0.32em] link-underline"
            >
              Return to Stories
            </Link>
          </div>
        </section>
      </article>

      <StoryLightbox
        images={gallery}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
      />
    </MarketingLayout>
  );
}

type BlockRenderProps = {
  block: StoryBlock;
  index: number;
  startIndex: number;
  onImageClick: (index: number) => void;
};

function BlockRender({
  block,
  index,
  startIndex,
  onImageClick,
}: BlockRenderProps) {
  const offset = index % 2 === 0 ? "md:ml-[8%]" : "md:mr-[8%] md:ml-auto";

  switch (block.kind) {
    case "single":
      return (
        <figure className={`mx-auto max-w-6xl ${offset}`}>
          <button
            type="button"
            onClick={() => onImageClick(startIndex)}
            className="hover-zoom block aspect-[4/3] w-full cursor-zoom-in"
            aria-label={`Open ${block.alt} in gallery`}
          >
            <img
              src={block.src}
              alt={block.alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </button>
          {block.caption && (
            <figcaption className="mt-4 text-[0.65rem] uppercase tracking-[0.32em] text-charcoal-soft">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );
    case "pair":
      return (
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-10">
          <figure className="md:mt-16">
            <button
              type="button"
              onClick={() => onImageClick(startIndex)}
              className="hover-zoom block aspect-[4/5] w-full cursor-zoom-in"
              aria-label={`Open ${block.left.alt} in gallery`}
            >
              <img
                src={block.left.src}
                alt={block.left.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </button>
          </figure>
          <figure>
            <button
              type="button"
              onClick={() => onImageClick(startIndex + 1)}
              className="hover-zoom block aspect-[4/5] w-full cursor-zoom-in"
              aria-label={`Open ${block.right.alt} in gallery`}
            >
              <img
                src={block.right.src}
                alt={block.right.alt}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </button>
          </figure>
        </div>
      );
    case "trio":
      return (
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {block.items.map((it, i) => (
            <figure
              key={i}
              className={`${i === 1 ? "md:mt-12" : ""} ${i === 2 ? "col-span-2 md:col-span-1 md:mt-24" : ""}`}
            >
              <button
                type="button"
                onClick={() => onImageClick(startIndex + i)}
                className="hover-zoom block aspect-[3/4] w-full cursor-zoom-in"
                aria-label={`Open ${it.alt} in gallery`}
              >
                <img
                  src={it.src}
                  alt={it.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </button>
            </figure>
          ))}
        </div>
      );
    case "verse":
      return (
        <section className="mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
          <p className="serif-display text-[clamp(2rem,6vw,5rem)] italic leading-[1.05]">
            "{block.text}"
          </p>
          {block.attribution && (
            <p className="mt-8 text-[0.65rem] uppercase tracking-[0.32em] text-gold">
              {block.attribution}
            </p>
          )}
        </section>
      );
    case "paragraph":
      return (
        <section className="mx-auto max-w-2xl px-6 py-12 text-center">
          <p className="serif-display text-2xl leading-relaxed md:text-3xl">
            {block.text}
          </p>
        </section>
      );
  }
}
