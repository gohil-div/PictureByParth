import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useScrolled } from "@/hooks/use-scrolled";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
  { to: "/portfolio", label: "Portfolio" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/stories", label: "Stories" },
] as const;

export function Header() {
  const scrolled = useScrolled(80);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "border-b border-charcoal/10 bg-ivory/90 py-4 backdrop-blur-md md:py-5"
          : "border-b border-transparent bg-transparent py-7 md:py-9"
      }`}
    >
      <div className="flex items-center justify-between px-6 md:px-12">
        <Link
          to="/"
          className="editorial-eyebrow !text-charcoal transition-colors hover:!text-gold"
        >
          Picture by Parth
        </Link>

        <nav className="hidden gap-10 text-[0.7rem] uppercase tracking-[0.32em] text-charcoal-soft md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="link-underline transition-[letter-spacing,color] duration-500 hover:tracking-[0.36em] hover:text-charcoal"
              activeProps={{ className: "text-charcoal" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden text-[0.7rem] uppercase tracking-[0.32em] text-charcoal link-underline md:inline-block"
        >
          Enquire
        </Link>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setMenuOpen(true)}
          className="text-charcoal md:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <SheetContent
          side="right"
          className="w-full border-none bg-ivory p-0 sm:max-w-none"
        >
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <div className="flex h-full flex-col items-center justify-center gap-10">
            {navLinks.map((link) => (
              <SheetClose key={link.to} asChild>
                <Link
                  to={link.to}
                  className="serif-display-roman text-4xl text-charcoal"
                >
                  {link.label}
                </Link>
              </SheetClose>
            ))}
            <SheetClose asChild>
              <Link
                to="/contact"
                className="mt-6 text-[0.7rem] uppercase tracking-[0.32em] text-charcoal link-underline"
              >
                Enquire
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}
