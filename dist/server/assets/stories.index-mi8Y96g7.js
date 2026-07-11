import { i as stories, r as images } from "./stories-GmQrXJAS.js";
import { t as MarketingLayout } from "./MarketingLayout-Bhr7HK5R.js";
import { t as Reveal } from "./Reveal-CajH9--I.js";
import { t as StoryCard } from "./StoryCard-CEU5pYVj.js";
import { t as TestimonialsSection } from "./TestimonialsSection-BU8VEj9Y.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/stories/StoriesHero.tsx
function StoriesHero() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative h-[70svh] w-full overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: images.bride1,
				alt: "Bride on a marble staircase",
				className: "absolute inset-0 h-full w-full object-cover animate-ken-burns"
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/70" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10 flex h-full flex-col items-center justify-end px-6 pb-24 text-center",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[0.7rem] uppercase tracking-[0.32em] text-ivory/85 animate-reveal-fade",
					children: "The Stories"
				}), /* @__PURE__ */ jsxs("h1", {
					className: "serif-display-roman mt-8 text-[clamp(2.75rem,7vw,6rem)] text-ivory animate-reveal-up",
					children: ["Every wedding, ", /* @__PURE__ */ jsx("em", { children: "a chapter." })]
				})]
			})
		]
	});
}
//#endregion
//#region src/components/stories/StoriesGrid.tsx
function StoriesGrid() {
	return /* @__PURE__ */ jsx("section", {
		className: "px-6 py-24 md:px-12 md:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "editorial-eyebrow",
					children: "The Full Archive"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "serif-display-roman mt-6 max-w-2xl text-5xl md:text-7xl",
					children: "Read a story."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-16 grid gap-x-10 gap-y-20 md:grid-cols-3",
					children: stories.map((s, i) => /* @__PURE__ */ jsx(Reveal, {
						delayMs: i % 3 * 100,
						children: /* @__PURE__ */ jsx(StoryCard, { story: s })
					}, s.slug))
				})
			]
		})
	});
}
//#endregion
//#region src/components/stories/StoriesTestimonials.tsx
function StoriesTestimonials() {
	return /* @__PURE__ */ jsx(TestimonialsSection, {
		eyebrow: "In Their Words",
		lead: {
			quote: "Years later, we still open the book together — and the room goes quiet.",
			attribution: "Sophia & Lior · Mallorca"
		},
		supporting: [
			{
				quote: "A quiet elegance we didn't know we needed.",
				attribution: "Margaux & Julien · Provence"
			},
			{
				quote: "They composed our day like a chapter, not a checklist.",
				attribution: "Elena & Marco · Lake Como"
			},
			{
				quote: "The most patient, unobtrusive artists we've ever met.",
				attribution: "Nora & Sam · Sicily"
			}
		]
	});
}
//#endregion
//#region src/components/stories/StoriesCTA.tsx
function StoriesCTA() {
	return /* @__PURE__ */ jsxs("section", {
		className: "border-t border-charcoal/10 px-6 py-24 text-center md:py-32",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "editorial-eyebrow",
				children: "Your Turn"
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "serif-display-roman mt-8 text-4xl md:text-6xl",
				children: "Every wedding deserves its own story."
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-12",
				children: /* @__PURE__ */ jsxs(Link, {
					to: "/contact",
					className: "group inline-flex items-center gap-5 border border-charcoal/30 px-9 py-5 text-[0.7rem] uppercase tracking-[0.32em] text-charcoal transition-all duration-700 hover:border-charcoal hover:bg-charcoal hover:text-ivory",
					children: [/* @__PURE__ */ jsx("span", { children: "Start the Conversation" }), /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-current transition-all duration-700 group-hover:w-16" })]
				})
			})
		]
	});
}
//#endregion
//#region src/routes/stories.index.tsx?tsr-split=component
function StoriesPage() {
	return /* @__PURE__ */ jsxs(MarketingLayout, { children: [
		/* @__PURE__ */ jsx(StoriesHero, {}),
		/* @__PURE__ */ jsx(StoriesGrid, {}),
		/* @__PURE__ */ jsx(StoriesTestimonials, {}),
		/* @__PURE__ */ jsx(StoriesCTA, {})
	] });
}
//#endregion
export { StoriesPage as component };
