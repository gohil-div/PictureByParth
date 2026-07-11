import * as React from "react";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Menu, X } from "lucide-react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
//#region src/hooks/use-scrolled.ts
function useScrolled(threshold = 80) {
	const [scrolled, setScrolled] = useState(false);
	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > threshold);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, [threshold]);
	return scrolled;
}
//#endregion
//#region src/lib/utils.ts
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
//#endregion
//#region src/components/ui/sheet.tsx
var Sheet = SheetPrimitive.Root;
var SheetClose = SheetPrimitive.Close;
var SheetPortal = SheetPrimitive.Portal;
var SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SheetPrimitive.Overlay, {
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props,
	ref
}));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
var sheetVariants = cva("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out", {
	variants: { side: {
		top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
		bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
		left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
		right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
	} },
	defaultVariants: { side: "right" }
});
var SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [/* @__PURE__ */ jsx(SheetOverlay, {}), /* @__PURE__ */ jsxs(SheetPrimitive.Content, {
	ref,
	className: cn(sheetVariants({ side }), className),
	...props,
	children: [/* @__PURE__ */ jsxs(SheetPrimitive.Close, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary",
		children: [/* @__PURE__ */ jsx(X, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Close"
		})]
	}), children]
})] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
var SheetHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex flex-col space-y-2 text-center sm:text-left", className),
	...props
});
SheetHeader.displayName = "SheetHeader";
var SheetFooter = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
SheetFooter.displayName = "SheetFooter";
var SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SheetPrimitive.Title, {
	ref,
	className: cn("text-lg font-semibold text-foreground", className),
	...props
}));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
var SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(SheetPrimitive.Description, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
SheetDescription.displayName = SheetPrimitive.Description.displayName;
//#endregion
//#region src/components/layout/Header.tsx
var navLinks = [
	{
		to: "/portfolio",
		label: "Portfolio"
	},
	{
		to: "/about",
		label: "About"
	},
	{
		to: "/services",
		label: "Services"
	},
	{
		to: "/stories",
		label: "Stories"
	}
];
function Header() {
	const scrolled = useScrolled(80);
	const [menuOpen, setMenuOpen] = useState(false);
	return /* @__PURE__ */ jsxs("header", {
		className: `fixed left-0 right-0 top-0 z-50 transition-all duration-500 ease-out ${scrolled ? "border-b border-charcoal/10 bg-ivory/90 py-4 backdrop-blur-md md:py-5" : "border-b border-transparent bg-transparent py-7 md:py-9"}`,
		children: [/* @__PURE__ */ jsxs("div", {
			className: "flex items-center justify-between px-6 md:px-12",
			children: [
				/* @__PURE__ */ jsx(Link, {
					to: "/",
					className: "editorial-eyebrow !text-charcoal transition-colors hover:!text-gold",
					children: "Picture by Parth"
				}),
				/* @__PURE__ */ jsx("nav", {
					className: "hidden gap-10 text-[0.7rem] uppercase tracking-[0.32em] text-charcoal-soft md:flex",
					children: navLinks.map((link) => /* @__PURE__ */ jsx(Link, {
						to: link.to,
						className: "link-underline transition-[letter-spacing,color] duration-500 hover:tracking-[0.36em] hover:text-charcoal",
						activeProps: { className: "text-charcoal" },
						children: link.label
					}, link.to))
				}),
				/* @__PURE__ */ jsx(Link, {
					to: "/contact",
					className: "hidden text-[0.7rem] uppercase tracking-[0.32em] text-charcoal link-underline md:inline-block",
					children: "Enquire"
				}),
				/* @__PURE__ */ jsx("button", {
					type: "button",
					"aria-label": "Open menu",
					onClick: () => setMenuOpen(true),
					className: "text-charcoal md:hidden",
					children: /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
				})
			]
		}), /* @__PURE__ */ jsx(Sheet, {
			open: menuOpen,
			onOpenChange: setMenuOpen,
			children: /* @__PURE__ */ jsxs(SheetContent, {
				side: "right",
				className: "w-full border-none bg-ivory p-0 sm:max-w-none",
				children: [/* @__PURE__ */ jsx(SheetTitle, {
					className: "sr-only",
					children: "Navigation"
				}), /* @__PURE__ */ jsxs("div", {
					className: "flex h-full flex-col items-center justify-center gap-10",
					children: [navLinks.map((link) => /* @__PURE__ */ jsx(SheetClose, {
						asChild: true,
						children: /* @__PURE__ */ jsx(Link, {
							to: link.to,
							className: "serif-display-roman text-4xl text-charcoal",
							children: link.label
						})
					}, link.to)), /* @__PURE__ */ jsx(SheetClose, {
						asChild: true,
						children: /* @__PURE__ */ jsx(Link, {
							to: "/contact",
							className: "mt-6 text-[0.7rem] uppercase tracking-[0.32em] text-charcoal link-underline",
							children: "Enquire"
						})
					})]
				})]
			})
		})]
	});
}
//#endregion
//#region src/components/layout/Footer.tsx
function Footer() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "border-t border-charcoal/10 px-6 py-20 md:px-12 md:py-28",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex max-w-7xl flex-col items-start justify-between gap-12 md:flex-row md:items-end",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
				className: "serif-display-roman text-4xl md:text-5xl",
				children: "Picture by Parth"
			}), /* @__PURE__ */ jsx("p", {
				className: "mt-4 max-w-sm text-sm leading-relaxed text-charcoal-soft",
				children: "A fine art wedding & portrait photography studio, capturing stories across Tuscany, the Amalfi Coast, the Cotswolds and beyond."
			})] }), /* @__PURE__ */ jsxs("div", {
				className: "flex gap-10 text-[0.7rem] uppercase tracking-[0.32em] text-charcoal-soft",
				children: [/* @__PURE__ */ jsx("a", {
					href: "https://instagram.com/picturebyparth",
					target: "_blank",
					rel: "noreferrer",
					className: "link-underline hover:text-charcoal",
					children: "Instagram"
				}), /* @__PURE__ */ jsx("a", {
					href: "mailto:hello@picturebyparth.com",
					className: "link-underline hover:text-charcoal",
					children: "Email"
				})]
			})]
		}), /* @__PURE__ */ jsxs("p", {
			className: "mt-20 text-center text-[0.65rem] uppercase tracking-[0.32em] text-charcoal-soft",
			children: [
				"© ",
				(/* @__PURE__ */ new Date()).getFullYear(),
				" Picture by Parth · Est. MMXII"
			]
		})]
	});
}
//#endregion
//#region src/components/layout/MarketingLayout.tsx
function MarketingLayout({ children }) {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-ivory text-charcoal",
		children: [
			/* @__PURE__ */ jsx(Header, {}),
			/* @__PURE__ */ jsx("main", { children }),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { cn as n, MarketingLayout as t };
