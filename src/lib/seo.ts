// TODO: confirm production domain — guessed from the hello@picturebyparth.com contact address.
export const SITE_URL = "https://www.picturebyparth.com";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

export function pageMeta({ title, description, path, image }: PageMetaInput) {
  const url = `${SITE_URL}${path}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      ...(image ? [{ property: "og:image", content: image }] : []),
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      ...(image ? [{ name: "twitter:image", content: image }] : []),
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
