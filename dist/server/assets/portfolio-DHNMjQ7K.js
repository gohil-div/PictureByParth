import { i as stories, r as images, t as chapters } from "./stories-GmQrXJAS.js";
import { t as MarketingLayout } from "./MarketingLayout-Bhr7HK5R.js";
import { t as Reveal } from "./Reveal-CajH9--I.js";
import { t as StoryCard } from "./StoryCard-CEU5pYVj.js";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/components/portfolio/PortfolioHero.tsx
function PortfolioHero() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative h-[70svh] w-full overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: images.ceremony,
				alt: "Cliffside ceremony at golden hour",
				className: "absolute inset-0 h-full w-full object-cover animate-ken-burns"
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/70" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10 flex h-full flex-col items-center justify-end px-6 pb-24 text-center",
				children: [/* @__PURE__ */ jsx("p", {
					className: "text-[0.7rem] uppercase tracking-[0.32em] text-ivory/85 animate-reveal-fade",
					children: "The Portfolio"
				}), /* @__PURE__ */ jsxs("h1", {
					className: "serif-display-roman mt-8 text-[clamp(2.75rem,7vw,6rem)] text-ivory animate-reveal-up",
					children: [
						"A collection of ",
						/* @__PURE__ */ jsx("em", { children: "quiet" }),
						" moments."
					]
				})]
			})
		]
	});
}
//#endregion
//#region src/components/portfolio/PortfolioMosaic.tsx
function PortfolioMosaic() {
	return /* @__PURE__ */ jsx("section", {
		className: "px-6 py-24 md:px-12 md:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-20 max-w-2xl",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "editorial-eyebrow",
						children: "The Studio's Eye"
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "serif-display-roman mt-6 text-5xl md:text-7xl",
						children: ["Fragments, ", /* @__PURE__ */ jsx("em", { children: "arranged." })]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-6 text-sm leading-relaxed text-charcoal-soft",
						children: "A composition, not a grid — the frames we return to, placed beside one another the way we'd hang them on a gallery wall."
					})
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "grid grid-cols-12 gap-4 md:gap-6",
				children: [
					/* @__PURE__ */ jsx("figure", {
						className: "col-span-12 md:col-span-8",
						children: /* @__PURE__ */ jsx("div", {
							className: "hover-zoom-slow aspect-[16/10]",
							children: /* @__PURE__ */ jsx("img", {
								src: images.hero1,
								alt: "Bride in a stone chapel",
								className: "h-full w-full object-cover",
								loading: "lazy"
							})
						})
					}),
					/* @__PURE__ */ jsx("figure", {
						className: "col-span-6 md:col-span-4 md:mt-16",
						children: /* @__PURE__ */ jsx("div", {
							className: "hover-zoom aspect-[3/4]",
							children: /* @__PURE__ */ jsx("img", {
								src: images.bouquet,
								alt: "Bridal bouquet on antique linen",
								className: "h-full w-full object-cover",
								loading: "lazy"
							})
						})
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "col-span-12 md:col-span-4 md:py-16",
						children: [/* @__PURE__ */ jsx("p", {
							className: "serif-display text-3xl italic leading-snug md:text-4xl",
							children: "\"We photograph the pause, not the pose.\""
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-6 text-[0.65rem] uppercase tracking-[0.32em] text-gold",
							children: "Studio Note"
						})]
					}),
					/* @__PURE__ */ jsx("figure", {
						className: "col-span-7 md:col-span-4",
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
					/* @__PURE__ */ jsx("figure", {
						className: "col-span-5 md:col-span-4 md:mt-24",
						children: /* @__PURE__ */ jsx("div", {
							className: "hover-zoom aspect-[3/4]",
							children: /* @__PURE__ */ jsx("img", {
								src: images.detail1,
								alt: "Hands and rings",
								className: "h-full w-full object-cover",
								loading: "lazy"
							})
						})
					}),
					/* @__PURE__ */ jsx("figure", {
						className: "col-span-12 md:col-span-5",
						children: /* @__PURE__ */ jsx("div", {
							className: "hover-zoom aspect-[4/3]",
							children: /* @__PURE__ */ jsx("img", {
								src: images.dance,
								alt: "First dance in a candlelit ballroom",
								className: "h-full w-full object-cover",
								loading: "lazy"
							})
						})
					}),
					/* @__PURE__ */ jsxs("figure", {
						className: "col-span-12 md:col-span-7 md:mt-20",
						children: [/* @__PURE__ */ jsx("div", {
							className: "hover-zoom-slow aspect-[16/9]",
							children: /* @__PURE__ */ jsx("img", {
								src: images.reception,
								alt: "Candlelit reception under olive trees",
								className: "h-full w-full object-cover",
								loading: "lazy"
							})
						}), /* @__PURE__ */ jsx("figcaption", {
							className: "mt-3 text-[0.65rem] uppercase tracking-[0.32em] text-charcoal-soft",
							children: "Plate XI · Long tables, low candles"
						})]
					})
				]
			})]
		})
	});
}
//#endregion
//#region src/components/portfolio/PortfolioDiptych.tsx
function PortfolioDiptych() {
	return /* @__PURE__ */ jsx("section", {
		className: "border-t border-charcoal/10 px-6 py-24 md:px-12 md:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl",
			children: [
				/* @__PURE__ */ jsx(Reveal, {
					className: "text-center",
					children: /* @__PURE__ */ jsx("p", {
						className: "serif-display text-[clamp(2.5rem,9vw,7rem)] italic leading-none",
						children: "Unposed."
					})
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-12 grid grid-cols-2 gap-4 md:gap-10",
					children: [/* @__PURE__ */ jsx(Reveal, {
						className: "col-span-1",
						delayMs: 100,
						children: /* @__PURE__ */ jsx("div", {
							className: "hover-zoom-slow aspect-[3/4]",
							children: /* @__PURE__ */ jsx("img", {
								src: images.bride1,
								alt: "Bride caught in a quiet moment before the ceremony",
								className: "h-full w-full object-cover",
								loading: "lazy"
							})
						})
					}), /* @__PURE__ */ jsx(Reveal, {
						className: "col-span-1 md:mt-16",
						delayMs: 220,
						children: /* @__PURE__ */ jsx("div", {
							className: "hover-zoom-slow aspect-[3/4]",
							children: /* @__PURE__ */ jsx("img", {
								src: images.dance,
								alt: "A first dance, mid-laugh",
								className: "h-full w-full object-cover",
								loading: "lazy"
							})
						})
					})]
				}),
				/* @__PURE__ */ jsx(Reveal, {
					delayMs: 320,
					className: "mt-10 text-center",
					children: /* @__PURE__ */ jsx("p", {
						className: "mx-auto max-w-md text-sm leading-relaxed text-charcoal-soft",
						children: "The moments no one directs — a breath before the vows, a laugh nobody saw coming."
					})
				})
			]
		})
	});
}
//#endregion
//#region src/components/portfolio/PortfolioGrid.tsx
function PortfolioGrid() {
	return /* @__PURE__ */ jsx("section", {
		className: "px-6 py-24 md:px-12 md:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "max-w-2xl",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "editorial-eyebrow",
						children: "Browse by Feeling"
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "serif-display-roman mt-6 text-5xl md:text-7xl",
						children: [
							"Four ",
							/* @__PURE__ */ jsx("em", { children: "moods" }),
							" of work."
						]
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-6 text-sm leading-relaxed text-charcoal-soft",
						children: "The archive isn't sorted by venue or year — it's sorted by the kind of memory each couple came looking for."
					})
				]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4",
				children: chapters.map((c, i) => {
					const match = stories.find((s) => s.chapter === c.name);
					const tileContent = /* @__PURE__ */ jsxs(Fragment, { children: [
						/* @__PURE__ */ jsx("img", {
							src: c.image,
							alt: "",
							className: "absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105",
							loading: "lazy"
						}),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-charcoal/20 via-charcoal/30 to-charcoal/80 transition-opacity duration-700 group-hover:from-charcoal/10 group-hover:to-charcoal/70" }),
						/* @__PURE__ */ jsxs("div", {
							className: "absolute inset-x-0 bottom-0 p-8",
							children: [
								/* @__PURE__ */ jsx("p", {
									className: "text-[0.65rem] uppercase tracking-[0.32em] text-gold-soft",
									children: String(i + 1).padStart(2, "0")
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "serif-display-roman mt-4 text-4xl text-ivory",
									children: c.name
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-3 text-sm italic text-ivory/80",
									children: c.tagline
								})
							]
						})
					] });
					const tileStyle = { marginTop: i % 2 === 1 ? "3rem" : "0" };
					const tileClassName = "group relative block aspect-[3/4] overflow-hidden";
					return match ? /* @__PURE__ */ jsx(Link, {
						to: "/stories/$slug",
						params: { slug: match.slug },
						className: tileClassName,
						style: tileStyle,
						children: tileContent
					}, c.name) : /* @__PURE__ */ jsx(Link, {
						to: "/stories",
						className: tileClassName,
						style: tileStyle,
						children: tileContent
					}, c.name);
				})
			})]
		})
	});
}
//#endregion
//#region src/components/portfolio/PortfolioStories.tsx
var placements = [
	"md:col-span-6 md:col-start-2",
	"md:col-span-6 md:col-start-8 md:mt-32",
	"md:col-span-6 md:col-start-3 md:mt-16"
];
function PortfolioStories() {
	const featured = stories.slice(0, 3);
	return /* @__PURE__ */ jsx("section", {
		className: "border-t border-charcoal/10 bg-ivory-deep px-6 py-24 md:px-12 md:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-7xl",
			children: [/* @__PURE__ */ jsxs(Reveal, {
				className: "flex flex-col items-start justify-between gap-8 md:flex-row md:items-end",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "editorial-eyebrow",
					children: "Behind Every Frame"
				}), /* @__PURE__ */ jsx("h2", {
					className: "serif-display-roman mt-6 text-5xl md:text-7xl",
					children: "A story, told in full."
				})] }), /* @__PURE__ */ jsx(Link, {
					to: "/stories",
					className: "text-[0.7rem] uppercase tracking-[0.32em] text-charcoal link-underline",
					children: "Read the Stories"
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-20 grid gap-x-10 gap-y-20 md:grid-cols-12",
				children: featured.map((s, i) => /* @__PURE__ */ jsx(Reveal, {
					className: placements[i],
					delayMs: i * 120,
					children: /* @__PURE__ */ jsx(StoryCard, { story: s })
				}, s.slug))
			})]
		})
	});
}
//#endregion
//#region src/components/portfolio/PortfolioCTA.tsx
function PortfolioCTA() {
	return /* @__PURE__ */ jsxs("section", {
		className: "border-t border-charcoal/10 px-6 py-24 text-center md:py-32",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "editorial-eyebrow",
				children: "Ready to Begin?"
			}),
			/* @__PURE__ */ jsx("h2", {
				className: "serif-display-roman mt-8 text-4xl md:text-6xl",
				children: "Let's compose your story."
			}),
			/* @__PURE__ */ jsxs("div", {
				className: "mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row",
				children: [/* @__PURE__ */ jsxs(Link, {
					to: "/services",
					className: "group inline-flex items-center gap-5 border border-charcoal/30 px-9 py-5 text-[0.7rem] uppercase tracking-[0.32em] text-charcoal transition-all duration-700 hover:border-charcoal hover:bg-charcoal hover:text-ivory",
					children: [/* @__PURE__ */ jsx("span", { children: "See Our Services" }), /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-current transition-all duration-700 group-hover:w-16" })]
				}), /* @__PURE__ */ jsx(Link, {
					to: "/contact",
					className: "text-[0.7rem] uppercase tracking-[0.32em] text-charcoal link-underline",
					children: "Enquire Now"
				})]
			})
		]
	});
}
//#endregion
//#region src/routes/portfolio.tsx?tsr-split=component
function PortfolioPage() {
	return /* @__PURE__ */ jsxs(MarketingLayout, { children: [
		/* @__PURE__ */ jsx(PortfolioHero, {}),
		/* @__PURE__ */ jsx(PortfolioMosaic, {}),
		/* @__PURE__ */ jsx(PortfolioDiptych, {}),
		/* @__PURE__ */ jsx(PortfolioGrid, {}),
		/* @__PURE__ */ jsx(PortfolioStories, {}),
		/* @__PURE__ */ jsx(PortfolioCTA, {})
	] });
}
//#endregion
export { PortfolioPage as component };
