import { images } from "@/lib/stories";

const feed = [
  images.hero1,
  images.bouquet,
  images.bride1,
  images.detail1,
  images.dance,
  images.ceremony,
];

export function SocialStrip() {
  return (
    <section className="px-6 py-24 text-center md:px-12 md:py-32">
      <p className="editorial-eyebrow">Stay Connected</p>
      <h2 className="serif-display-roman mt-6 text-4xl md:text-6xl">
        Follow along <em>@parthphotography1</em>
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-charcoal-soft">
        New work, behind-the-scenes moments, and the occasional sneak peek —
        posted first on Instagram.
      </p>

      <div className="mt-14 grid grid-cols-3 gap-2 md:grid-cols-6 md:gap-4">
        {feed.map((src, i) => (
          <a
            key={i}
            href="https://instagram.com/picturebyparth"
            target="_blank"
            rel="noreferrer"
            className="hover-zoom-quick block aspect-square"
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </a>
        ))}
      </div>

      <a
        href="https://instagram.com/picturebyparth"
        target="_blank"
        rel="noreferrer"
        className="mt-10 inline-block text-[0.7rem] uppercase tracking-[0.32em] text-charcoal link-underline"
      >
        Follow on Instagram
      </a>
    </section>
  );
}
