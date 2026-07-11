import { t as Route$8 } from "./stories._slug-BAVdE-w8.js";
import { useEffect } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, useRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
//#region src/styles.css?url
var styles_default = "/assets/styles-BxHDuxPJ.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-6",
					children: /* @__PURE__ */ jsx(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsx("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ jsxs("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ jsx("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ jsx("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ jsx("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$7 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Picture by Parth — Stories Worth Remembering" },
			{
				name: "description",
				content: "A luxury wedding & portrait photography studio based in Florence, available worldwide. Fine art imagery, crafted to last a lifetime."
			},
			{
				name: "author",
				content: "Picture by Parth"
			},
			{
				property: "og:title",
				content: "Picture by Parth — Stories Worth Remembering"
			},
			{
				property: "og:description",
				content: "A luxury wedding & portrait photography studio."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,300;1,9..144,400;1,9..144,500&family=Inter:wght@300;400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$7.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsx(Outlet, {})
	});
}
//#endregion
//#region src/routes/stories.tsx
var $$splitComponentImporter$6 = () => import("./stories-C-sXcP7G.js");
var Route$6 = createFileRoute("/stories")({ component: lazyRouteComponent($$splitComponentImporter$6, "component") });
//#endregion
//#region src/lib/seo.ts
var SITE_URL = "https://www.picturebyparth.com";
function pageMeta({ title, description, path, image }) {
	const url = `${SITE_URL}${path}`;
	return {
		meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:url",
				content: url
			},
			...image ? [{
				property: "og:image",
				content: image
			}] : [],
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: title
			},
			{
				name: "twitter:description",
				content: description
			},
			...image ? [{
				name: "twitter:image",
				content: image
			}] : []
		],
		links: [{
			rel: "canonical",
			href: url
		}]
	};
}
//#endregion
//#region src/routes/services.tsx
var $$splitComponentImporter$5 = () => import("./services-BhaPhWly.js");
var Route$5 = createFileRoute("/services")({
	head: () => pageMeta({
		title: "Services — Picture by Parth",
		description: "Wedding photography packages from Picture by Parth — full-day coverage, intimate elopements, and editorial add-ons.",
		path: "/services"
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/portfolio.tsx
var $$splitComponentImporter$4 = () => import("./portfolio-DHNMjQ7K.js");
var Route$4 = createFileRoute("/portfolio")({
	head: () => pageMeta({
		title: "Portfolio — Picture by Parth",
		description: "A selected portfolio of editorial wedding work from Picture by Parth, sorted by chapter — Love, Beginnings, Legacy, Celebrations.",
		path: "/portfolio"
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/contact.tsx
var $$splitComponentImporter$3 = () => import("./contact-BP6fziRh.js");
var Route$3 = createFileRoute("/contact")({
	head: () => pageMeta({
		title: "Contact — Picture by Parth",
		description: "Get in touch with Picture by Parth to enquire about your wedding date and begin the conversation.",
		path: "/contact"
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$2 = () => import("./about-B32HbkMJ.js");
var Route$2 = createFileRoute("/about")({
	head: () => pageMeta({
		title: "About — Picture by Parth",
		description: "Picture by Parth is an invitation-first editorial wedding studio composing intimate stories across Italy and beyond.",
		path: "/about"
	}),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$1 = () => import("./routes-itOTJ88J.js");
var Route$1 = createFileRoute("/")({
	head: () => pageMeta({
		title: "Picture by Parth — Fine Art Wedding & Portrait Photography",
		description: "Picture by Parth is a fine art wedding & portrait photography studio based in Florence, available worldwide. View the portfolio and enquire about your date.",
		path: "/"
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/stories.index.tsx
var $$splitComponentImporter = () => import("./stories.index-mi8Y96g7.js");
var Route = createFileRoute("/stories/")({
	head: () => pageMeta({
		title: "Stories — Picture by Parth",
		description: "Browse real wedding stories captured by Picture by Parth, and read each one in full.",
		path: "/stories"
	}),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var StoriesRoute = Route$6.update({
	id: "/stories",
	path: "/stories",
	getParentRoute: () => Route$7
});
var ServicesRoute = Route$5.update({
	id: "/services",
	path: "/services",
	getParentRoute: () => Route$7
});
var PortfolioRoute = Route$4.update({
	id: "/portfolio",
	path: "/portfolio",
	getParentRoute: () => Route$7
});
var ContactRoute = Route$3.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$7
});
var AboutRoute = Route$2.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$7
});
var IndexRoute = Route$1.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$7
});
var StoriesIndexRoute = Route.update({
	id: "/",
	path: "/",
	getParentRoute: () => StoriesRoute
});
var StoriesRouteChildren = {
	StoriesSlugRoute: Route$8.update({
		id: "/$slug",
		path: "/$slug",
		getParentRoute: () => StoriesRoute
	}),
	StoriesIndexRoute
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	PortfolioRoute,
	ServicesRoute,
	StoriesRoute: StoriesRoute._addFileChildren(StoriesRouteChildren)
};
var routeTree = Route$7._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
