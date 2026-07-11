import { r as images } from "./stories-GmQrXJAS.js";
import { t as MarketingLayout } from "./MarketingLayout-Bhr7HK5R.js";
import { t as Reveal } from "./Reveal-CajH9--I.js";
import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/about/AboutHero.tsx
function AboutHero() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative h-[70svh] w-full overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: images.hero1,
				alt: "Bride walking through a stone chapel",
				className: "absolute inset-0 h-full w-full object-cover animate-ken-burns"
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/70" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10 flex h-full flex-col items-center justify-end px-6 pb-24 text-center",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[0.7rem] uppercase tracking-[0.32em] text-ivory/85 animate-reveal-fade",
					children: "About the Studio"
				}), /* @__PURE__ */ jsxs("h1", {
					className: "serif-display-roman mt-8 text-[clamp(2.75rem,7vw,6rem)] text-ivory animate-reveal-up",
					children: [
						"Editors, ",
						/* @__PURE__ */ jsx("em", { children: "not" }),
						" operators."
					]
				})]
			})
		]
	});
}
//#endregion
//#region src/components/about/AboutStory.tsx
function AboutStory() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [/* @__PURE__ */ jsx("section", {
		className: "px-6 py-24 md:py-32",
		children: /* @__PURE__ */ jsxs(Reveal, {
			className: "mx-auto max-w-2xl text-center",
			children: [/* @__PURE__ */ jsx("p", {
				className: "editorial-eyebrow",
				children: "Our Beginning"
			}), /* @__PURE__ */ jsx("p", {
				className: "serif-display mt-10 text-3xl leading-snug md:text-4xl",
				children: "Picture by Parth was founded on a simple belief: a wedding is a story before it is an event, and it deserves to be composed rather than merely captured."
			})]
		})
	}), /* @__PURE__ */ jsx("section", {
		className: "px-6 pb-24 md:pb-32",
		children: /* @__PURE__ */ jsxs(Reveal, {
			className: "mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center md:gap-20",
			children: [/* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("p", {
					className: "editorial-eyebrow",
					children: "How We Work"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "serif-display-roman mt-6 text-4xl md:text-5xl",
					children: "Slow, deliberate, unobtrusive."
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-8 max-w-md text-sm leading-relaxed text-charcoal-soft",
					children: "A small number of weddings each year, chosen by conversation — never a fully booked calendar."
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-4 max-w-md text-sm leading-relaxed text-charcoal-soft",
					children: "On the day, we disappear into the background — no posed lineups, just watching for the moment your hands find each other without thinking."
				})
			] }), /* @__PURE__ */ jsx("div", {
				className: "hover-zoom aspect-[4/5] w-full md:order-first",
				children: /* @__PURE__ */ jsx("img", {
					src: images.detail1,
					alt: "A bride's hands resting on lace",
					className: "h-full w-full object-cover",
					loading: "lazy"
				})
			})]
		})
	})] });
}
//#endregion
//#region src/hooks/use-parallax.ts
function useParallax(factor = .12) {
	const ref = useRef(null);
	const [offset, setOffset] = useState(0);
	useEffect(() => {
		let frame = 0;
		const measure = () => {
			const node = ref.current;
			if (!node) return;
			const rect = node.getBoundingClientRect();
			const viewportCenter = window.innerHeight / 2;
			setOffset((rect.top + rect.height / 2 - viewportCenter) * factor);
		};
		const onScroll = () => {
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(measure);
		};
		measure();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", onScroll);
			cancelAnimationFrame(frame);
		};
	}, [factor]);
	return {
		ref,
		offset
	};
}
//#endregion
//#region src/components/about/AboutBreak.tsx
function AboutBreak() {
	const { ref, offset } = useParallax(.1);
	return /* @__PURE__ */ jsxs("section", {
		className: "relative h-[70svh] w-full overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("div", {
				ref,
				className: "absolute -inset-y-1/4 inset-x-0",
				children: /* @__PURE__ */ jsx("img", {
					src: images.ceremony,
					alt: "Guests gathered at golden hour",
					className: "h-full w-full object-cover",
					style: {
						transform: `translateY(${offset}px)`,
						willChange: "transform"
					}
				})
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-charcoal/25" }),
			/* @__PURE__ */ jsx(Reveal, {
				className: "relative z-10 flex h-full items-end justify-center px-6 pb-16 text-center md:pb-20",
				children: /* @__PURE__ */ jsx("p", {
					className: "serif-display max-w-xl text-2xl italic leading-snug text-ivory md:text-3xl",
					children: "Every wedding has one moment nobody else notices. We're there for it."
				})
			})
		]
	});
}
//#endregion
//#region src/components/about/AboutValues.tsx
var values = [
	{
		title: "Editorial, not documentary",
		description: "Every gallery is sequenced and paced deliberately — a beginning, a rhythm, a close. Never a folder of photos."
	},
	{
		title: "A small number of weddings",
		description: "We take on a limited number of dates each year so that every couple gets our full, undivided attention."
	},
	{
		title: "Slow and considered",
		description: "We watch before we shoot. The best frames are rarely the posed ones — they're the ones nobody noticed us take."
	}
];
function AboutValues() {
	return /* @__PURE__ */ jsx("section", {
		className: "border-y border-charcoal/10 bg-ivory-deep px-6 py-24 md:px-12 md:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "editorial-eyebrow",
					children: "Our Approach"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "serif-display-roman mt-6 max-w-2xl text-5xl md:text-7xl",
					children: "Three things we believe."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-20 grid gap-16 md:grid-cols-3",
					children: values.map((v, i) => /* @__PURE__ */ jsxs("div", {
						className: i === 1 ? "md:mt-12" : "",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-[0.65rem] uppercase tracking-[0.32em] text-gold",
								children: String(i + 1).padStart(2, "0")
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "serif-display-roman mt-4 text-3xl",
								children: v.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-4 text-sm leading-relaxed text-charcoal-soft",
								children: v.description
							})
						]
					}, v.title))
				})
			]
		})
	});
}
//#endregion
//#region src/components/about/AboutFounder.tsx
function AboutFounder() {
	return /* @__PURE__ */ jsx("section", {
		className: "px-6 py-24 md:py-32",
		children: /* @__PURE__ */ jsxs(Reveal, {
			className: "mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center md:gap-20",
			children: [/* @__PURE__ */ jsx("div", {
				className: "hover-zoom aspect-[4/5] w-full",
				children: /* @__PURE__ */ jsx("img", {
					src: images.hero2,
					alt: "Founder at work during a Tuscan wedding",
					className: "h-full w-full object-cover",
					loading: "lazy"
				})
			}), /* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("p", {
					className: "editorial-eyebrow",
					children: "The Founder"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "serif-display mt-8 text-3xl leading-snug italic md:text-4xl",
					children: "\"I never wanted to run a photo booth. I wanted to build a body of work — one wedding, one couple, one story at a time.\""
				}),
				/* @__PURE__ */ jsx("p", {
					className: "signature-mark mt-10 text-charcoal",
					children: "Parth"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-3 text-[0.65rem] uppercase tracking-[0.32em] text-charcoal-soft",
					children: "Founder & Lead Photographer"
				})
			] })]
		})
	});
}
//#endregion
//#region src/components/about/AboutCTA.tsx
function AboutCTA() {
	return /* @__PURE__ */ jsxs("section", {
		className: "border-t border-charcoal/10 px-6 py-24 text-center md:py-32",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "editorial-eyebrow",
				children: "Meet the Studio"
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "serif-display-roman mt-8 text-4xl md:text-6xl",
				children: "Curious about our work?"
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row",
				children: [/* @__PURE__ */ jsxs(Link, {
					to: "/portfolio",
					className: "group inline-flex items-center gap-5 border border-charcoal/30 px-9 py-5 text-[0.7rem] uppercase tracking-[0.32em] text-charcoal transition-all duration-700 hover:border-charcoal hover:bg-charcoal hover:text-ivory",
					children: [/* @__PURE__ */ jsx("span", { children: "View the Portfolio" }), /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-current transition-all duration-700 group-hover:w-16" })]
				}), /* @__PURE__ */ jsx(Link, {
					to: "/contact",
					className: "text-[0.7rem] uppercase tracking-[0.32em] text-charcoal link-underline",
					children: "Get in Touch"
				})]
			})
		]
	});
}
//#endregion
//#region src/routes/about.tsx?tsr-split=component
function AboutPage() {
	return /* @__PURE__ */ jsxs(MarketingLayout, { children: [
		/* @__PURE__ */ jsx(AboutHero, {}),
		/* @__PURE__ */ jsx(AboutStory, {}),
		/* @__PURE__ */ jsx(AboutBreak, {}),
		/* @__PURE__ */ jsx(AboutValues, {}),
		/* @__PURE__ */ jsx(AboutFounder, {}),
		/* @__PURE__ */ jsx(AboutCTA, {})
	] });
}
//#endregion
export { AboutPage as component };
