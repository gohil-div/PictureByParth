import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/stories/StoryCard.tsx
function StoryCard({ story, aspect = "portrait", className }) {
	return /* @__PURE__ */ jsxs(Link, {
		to: "/stories/$slug",
		params: { slug: story.slug },
		className: `group block ${className ?? ""}`,
		children: [/* @__PURE__ */ jsx("div", {
			className: `hover-zoom-quick w-full bg-ivory-deep ${aspect === "tall" ? "aspect-[3/4]" : "aspect-[4/5]"}`,
			children: /* @__PURE__ */ jsx("img", {
				src: story.cover,
				alt: story.coverAlt,
				className: "h-full w-full object-cover",
				loading: "lazy"
			})
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-6",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "text-[0.65rem] uppercase tracking-[0.32em] text-gold",
					children: story.chapter
				}),
				/* @__PURE__ */ jsx("h3", {
					className: "serif-display-roman mt-3 text-3xl md:text-4xl",
					children: story.couple
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "mt-2 text-[0.65rem] uppercase tracking-[0.28em] text-charcoal-soft",
					children: [
						story.location,
						" · ",
						story.date,
						" ",
						story.year
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 max-w-xs text-sm leading-relaxed text-charcoal-soft line-clamp-2",
					children: story.intro
				}),
				/* @__PURE__ */ jsxs("span", {
					className: "mt-4 inline-flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.32em] text-charcoal opacity-0 transition-opacity duration-500 group-hover:opacity-100",
					children: ["Read the Story", /* @__PURE__ */ jsx("span", { className: "h-px w-6 bg-current transition-all duration-500 group-hover:w-10" })]
				})
			]
		})]
	});
}
//#endregion
export { StoryCard as t };
