import { faqs } from "@/components/FaqSection";

// Served from the same array the FAQ card and the FAQPage JSON-LD use, so the
// three can't drift apart.
export const dynamic = "force-static";

export function GET() {
  return Response.json(
    {
      name: "Kaustubh Bagale — FAQ",
      url: "https://kaustubhbagale.me/#faq",
      language: "en",
      faqs: faqs.map(({ q, a }) => ({ question: q, answer: a })),
    },
    { headers: { "Cache-Control": "public, max-age=3600" } },
  );
}
