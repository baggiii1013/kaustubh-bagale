const SITE = "https://kaustubhbagale.me";

// ponytail: static two-item feed — no blog exists yet. When posts land, map
// over the post list instead of this literal.
const items = [
  {
    title: "Kaustubh Bagale — Full Stack MERN & Next.js Developer",
    link: SITE,
    description:
      "Portfolio of Kaustubh Bagale: full stack developer building React, Next.js and Node.js platforms, including systems serving 100,000+ concurrent users.",
  },
  {
    title: "Projects — Full Stack & Web Development",
    link: `${SITE}/projects`,
    description:
      "University portals, full-stack web applications and client sites built with React, Next.js, Node.js, MongoDB, Docker and Nginx.",
  },
];

export const dynamic = "force-static";

export function GET() {
  const built = new Date().toUTCString();
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Kaustubh Bagale — Updates</title>
    <link>${SITE}</link>
    <description>Full stack development work by Kaustubh Bagale — MERN stack, Next.js and DevOps.</description>
    <language>en</language>
    <lastBuildDate>${built}</lastBuildDate>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml" />
${items
  .map(
    (item) => `    <item>
      <title>${item.title}</title>
      <link>${item.link}</link>
      <guid isPermaLink="true">${item.link}</guid>
      <description>${item.description}</description>
      <pubDate>${built}</pubDate>
    </item>`,
  )
  .join("\n")}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
