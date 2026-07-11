import { r as images } from "./stories-GmQrXJAS.js";
import { n as cn, t as MarketingLayout } from "./MarketingLayout-Bhr7HK5R.js";
import { t as Reveal } from "./Reveal-CajH9--I.js";
import { t as Button } from "./button-Dok6bTB8.js";
import * as React from "react";
import { useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { ChevronDown } from "lucide-react";
import { cva } from "class-variance-authority";
import * as LabelPrimitive from "@radix-ui/react-label";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
//#region src/components/contact/ContactHero.tsx
function ContactHero() {
	return /* @__PURE__ */ jsxs("section", {
		className: "px-6 pb-16 pt-40 text-center md:pt-48",
		children: [
			/* @__PURE__ */ jsx("p", {
				className: "editorial-eyebrow animate-reveal-fade",
				children: "Enquire"
			}),
			/* @__PURE__ */ jsxs("h1", {
				className: "serif-display-roman mt-8 text-[clamp(2.75rem,7vw,6rem)] animate-reveal-up",
				style: { animationDelay: "0.2s" },
				children: [
					"Let's talk about ",
					/* @__PURE__ */ jsx("em", { children: "your" }),
					" day."
				]
			}),
			/* @__PURE__ */ jsx("p", {
				className: "mx-auto mt-8 max-w-xl text-sm leading-relaxed text-charcoal-soft",
				children: "We accept a small number of weddings each year, by personal conversation. Tell us your date, your venue, and a little about the story you'd like told."
			})
		]
	});
}
//#endregion
//#region src/components/ui/input.tsx
var Input = React.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ jsx("input", {
		type,
		className: cn("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
//#endregion
//#region src/components/ui/textarea.tsx
var Textarea = React.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ jsx("textarea", {
		className: cn("flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
//#endregion
//#region src/components/ui/label.tsx
var labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
var Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(LabelPrimitive.Root, {
	ref,
	className: cn(labelVariants(), className),
	...props
}));
Label.displayName = LabelPrimitive.Root.displayName;
//#endregion
//#region src/components/contact/ContactDetails.tsx
var CONTACT_EMAIL = "hello@picturebyparth.com";
var fieldClassName = "mt-2 rounded-none border-0 border-b border-charcoal/25 bg-transparent px-0 py-3 text-base shadow-none focus-visible:border-charcoal focus-visible:ring-0";
var labelClassName = "text-[0.65rem] uppercase tracking-[0.28em] text-charcoal-soft";
function ContactDetails() {
	const [name, setName] = useState("");
	const [date, setDate] = useState("");
	const [message, setMessage] = useState("");
	function handleSubmit(event) {
		event.preventDefault();
		const subject = `Enquiry from ${name || "your website"}`;
		const body = `Name: ${name}\nWedding date: ${date}\n\n${message}`;
		window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
	}
	return /* @__PURE__ */ jsx("section", {
		className: "px-6 py-16 md:px-12 md:py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center md:gap-20",
			children: [/* @__PURE__ */ jsx(Reveal, {
				className: "hover-zoom aspect-[4/5] w-full",
				children: /* @__PURE__ */ jsx("img", {
					src: images.bouquet,
					alt: "Bridal bouquet on antique linen",
					className: "h-full w-full object-cover",
					loading: "lazy"
				})
			}), /* @__PURE__ */ jsxs(Reveal, {
				delayMs: 100,
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "editorial-eyebrow",
						children: "Send a Note"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "serif-display-roman mt-4 text-3xl md:text-4xl",
						children: "Tell us about your day."
					}),
					/* @__PURE__ */ jsxs("form", {
						onSubmit: handleSubmit,
						className: "mt-10 space-y-6",
						children: [
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "contact-name",
								className: labelClassName,
								children: "Name"
							}), /* @__PURE__ */ jsx(Input, {
								id: "contact-name",
								value: name,
								onChange: (e) => setName(e.target.value),
								required: true,
								className: fieldClassName
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "contact-date",
								className: labelClassName,
								children: "Wedding Date"
							}), /* @__PURE__ */ jsx(Input, {
								id: "contact-date",
								type: "date",
								value: date,
								onChange: (e) => setDate(e.target.value),
								className: fieldClassName
							})] }),
							/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx(Label, {
								htmlFor: "contact-message",
								className: labelClassName,
								children: "Your Story"
							}), /* @__PURE__ */ jsx(Textarea, {
								id: "contact-message",
								value: message,
								onChange: (e) => setMessage(e.target.value),
								rows: 4,
								required: true,
								className: fieldClassName
							})] }),
							/* @__PURE__ */ jsxs(Button, {
								type: "submit",
								className: "group mt-4 inline-flex items-center gap-5 rounded-none border border-charcoal/30 bg-transparent px-9 py-5 text-[0.7rem] uppercase tracking-[0.32em] text-charcoal shadow-none transition-all duration-700 hover:border-charcoal hover:bg-charcoal hover:text-ivory",
								children: [/* @__PURE__ */ jsx("span", { children: "Send Enquiry" }), /* @__PURE__ */ jsx("span", { className: "h-px w-8 bg-current transition-all duration-700 group-hover:w-12" })]
							})
						]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-10 flex flex-col gap-2 text-[0.65rem] uppercase tracking-[0.32em] text-charcoal-soft",
						children: [
							/* @__PURE__ */ jsxs("p", { children: [
								"Email:",
								" ",
								/* @__PURE__ */ jsx("a", {
									href: `mailto:${CONTACT_EMAIL}`,
									className: "link-underline text-charcoal",
									children: CONTACT_EMAIL
								})
							] }),
							/* @__PURE__ */ jsxs("p", { children: [
								"WhatsApp:",
								" ",
								/* @__PURE__ */ jsx("a", {
									href: "https://wa.me/000000000",
									className: "link-underline text-charcoal",
									children: "Message the Studio"
								})
							] }),
							/* @__PURE__ */ jsx("p", { children: "Studio: Florence, Italy" })
						]
					})
				]
			})]
		})
	});
}
//#endregion
//#region src/components/ui/accordion.tsx
var Accordion = AccordionPrimitive.Root;
var AccordionItem = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Header, {
	className: "flex",
	children: /* @__PURE__ */ jsxs(AccordionPrimitive.Trigger, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
var AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx(AccordionPrimitive.Content, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ jsx("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
//#endregion
//#region src/components/contact/ContactFAQ.tsx
var faqs = [
	{
		question: "How far in advance should we enquire?",
		answer: "Most couples reach out 9–14 months before their date, as we accept a limited number of weddings each year. Later enquiries are always welcome — we'll simply confirm availability first."
	},
	{
		question: "Do you travel outside Italy?",
		answer: "Yes. While we're based in Florence, we regularly travel across Europe and beyond for weddings and elopements."
	},
	{
		question: "How long until we receive our story?",
		answer: "A full gallery and edited story typically arrive within 8–10 weeks of your wedding day."
	},
	{
		question: "Can we meet before booking?",
		answer: "Always. Every booking begins with a quiet conversation — by video call or in person — so we can make sure we're the right fit for your day."
	}
];
function ContactFAQ() {
	return /* @__PURE__ */ jsx("section", {
		className: "border-t border-charcoal/10 px-6 py-24 md:py-32",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-3xl",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "editorial-eyebrow text-center",
					children: "What to Expect"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "serif-display-roman mt-6 text-center text-4xl md:text-6xl",
					children: "A few common questions."
				}),
				/* @__PURE__ */ jsx(Accordion, {
					type: "single",
					collapsible: true,
					className: "mt-16",
					children: faqs.map((f) => /* @__PURE__ */ jsxs(AccordionItem, {
						value: f.question,
						className: "border-charcoal/15",
						children: [/* @__PURE__ */ jsx(AccordionTrigger, {
							className: "serif-display-roman text-xl hover:no-underline md:text-2xl",
							children: f.question
						}), /* @__PURE__ */ jsx(AccordionContent, {
							className: "text-sm leading-relaxed text-charcoal-soft",
							children: f.answer
						})]
					}, f.question))
				})
			]
		})
	});
}
//#endregion
//#region src/components/contact/ContactCTA.tsx
function ContactCTA() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative h-[80svh] w-full overflow-hidden",
		children: [
			/* @__PURE__ */ jsx("img", {
				src: images.ceremony,
				alt: "A ceremony at golden hour above the Mediterranean",
				className: "absolute inset-0 h-full w-full object-cover animate-ken-burns",
				loading: "lazy"
			}),
			/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-charcoal/40" }),
			/* @__PURE__ */ jsxs("div", {
				className: "relative z-10 flex h-full flex-col items-center justify-center px-6 text-center",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "editorial-eyebrow !text-gold-soft",
						children: "An Invitation"
					}),
					/* @__PURE__ */ jsxs("h2", {
						className: "serif-display-roman mt-8 text-[clamp(3rem,8vw,7.5rem)] text-ivory",
						children: ["We'll write back ", /* @__PURE__ */ jsx("em", { children: "the same day." })]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-14",
						children: /* @__PURE__ */ jsxs("a", {
							href: "mailto:hello@picturebyparth.com",
							className: "group inline-flex items-center gap-5 border border-ivory/40 bg-ivory/5 px-9 py-5 text-[0.7rem] uppercase tracking-[0.32em] text-ivory backdrop-blur-sm transition-all duration-700 hover:border-ivory hover:bg-ivory hover:text-charcoal",
							children: [/* @__PURE__ */ jsx("span", { children: "Book a Consultation" }), /* @__PURE__ */ jsx("span", { className: "h-px w-10 bg-current transition-all duration-700 group-hover:w-16" })]
						})
					})
				]
			})
		]
	});
}
//#endregion
//#region src/routes/contact.tsx?tsr-split=component
function ContactPage() {
	return /* @__PURE__ */ jsxs(MarketingLayout, { children: [
		/* @__PURE__ */ jsx(ContactHero, {}),
		/* @__PURE__ */ jsx(ContactDetails, {}),
		/* @__PURE__ */ jsx(ContactFAQ, {}),
		/* @__PURE__ */ jsx(ContactCTA, {})
	] });
}
//#endregion
export { ContactPage as component };
