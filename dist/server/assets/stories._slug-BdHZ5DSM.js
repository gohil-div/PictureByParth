import { i as stories } from "./stories-GmQrXJAS.js";
import { t as Route } from "./stories._slug-BAVdE-w8.js";
import { n as cn, t as MarketingLayout } from "./MarketingLayout-Bhr7HK5R.js";
import { t as Button } from "./button-Dok6bTB8.js";
import * as React from "react";
import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import useEmblaCarousel from "embla-carousel-react";
//#region src/components/ui/dialog.tsx
var Dialog = DialogPrimitive.Root;
var DialogPortal = DialogPrimitive.Portal;
var DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Overlay, {
	ref,
	className: cn("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
var DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [/* @__PURE__ */ jsx(DialogOverlay, {}), /* @__PURE__ */ jsxs(DialogPrimitive.Content, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ jsxs(DialogPrimitive.Close, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ jsx(X, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogPrimitive.Content.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsx("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Title, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogPrimitive.Title.displayName;
var DialogDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(DialogPrimitive.Description, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogPrimitive.Description.displayName;
//#endregion
//#region src/components/ui/carousel.tsx
var CarouselContext = React.createContext(null);
function useCarousel() {
	const context = React.useContext(CarouselContext);
	if (!context) throw new Error("useCarousel must be used within a <Carousel />");
	return context;
}
var Carousel = React.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
	const [carouselRef, api] = useEmblaCarousel({
		...opts,
		axis: orientation === "horizontal" ? "x" : "y"
	}, plugins);
	const [canScrollPrev, setCanScrollPrev] = React.useState(false);
	const [canScrollNext, setCanScrollNext] = React.useState(false);
	const onSelect = React.useCallback((api) => {
		if (!api) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);
	const scrollPrev = React.useCallback(() => {
		api?.scrollPrev();
	}, [api]);
	const scrollNext = React.useCallback(() => {
		api?.scrollNext();
	}, [api]);
	const handleKeyDown = React.useCallback((event) => {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			scrollPrev();
		} else if (event.key === "ArrowRight") {
			event.preventDefault();
			scrollNext();
		}
	}, [scrollPrev, scrollNext]);
	React.useEffect(() => {
		if (!api || !setApi) return;
		setApi(api);
	}, [api, setApi]);
	React.useEffect(() => {
		if (!api) return;
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);
		return () => {
			api?.off("select", onSelect);
		};
	}, [api, onSelect]);
	return /* @__PURE__ */ jsx(CarouselContext.Provider, {
		value: {
			carouselRef,
			api,
			opts,
			orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev,
			scrollNext,
			canScrollPrev,
			canScrollNext
		},
		children: /* @__PURE__ */ jsx("div", {
			ref,
			onKeyDownCapture: handleKeyDown,
			className: cn("relative", className),
			role: "region",
			"aria-roledescription": "carousel",
			...props,
			children
		})
	});
});
Carousel.displayName = "Carousel";
var CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
	const { carouselRef, orientation } = useCarousel();
	return /* @__PURE__ */ jsx("div", {
		ref: carouselRef,
		className: "overflow-hidden",
		children: /* @__PURE__ */ jsx("div", {
			ref,
			className: cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
			...props
		})
	});
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
	const { orientation } = useCarousel();
	return /* @__PURE__ */ jsx("div", {
		ref,
		role: "group",
		"aria-roledescription": "slide",
		className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
		...props
	});
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();
	return /* @__PURE__ */ jsxs(Button, {
		ref,
		variant,
		size,
		className: cn("absolute  h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollPrev,
		onClick: scrollPrev,
		...props,
		children: [/* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Previous slide"
		})]
	});
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = React.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollNext, canScrollNext } = useCarousel();
	return /* @__PURE__ */ jsxs(Button, {
		ref,
		variant,
		size,
		className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollNext,
		onClick: scrollNext,
		...props,
		children: [/* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" }), /* @__PURE__ */ jsx("span", {
			className: "sr-only",
			children: "Next slide"
		})]
	});
});
CarouselNext.displayName = "CarouselNext";
//#endregion
//#region src/components/stories/StoryLightbox.tsx
function StoryLightbox({ images, index, onClose }) {
	const [api, setApi] = React.useState();
	const [current, setCurrent] = React.useState(index ?? 0);
	React.useEffect(() => {
		if (!api) return;
		setCurrent(api.selectedScrollSnap());
		api.on("select", () => setCurrent(api.selectedScrollSnap()));
	}, [api]);
	if (index === null) return null;
	return /* @__PURE__ */ jsx(Dialog, {
		open: true,
		onOpenChange: (open) => !open && onClose(),
		children: /* @__PURE__ */ jsxs(DialogContent, {
			className: "max-w-6xl border-none bg-transparent p-0 shadow-none sm:rounded-none [&>button]:text-ivory [&>button]:opacity-80 [&>button]:hover:opacity-100",
			children: [
				/* @__PURE__ */ jsx(DialogTitle, {
					className: "sr-only",
					children: "Photo gallery"
				}),
				/* @__PURE__ */ jsxs(Carousel, {
					setApi,
					opts: {
						startIndex: index,
						loop: true
					},
					className: "w-full",
					children: [
						/* @__PURE__ */ jsx(CarouselContent, {
							className: "ml-0",
							children: images.map((img, i) => /* @__PURE__ */ jsx(CarouselItem, {
								className: "flex items-center justify-center pl-0",
								children: /* @__PURE__ */ jsx("div", {
									className: "flex h-[80svh] w-full items-center justify-center",
									children: /* @__PURE__ */ jsx("img", {
										src: img.src,
										alt: img.alt,
										className: "max-h-full max-w-full object-contain"
									})
								})
							}, i))
						}),
						/* @__PURE__ */ jsx(CarouselPrevious, { className: "left-4 border-ivory/40 bg-charcoal/60 text-ivory hover:bg-charcoal/80 hover:text-ivory" }),
						/* @__PURE__ */ jsx(CarouselNext, { className: "right-4 border-ivory/40 bg-charcoal/60 text-ivory hover:bg-charcoal/80 hover:text-ivory" })
					]
				}),
				/* @__PURE__ */ jsxs("p", {
					className: "mt-4 text-center text-[0.65rem] uppercase tracking-[0.32em] text-ivory/70",
					children: [
						current + 1,
						" / ",
						images.length
					]
				})
			]
		}, index)
	});
}
//#endregion
//#region src/routes/stories.$slug.tsx?tsr-split=component
function imagesInBlock(block) {
	switch (block.kind) {
		case "single": return 1;
		case "pair": return 2;
		case "trio": return block.items.length;
		default: return 0;
	}
}
function buildGallery(blocks) {
	const gallery = [];
	for (const block of blocks) if (block.kind === "single") gallery.push({
		src: block.src,
		alt: block.alt
	});
	else if (block.kind === "pair") {
		gallery.push({
			src: block.left.src,
			alt: block.left.alt
		});
		gallery.push({
			src: block.right.src,
			alt: block.right.alt
		});
	} else if (block.kind === "trio") for (const item of block.items) gallery.push({
		src: item.src,
		alt: item.alt
	});
	return gallery;
}
function StoryPage() {
	const { story } = Route.useLoaderData();
	const other = stories.find((s) => s.slug !== story.slug);
	const gallery = useMemo(() => buildGallery(story.blocks), [story.blocks]);
	const [lightboxIndex, setLightboxIndex] = useState(null);
	let running = 0;
	const blocksWithStart = story.blocks.map((block) => {
		const start = running;
		running += imagesInBlock(block);
		return {
			block,
			start
		};
	});
	return /* @__PURE__ */ jsxs(MarketingLayout, { children: [/* @__PURE__ */ jsxs("article", { children: [
		/* @__PURE__ */ jsxs("header", {
			className: "relative h-[100svh] w-full overflow-hidden",
			children: [
				/* @__PURE__ */ jsx("img", {
					src: story.cover,
					alt: story.coverAlt,
					className: "absolute inset-0 h-full w-full object-cover animate-ken-burns"
				}),
				/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-charcoal/30 via-transparent to-charcoal/70" }),
				/* @__PURE__ */ jsxs("div", {
					className: "relative z-10 flex h-full flex-col items-center justify-end px-6 pb-24 text-center",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "text-[0.7rem] uppercase tracking-[0.32em] text-ivory/85 animate-reveal-fade",
							children: story.chapter
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "serif-display-roman mt-8 text-[clamp(3rem,9vw,8rem)] text-ivory animate-reveal-up",
							children: story.couple
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex items-center gap-4 text-[0.65rem] uppercase tracking-[0.32em] text-ivory/90 animate-reveal-fade",
							children: [
								/* @__PURE__ */ jsx("span", { children: story.location }),
								/* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-ivory/60" }),
								/* @__PURE__ */ jsxs("span", { children: [
									story.date,
									" ",
									story.year
								] })
							]
						})
					]
				})
			]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "px-6 py-32 md:py-48",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-2xl text-center",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "editorial-eyebrow",
						children: "An Introduction"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "serif-display mt-10 text-3xl leading-snug md:text-4xl",
						children: story.intro
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-12 inline-block",
						children: /* @__PURE__ */ jsx("span", { className: "editorial-rule" })
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("div", {
			className: "space-y-24 px-6 pb-32 md:space-y-40 md:pb-48",
			children: blocksWithStart.map(({ block, start }, i) => /* @__PURE__ */ jsx(BlockRender, {
				block,
				index: i,
				startIndex: start,
				onImageClick: setLightboxIndex
			}, i))
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "border-t border-charcoal/10 px-6 py-32 text-center",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "editorial-eyebrow",
					children: "— Fin —"
				}),
				/* @__PURE__ */ jsxs("h2", {
					className: "serif-display-roman mt-8 text-4xl md:text-6xl",
					children: ["End of ", /* @__PURE__ */ jsx("em", { children: "Chapter." })]
				}),
				other && /* @__PURE__ */ jsxs(Link, {
					to: "/stories/$slug",
					params: { slug: other.slug },
					className: "mt-16 inline-flex items-center gap-5 border border-charcoal/30 px-9 py-5 text-[0.7rem] uppercase tracking-[0.32em] text-charcoal transition-all duration-700 hover:border-charcoal hover:bg-charcoal hover:text-ivory",
					children: [/* @__PURE__ */ jsxs("span", { children: ["Read · ", other.couple] }), /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-current transition-all duration-700 group-hover:w-16" })]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-10",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/stories",
						className: "text-[0.65rem] uppercase tracking-[0.32em] link-underline",
						children: "Return to Stories"
					})
				})
			]
		})
	] }), /* @__PURE__ */ jsx(StoryLightbox, {
		images: gallery,
		index: lightboxIndex,
		onClose: () => setLightboxIndex(null)
	})] });
}
function BlockRender({ block, index, startIndex, onImageClick }) {
	const offset = index % 2 === 0 ? "md:ml-[8%]" : "md:mr-[8%] md:ml-auto";
	switch (block.kind) {
		case "single": return /* @__PURE__ */ jsxs("figure", {
			className: `mx-auto max-w-6xl ${offset}`,
			children: [/* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: () => onImageClick(startIndex),
				className: "hover-zoom block aspect-[4/3] w-full cursor-zoom-in",
				"aria-label": `Open ${block.alt} in gallery`,
				children: /* @__PURE__ */ jsx("img", {
					src: block.src,
					alt: block.alt,
					className: "h-full w-full object-cover",
					loading: "lazy"
				})
			}), block.caption && /* @__PURE__ */ jsx("figcaption", {
				className: "mt-4 text-[0.65rem] uppercase tracking-[0.32em] text-charcoal-soft",
				children: block.caption
			})]
		});
		case "pair": return /* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 md:gap-10",
			children: [/* @__PURE__ */ jsx("figure", {
				className: "md:mt-16",
				children: /* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: () => onImageClick(startIndex),
					className: "hover-zoom block aspect-[4/5] w-full cursor-zoom-in",
					"aria-label": `Open ${block.left.alt} in gallery`,
					children: /* @__PURE__ */ jsx("img", {
						src: block.left.src,
						alt: block.left.alt,
						className: "h-full w-full object-cover",
						loading: "lazy"
					})
				})
			}), /* @__PURE__ */ jsx("figure", { children: /* @__PURE__ */ jsx("button", {
				type: "button",
				onClick: () => onImageClick(startIndex + 1),
				className: "hover-zoom block aspect-[4/5] w-full cursor-zoom-in",
				"aria-label": `Open ${block.right.alt} in gallery`,
				children: /* @__PURE__ */ jsx("img", {
					src: block.right.src,
					alt: block.right.alt,
					className: "h-full w-full object-cover",
					loading: "lazy"
				})
			}) })]
		});
		case "trio": return /* @__PURE__ */ jsx("div", {
			className: "mx-auto grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-3 md:gap-6",
			children: block.items.map((it, i) => /* @__PURE__ */ jsx("figure", {
				className: `${i === 1 ? "md:mt-12" : ""} ${i === 2 ? "col-span-2 md:col-span-1 md:mt-24" : ""}`,
				children: /* @__PURE__ */ jsx("button", {
					type: "button",
					onClick: () => onImageClick(startIndex + i),
					className: "hover-zoom block aspect-[3/4] w-full cursor-zoom-in",
					"aria-label": `Open ${it.alt} in gallery`,
					children: /* @__PURE__ */ jsx("img", {
						src: it.src,
						alt: it.alt,
						className: "h-full w-full object-cover",
						loading: "lazy"
					})
				})
			}, i))
		});
		case "verse": return /* @__PURE__ */ jsxs("section", {
			className: "mx-auto max-w-4xl px-6 py-16 text-center md:py-24",
			children: [/* @__PURE__ */ jsxs("p", {
				className: "serif-display text-[clamp(2rem,6vw,5rem)] italic leading-[1.05]",
				children: [
					"\"",
					block.text,
					"\""
				]
			}), block.attribution && /* @__PURE__ */ jsx("p", {
				className: "mt-8 text-[0.65rem] uppercase tracking-[0.32em] text-gold",
				children: block.attribution
			})]
		});
		case "paragraph": return /* @__PURE__ */ jsx("section", {
			className: "mx-auto max-w-2xl px-6 py-12 text-center",
			children: /* @__PURE__ */ jsx("p", {
				className: "serif-display text-2xl leading-relaxed md:text-3xl",
				children: block.text
			})
		});
	}
}
//#endregion
export { StoryPage as component };
