import "./lib/error-capture";

import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { fallbackInstagramFeed } from "./lib/instagram";

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const url = new URL(request.url);

    if (url.pathname === "/api/instagram") {
      const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
      const accountId = process.env.INSTAGRAM_ACCOUNT_ID;

      const fallbackResponse = new Response(
        JSON.stringify({ photos: fallbackInstagramFeed }),
        {
          status: 200,
          headers: { "content-type": "application/json; charset=utf-8" },
        },
      );

      if (!accessToken || !accountId) {
        return fallbackResponse;
      }

      try {
        const graphUrl = new URL(`https://graph.facebook.com/v20.0/${accountId}/media`);
        graphUrl.searchParams.set("fields", "id,media_url,permalink,caption");
        graphUrl.searchParams.set("access_token", accessToken);

        const upstream = await fetch(graphUrl.toString(), {
          headers: { Accept: "application/json" },
        });

        if (!upstream.ok) {
          return fallbackResponse;
        }

        const payload = await upstream.json();
        const photos = Array.isArray(payload?.data)
          ? payload.data
              .filter((item: any) => item?.media_url)
              .slice(0, 6)
              .map((item: any) => ({
                src: item.media_url,
                href: item.permalink || "https://www.instagram.com/parthphotography1/",
                alt: item.caption || "Instagram post by @parthphotography1",
              }))
          : fallbackInstagramFeed;

        return new Response(JSON.stringify({ photos }), {
          status: 200,
          headers: { "content-type": "application/json; charset=utf-8" },
        });
      } catch {
        return fallbackResponse;
      }
    }

    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error(error);
      return new Response(renderErrorPage(), {
        status: 500,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    }
  },
};
