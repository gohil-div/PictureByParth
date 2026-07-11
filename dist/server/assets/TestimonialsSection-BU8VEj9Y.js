import { t as Reveal } from "./Reveal-CajH9--I.js";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/common/TestimonialsSection.tsx
function TestimonialsSection({ eyebrow, lead, supporting }) {
	return /* @__PURE__ */ jsx("section", {
		className: "border-y border-charcoal/10 bg-ivory-deep px-6 py-24 text-center md:px-12 md:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-4xl",
			children: [/* @__PURE__ */ jsxs(Reveal, { children: [
				/* @__PURE__ */ jsx("p", {
					className: "editorial-eyebrow",
					children: eyebrow
				}),
				/* @__PURE__ */ jsx("p", {
					"aria-hidden": "true",
					className: "serif-display mt-6 text-charcoal/15 text-[6rem] leading-none md:text-[9rem]",
					children: "\""
				}),
				/* @__PURE__ */ jsx("blockquote", {
					className: "serif-display -mt-10 text-3xl leading-tight md:-mt-16 md:text-5xl",
					children: lead.quote
				}),
				lead.attribution && /* @__PURE__ */ jsx("p", {
					className: "mt-8 text-[0.65rem] uppercase tracking-[0.32em] text-charcoal-soft",
					children: lead.attribution
				})
			] }), /* @__PURE__ */ jsx("div", {
				className: "mt-20 grid gap-10 text-left md:grid-cols-3",
				children: supporting.map((t, i) => /* @__PURE__ */ jsxs(Reveal, {
					delayMs: i * 100,
					children: [/* @__PURE__ */ jsxs("p", {
						className: "text-base italic leading-relaxed text-charcoal-soft",
						children: [
							"\"",
							t.quote,
							"\""
						]
					}), t.attribution && /* @__PURE__ */ jsx("p", {
						className: "mt-3 text-[0.6rem] uppercase tracking-[0.28em] text-charcoal-soft/70",
						children: t.attribution
					})]
				}, t.attribution ?? i))
			})]
		})
	});
}
//#endregion
export { TestimonialsSection as t };
