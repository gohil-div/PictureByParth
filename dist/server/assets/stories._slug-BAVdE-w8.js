import { n as findStory } from "./stories-GmQrXJAS.js";
import { createFileRoute, lazyRouteComponent, notFound } from "@tanstack/react-router";
//#region src/routes/stories.$slug.tsx
var $$splitComponentImporter = () => import("./stories._slug-BdHZ5DSM.js");
var $$splitNotFoundComponentImporter = () => import("./stories._slug-BIOVRAb-.js");
var Route = createFileRoute("/stories/$slug")({
	loader: ({ params }) => {
		const story = findStory(params.slug);
		if (!story) throw notFound();
		return { story };
	},
	head: ({ loaderData }) => {
		const s = loaderData?.story;
		if (!s) return { meta: [{ title: "Story · Picture by Parth" }] };
		return { meta: [
			{ title: `${s.couple} — ${s.location} · Picture by Parth` },
			{
				name: "description",
				content: s.intro.slice(0, 155)
			},
			{
				property: "og:title",
				content: `${s.couple} — ${s.location}`
			},
			{
				property: "og:description",
				content: s.intro.slice(0, 155)
			},
			{
				property: "og:image",
				content: s.cover
			},
			{
				property: "og:type",
				content: "article"
			}
		] };
	},
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
