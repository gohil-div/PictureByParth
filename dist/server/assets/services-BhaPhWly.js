import { r as images } from "./stories-GmQrXJAS.js";
import { t as MarketingLayout } from "./MarketingLayout-Bhr7HK5R.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/services/ServicesHero.tsx
function ServicesHero() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative h-[70svh] w-full overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: images.dance,
				alt: "First dance in a candlelit ballroom",
				className: "absolute inset-0 h-full w-full object-cover animate-ken-burns"
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/70" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10 flex h-full flex-col items-center justify-end px-6 pb-24 text-center",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[0.7rem] uppercase tracking-[0.32em] text-ivory/85 animate-reveal-fade",
					children: "Services"
				}), /* @__PURE__ */ jsxs("h1", {
					className: "serif-display-roman mt-8 text-[clamp(2.75rem,7vw,6rem)] text-ivory animate-reveal-up",
					children: ["Ways to work ", /* @__PURE__ */ jsx("em", { children: "together." })]
				})]
			})
		]
	});
}
//#endregion
//#region src/components/services/ServicesList.tsx
var services = [
	{
		name: "The Full Story",
		price: "From €6,500",
		description: "A full day of coverage, from the morning's quiet preparations to the last dance, fully edited and delivered as a ready-to-print album.",
		includes: [
			"Full-day coverage",
			"Two studio photographers",
			"Hand-edited story album"
		]
	},
	{
		name: "The Elopement",
		price: "From €3,200",
		description: "For the intimate day — two witnesses, one quiet ceremony, and a story told in fewer, more deliberate frames.",
		includes: [
			"Half-day coverage",
			"One studio photographer",
			"Digital story gallery"
		]
	},
	{
		name: "The Editorial Add-On",
		price: "From €900",
		description: "A second shooter for layered coverage, or an editorial-style engagement sitting ahead of the wedding day.",
		includes: [
			"Second photographer",
			"Engagement sitting",
			"Extended digital gallery"
		]
	}
];
function ServicesList() {
	return /* @__PURE__ */ jsx("section", {
		className: "px-6 py-24 md:px-12 md:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "editorial-eyebrow",
					children: "Our Packages"
				}),
				/* @__PURE__ */ jsxs("h2", {
					className: "serif-display-roman mt-6 max-w-2xl text-5xl md:text-7xl",
					children: [
						"Chosen by conversation, ",
						/* @__PURE__ */ jsx("em", { children: "not" }),
						" a form."
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-20 grid gap-16 md:grid-cols-3",
					children: services.map((s) => /* @__PURE__ */ jsxs("div", {
						className: "border-t border-charcoal/15 pt-8",
						children: [
							/* @__PURE__ */ jsx("h3", {
								className: "serif-display-roman text-3xl",
								children: s.name
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-2 text-[0.65rem] uppercase tracking-[0.32em] text-gold",
								children: s.price
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-6 text-sm leading-relaxed text-charcoal-soft",
								children: s.description
							}),
							/* @__PURE__ */ jsx("ul", {
								className: "mt-6 space-y-2 text-sm text-charcoal-soft",
								children: s.includes.map((item) => /* @__PURE__ */ jsxs("li", { children: ["· ", item] }, item))
							})
						]
					}, s.name))
				})
			]
		})
	});
}
//#endregion
//#region src/components/services/ServicesProcess.tsx
var steps = [
	{
		step: "01",
		title: "Enquire",
		description: "Tell us your date, your venue, and a little about your story."
	},
	{
		step: "02",
		title: "Consultation",
		description: "A quiet conversation — by call or in person — to see if we're a fit."
	},
	{
		step: "03",
		title: "Book the Date",
		description: "We hold your date and begin planning the shape of your coverage."
	},
	{
		step: "04",
		title: "The Day",
		description: "We arrive early, stay late, and stay out of the way in between."
	},
	{
		step: "05",
		title: "Delivery",
		description: "Your story arrives edited, sequenced, and ready to keep."
	}
];
function ServicesProcess() {
	return /* @__PURE__ */ jsx("section", {
		className: "border-t border-charcoal/10 px-6 py-24 md:px-12 md:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "editorial-eyebrow",
					children: "How It Works"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "serif-display-roman mt-6 max-w-2xl text-5xl md:text-7xl",
					children: "From enquiry to album."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-20 grid gap-x-8 gap-y-16 md:grid-cols-5",
					children: steps.map((s) => /* @__PURE__ */ jsxs("div", {
						className: "border-t border-charcoal/15 pt-6",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-[0.65rem] uppercase tracking-[0.32em] text-gold",
								children: s.step
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "serif-display-roman mt-4 text-2xl",
								children: s.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-sm leading-relaxed text-charcoal-soft",
								children: s.description
							})
						]
					}, s.step))
				})
			]
		})
	});
}
//#endregion
//#region src/components/services/ServicesCTA.tsx
function ServicesCTA() {
	return /* @__PURE__ */ jsxs("section", {
		className: "border-t border-charcoal/10 bg-ivory-deep px-6 py-24 text-center md:py-32",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "editorial-eyebrow",
				children: "Every Wedding Is Different"
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "serif-display-roman mt-8 text-4xl md:text-6xl",
				children: "Not sure which fits?"
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mx-auto mt-6 max-w-xl text-sm leading-relaxed text-charcoal-soft",
				children: "Tell us about your day and we'll recommend the right way to work together."
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
//#region src/routes/services.tsx?tsr-split=component
function ServicesPage() {
	return /* @__PURE__ */ jsxs(MarketingLayout, { children: [
		/* @__PURE__ */ jsx(ServicesHero, {}),
		/* @__PURE__ */ jsx(ServicesList, {}),
		/* @__PURE__ */ jsx(ServicesProcess, {}),
		/* @__PURE__ */ jsx(ServicesCTA, {})
	] });
}
//#endregion
export { ServicesPage as component };
