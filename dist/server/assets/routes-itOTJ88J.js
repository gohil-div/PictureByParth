import { i as stories, r as images } from "./stories-GmQrXJAS.js";
import { t as MarketingLayout } from "./MarketingLayout-Bhr7HK5R.js";
import { t as Reveal } from "./Reveal-CajH9--I.js";
import { t as StoryCard } from "./StoryCard-CEU5pYVj.js";
import { t as TestimonialsSection } from "./TestimonialsSection-BU8VEj9Y.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/components/home/Hero.tsx
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative h-screen w-full overflow-hidden bg-charcoal",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: images.hero2,
				alt: "Bride and groom walking through a sunlit Tuscan olive grove",
				className: "absolute inset-0 h-full w-full object-cover animate-ken-burns",
				loading: "eager"
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-transparent" }),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal/75 via-transparent to-transparent" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10 flex h-full flex-col justify-end px-6 pb-16 md:px-12 md:pb-20",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "animate-reveal-fade",
						style: { animationDelay: "0.3s" },
						children: /* @__PURE__ */ jsx("p", {
							className: "editorial-eyebrow !text-gold-soft",
							children: "Picture by Parth · Est. MMXII"
						})
					}),
					/* @__PURE__ */ jsx("h1", {
						className: "serif-display-roman mt-6 max-w-3xl text-[clamp(2.75rem,7vw,6rem)] text-ivory animate-reveal-up",
						style: { animationDelay: "0.6s" },
						children: "Stories worth remembering."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-10 flex flex-col items-start gap-6 animate-reveal-fade md:flex-row md:items-center md:gap-10",
						style: { animationDelay: "1.1s" },
						children: [/* @__PURE__ */ jsxs(Link, {
							to: "/portfolio",
							className: "group inline-flex items-center gap-5 border border-ivory/40 px-8 py-4 text-[0.7rem] uppercase tracking-[0.32em] text-ivory transition-all duration-700 hover:border-ivory hover:bg-ivory hover:text-charcoal",
							children: [/* @__PURE__ */ jsx("span", { children: "View the Portfolio" }), /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-current transition-all duration-700 group-hover:w-14" })]
						}), /* @__PURE__ */ jsx("p", {
							className: "text-[0.65rem] uppercase tracking-[0.32em] text-ivory/70",
							children: "Based in Florence · Available Worldwide"
						})]
					})
				]
			})
		]
	});
}
//#endregion
//#region src/components/home/FeaturedWork.tsx
function FeaturedWork() {
	return /* @__PURE__ */ jsx("section", {
		className: "px-6 py-24 md:px-12 md:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ jsxs(Reveal, {
				className: "flex flex-col items-start justify-between gap-8 md:flex-row md:items-end",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "editorial-eyebrow",
					children: "Selected Work"
				}), /* @__PURE__ */ jsx("h2", {
					className: "serif-display-roman mt-6 text-5xl md:text-7xl",
					children: "A few favorite frames."
				})] }), /* @__PURE__ */ jsx(Link, {
					to: "/portfolio",
					className: "text-[0.7rem] uppercase tracking-[0.32em] text-charcoal link-underline",
					children: "View the Full Portfolio"
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-20 grid grid-cols-12 gap-x-6 gap-y-16 md:gap-x-10",
				children: [
					/* @__PURE__ */ jsx(Reveal, {
						className: "col-span-12 md:col-span-7",
						children: /* @__PURE__ */ jsx("div", {
							className: "hover-zoom-slow aspect-[4/5]",
							children: /* @__PURE__ */ jsx("img", {
								src: images.ceremony,
								alt: "Cliffside ceremony at golden hour",
								className: "h-full w-full object-cover",
								loading: "eager"
							})
						})
					}),
					/* @__PURE__ */ jsxs(Reveal, {
						className: "col-span-12 md:col-span-4 md:col-start-9 md:mt-20",
						delayMs: 150,
						children: [/* @__PURE__ */ jsx("p", {
							className: "editorial-eyebrow",
							children: "How the Day Began"
						}), /* @__PURE__ */ jsx("p", {
							className: "serif-display mt-4 text-2xl italic leading-snug",
							children: "Soft light through linen curtains, and a room gone quiet before the dress went on."
						})]
					}),
					/* @__PURE__ */ jsx(Reveal, {
						className: "col-span-6 md:col-span-3 md:col-start-2 md:mt-8",
						delayMs: 100,
						children: /* @__PURE__ */ jsx("div", {
							className: "hover-zoom aspect-[3/4]",
							children: /* @__PURE__ */ jsx("img", {
								src: images.detail1,
								alt: "A bride's hands and rings",
								className: "h-full w-full object-cover",
								loading: "lazy"
							})
						})
					}),
					/* @__PURE__ */ jsxs(Reveal, {
						className: "col-span-12 md:col-span-4 md:col-start-6",
						delayMs: 200,
						children: [/* @__PURE__ */ jsx("p", {
							className: "editorial-eyebrow",
							children: "The Exchange"
						}), /* @__PURE__ */ jsx("p", {
							className: "serif-display mt-4 text-2xl italic leading-snug",
							children: "Two names, said slowly, beneath an olive canopy."
						})]
					}),
					/* @__PURE__ */ jsx(Reveal, {
						className: "col-span-6 md:col-span-4 md:col-start-10 md:-mt-12",
						delayMs: 250,
						children: /* @__PURE__ */ jsx("div", {
							className: "hover-zoom aspect-[4/5]",
							children: /* @__PURE__ */ jsx("img", {
								src: images.bride1,
								alt: "Bride on a marble staircase",
								className: "h-full w-full object-cover",
								loading: "lazy"
							})
						})
					}),
					/* @__PURE__ */ jsxs(Reveal, {
						className: "col-span-12 md:mt-8",
						children: [/* @__PURE__ */ jsx("div", {
							className: "hover-zoom-slow aspect-[21/9]",
							children: /* @__PURE__ */ jsx("img", {
								src: images.reception,
								alt: "Candlelit reception under olive trees",
								className: "h-full w-full object-cover",
								loading: "lazy"
							})
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-4 text-[0.65rem] uppercase tracking-[0.32em] text-charcoal-soft",
							children: "The Atmosphere · Long tables, low candles"
						})]
					})
				]
			})]
		})
	});
}
//#endregion
//#region src/components/home/IntroAbout.tsx
function IntroAbout() {
	return /* @__PURE__ */ jsx("section", {
		className: "border-y border-charcoal/10 bg-ivory-deep px-6 py-24 md:px-12 md:py-32",
		children: /* @__PURE__ */ jsxs(Reveal, {
			className: "mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center md:gap-20",
			children: [/* @__PURE__ */ jsx("div", {
				className: "hover-zoom aspect-[4/5] w-full",
				children: /* @__PURE__ */ jsx("img", {
					src: images.hero2,
					alt: "The photographer at work during a Tuscan wedding",
					className: "h-full w-full object-cover",
					loading: "lazy"
				})
			}), /* @__PURE__ */ jsxs("div", { children: [
				/* @__PURE__ */ jsx("p", {
					className: "editorial-eyebrow",
					children: "Meet the Studio"
				}),
				/* @__PURE__ */ jsxs("h2", {
					className: "serif-display-roman mt-6 text-4xl md:text-6xl",
					children: [
						"A photographer, ",
						/* @__PURE__ */ jsx("em", { children: "not" }),
						" a vendor."
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-8 max-w-md text-sm leading-relaxed text-charcoal-soft",
					children: "Fifteen years behind the camera taught me one thing: the best wedding photographs happen when nobody's posing. I shoot quietly, move slowly, and spend the day watching for the moments you'd want to remember even without a photograph."
				}),
				/* @__PURE__ */ jsx("p", {
					className: "signature-mark mt-6 text-charcoal",
					children: "Parth"
				}),
				/* @__PURE__ */ jsx(Link, {
					to: "/about",
					className: "mt-6 inline-block text-[0.7rem] uppercase tracking-[0.32em] text-charcoal link-underline",
					children: "More About Me"
				})
			] })]
		})
	});
}
//#endregion
//#region src/components/home/ServicesTeaser.tsx
var services = [
	{
		name: "The Full Story",
		description: "Full-day coverage, delivered as a ready-to-print album."
	},
	{
		name: "The Elopement",
		description: "Intimate, half-day coverage for small ceremonies."
	},
	{
		name: "The Editorial Add-On",
		description: "A second shooter, or a styled engagement sitting."
	}
];
function ServicesTeaser() {
	return /* @__PURE__ */ jsx("section", {
		className: "px-6 py-24 md:px-12 md:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col items-start justify-between gap-8 md:flex-row md:items-end",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "editorial-eyebrow",
					children: "Ways to Work Together"
				}), /* @__PURE__ */ jsx("h2", {
					className: "serif-display-roman mt-6 text-5xl md:text-7xl",
					children: "Packages built around you."
				})] }), /* @__PURE__ */ jsx(Link, {
					to: "/services",
					className: "text-[0.7rem] uppercase tracking-[0.32em] text-charcoal link-underline",
					children: "See All Services"
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-16 grid gap-12 md:grid-cols-3",
				children: services.map((s) => /* @__PURE__ */ jsxs("div", {
					className: "border-t border-charcoal/15 pt-6",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "serif-display-roman text-3xl",
						children: s.name
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-4 text-sm leading-relaxed text-charcoal-soft",
						children: s.description
					})]
				}, s.name))
			})]
		})
	});
}
//#endregion
//#region src/components/home/RecentStories.tsx
var placements = [
	"md:col-span-7 md:col-start-1",
	"md:col-span-5 md:col-start-8 md:mt-24",
	"md:col-span-6 md:col-start-4 md:mt-12"
];
function RecentStories() {
	const featured = stories.slice(0, 3);
	return /* @__PURE__ */ jsx("section", {
		className: "px-6 py-24 md:px-12 md:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ jsxs(Reveal, {
				className: "flex flex-col items-start justify-between gap-8 md:flex-row md:items-end",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "editorial-eyebrow",
					children: "Recent Weddings"
				}), /* @__PURE__ */ jsx("h2", {
					className: "serif-display-roman mt-6 text-5xl md:text-7xl",
					children: "A few real stories."
				})] }), /* @__PURE__ */ jsx(Link, {
					to: "/stories",
					className: "text-[0.7rem] uppercase tracking-[0.32em] text-charcoal link-underline",
					children: "Read All Stories"
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-20 grid gap-x-10 gap-y-20 md:grid-cols-12",
				children: featured.map((s, i) => /* @__PURE__ */ jsx(Reveal, {
					className: placements[i],
					delayMs: i * 120,
					children: /* @__PURE__ */ jsx(StoryCard, {
						story: s,
						aspect: i === 1 ? "tall" : "portrait"
					})
				}, s.slug))
			})]
		})
	});
}
//#endregion
//#region src/components/home/Testimonials.tsx
function Testimonials() {
	return /* @__PURE__ */ jsx(TestimonialsSection, {
		eyebrow: "Kind Words",
		lead: {
			quote: "He disappeared into the day and handed us back our best memories.",
			attribution: "Amelia & Thomas · Tuscany"
		},
		supporting: [{
			quote: "Every photo feels like it was taken by someone who actually knew us.",
			attribution: "Isabel & Rafael · Amalfi Coast"
		}, {
			quote: "Worth every penny — and then some. We'll be recommending him for years.",
			attribution: "Claire & Henry · Cotswolds"
		}]
	});
}
//#endregion
//#region src/components/home/SocialStrip.tsx
var feed = [
	images.hero1,
	images.bouquet,
	images.bride1,
	images.detail1,
	images.dance,
	images.ceremony
];
function SocialStrip() {
	return /* @__PURE__ */ jsxs("section", {
		className: "px-6 py-24 text-center md:px-12 md:py-32",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "editorial-eyebrow",
				children: "Stay Connected"
			}),
			/* @__PURE__ */ jsxs("h2", {
				className: "serif-display-roman mt-6 text-4xl md:text-6xl",
				children: ["Follow along ", /* @__PURE__ */ jsx("em", { children: "@picturebyparth" })]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mx-auto mt-6 max-w-xl text-sm leading-relaxed text-charcoal-soft",
				children: "New work, behind-the-scenes moments, and the occasional sneak peek — posted first on Instagram."
			}),
			/* @__PURE__ */ jsx("div", {
				className: "mt-14 grid grid-cols-3 gap-2 md:grid-cols-6 md:gap-4",
				children: feed.map((src, i) => /* @__PURE__ */ jsx("a", {
					href: "https://instagram.com/picturebyparth",
					target: "_blank",
					rel: "noreferrer",
					className: "hover-zoom-quick block aspect-square",
					children: /* @__PURE__ */ jsx("img", {
						src,
						alt: "",
						className: "h-full w-full object-cover",
						loading: "lazy"
					})
				}, i))
			}),
			/* @__PURE__ */ jsx("a", {
				href: "https://instagram.com/picturebyparth",
				target: "_blank",
				rel: "noreferrer",
				className: "mt-10 inline-block text-[0.7rem] uppercase tracking-[0.32em] text-charcoal link-underline",
				children: "Follow on Instagram"
			})
		]
	});
}
//#endregion
//#region src/components/home/FinalCTA.tsx
function FinalCTA() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative h-[100svh] w-full overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: images.dance,
				alt: "First dance in a candlelit ballroom",
				className: "absolute inset-0 h-full w-full object-cover animate-ken-burns",
				loading: "lazy"
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-charcoal/40" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10 flex h-full flex-col items-center justify-center px-6 text-center",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "editorial-eyebrow !text-gold-soft",
						children: "Let's Talk"
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "serif-display-roman mt-8 text-[clamp(3rem,8vw,7.5rem)] text-ivory",
						children: [
							"Let's tell ",
							/* @__PURE__ */ jsx("em", { children: "your" }),
							" story."
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-8 max-w-xl text-base leading-relaxed text-ivory/85",
						children: "We accept a small number of weddings each year. Begin with a quiet message — we'll write back the same day."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-14 flex flex-col items-center gap-5 sm:flex-row",
						children: [/* @__PURE__ */ jsxs("a", {
							href: "mailto:hello@picturebyparth.com",
							className: "group inline-flex items-center gap-5 border border-ivory/40 bg-ivory/5 px-9 py-5 text-[0.7rem] uppercase tracking-[0.32em] text-ivory backdrop-blur-sm transition-all duration-700 hover:border-ivory hover:bg-ivory hover:text-charcoal",
							children: [/* @__PURE__ */ jsx("span", { children: "Book a Consultation" }), /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-current transition-all duration-700 group-hover:w-16" })]
						}), /* @__PURE__ */ jsx("a", {
							href: "https://wa.me/000000000",
							className: "text-[0.7rem] uppercase tracking-[0.32em] text-ivory link-underline",
							children: "WhatsApp the Studio"
						})]
					})
				]
			})
		]
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Landing() {
	return /* @__PURE__ */ jsxs(MarketingLayout, { children: [
		/* @__PURE__ */ jsx(Hero, {}),
		/* @__PURE__ */ jsx(FeaturedWork, {}),
		/* @__PURE__ */ jsx(IntroAbout, {}),
		/* @__PURE__ */ jsx(ServicesTeaser, {}),
		/* @__PURE__ */ jsx(RecentStories, {}),
		/* @__PURE__ */ jsx(Testimonials, {}),
		/* @__PURE__ */ jsx(SocialStrip, {}),
		/* @__PURE__ */ jsx(FinalCTA, {})
	] });
}
//#endregion
export { Landing as component };
