export function Footer() {
  return (
    <footer className="border-t border-charcoal/10 px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 md:flex-row md:items-end">
        <div>
          <p className="serif-display-roman text-4xl md:text-5xl">
            Picture by Parth
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-charcoal-soft">
            A fine art wedding & portrait photography studio, capturing stories
            across Tuscany, the Amalfi Coast, the Cotswolds and beyond.
          </p>
        </div>
        <div className="flex gap-10 text-[0.7rem] uppercase tracking-[0.32em] text-charcoal-soft">
          <a
            href="https://instagram.com/picturebyparth"
            target="_blank"
            rel="noreferrer"
            className="link-underline hover:text-charcoal"
          >
            Instagram
          </a>
          <a
            href="mailto:hello@picturebyparth.com"
            className="link-underline hover:text-charcoal"
          >
            Email
          </a>
        </div>
      </div>
      <p className="mt-20 text-center text-[0.65rem] uppercase tracking-[0.32em] text-charcoal-soft">
        © {new Date().getFullYear()} Picture by Parth · Est. MMXII
      </p>
    </footer>
  );
}
