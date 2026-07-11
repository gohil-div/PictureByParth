import { t as MarketingLayout } from "./MarketingLayout-Bhr7HK5R.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/stories.$slug.tsx?tsr-split=notFoundComponent
var SplitNotFoundComponent = () => /* @__PURE__ */ jsx(MarketingLayout, { children: /* @__PURE__ */ jsx("div", {
	className: "flex min-h-screen items-center justify-center px-6 text-center",
	children: /* @__PURE__ */ jsxs("div", { children: [
		/* @__PURE__ */ jsx("p", {
			className: "editorial-eyebrow",
			children: "Not Found"
		}),
		/* @__PURE__ */ jsx("h1", {
			className: "serif-display-roman mt-6 text-5xl",
			children: "This story is unwritten."
		}),
		/* @__PURE__ */ jsx(Link, {
			to: "/stories",
			className: "mt-10 inline-block text-[0.7rem] uppercase tracking-[0.32em] link-underline",
			children: "Return to Stories"
		})
	] })
}) });
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
