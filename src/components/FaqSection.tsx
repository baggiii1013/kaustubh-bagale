// Single source of truth for FAQ copy: rendered here, reused by the FAQPage
// JSON-LD in layout.tsx and by /ai/faq.json. Keep answers factual — Google
// devalues FAQ schema whose answers aren't visible on the page.
export const faqs = [
  {
    q: "Who is Kaustubh Bagale?",
    a: "Kaustubh Bagale is a full stack developer and final-year Computer Science Engineering student at Parul University, India. He builds web applications end to end — React and Next.js on the front end, Node.js and Express on the back end — with a focus on scalability, cloud computing, and DevOps practices such as containerisation and load balancing.",
  },
  {
    q: "What does Kaustubh Bagale build?",
    a: "Production web platforms rather than demos. His work includes the Parul University Convocation Portal, a dual-interface system that handled 100,000 concurrent users at 99.9% uptime behind Nginx load balancing, and a live university admission portal serving 1,000+ students whose self-service verification workflow cut administrative time by roughly 40%.",
  },
  {
    q: "What technologies does he work with?",
    a: "Day to day: JavaScript, TypeScript, React, Next.js, Node.js, Express, MongoDB and Tailwind CSS — the MERN stack plus the Next.js App Router. Alongside those he works in Java, Python, C++ and Rust, with PostgreSQL and Firebase for data, and Docker, Nginx, Git, AWS and Vercel for deployment and infrastructure.",
  },
  {
    q: "Is Kaustubh Bagale available for freelance or full-time work?",
    a: "Yes. He takes on freelance and contract web development work and is open to full-time software engineering roles, remote or based in India. Typical engagements are full stack web applications, Next.js sites and performance or infrastructure work on existing systems.",
  },
  {
    q: "How do you get in touch with him?",
    a: "Email kaustubhbagale10@gmail.com or call +91 8767943262. He is also reachable on GitHub (@baggiii1013), LinkedIn and X. His résumé is downloadable from the tech stack section of this site, and the contact card is the last panel of the homepage.",
  },
  {
    q: "What makes his approach to building software different?",
    a: "He designs for the load a system will actually see. That means measuring before optimising, keeping bundles small enough to hit a 100 Lighthouse performance score, choosing boring and well-understood infrastructure over novelty, and writing services that degrade gracefully instead of failing outright when traffic spikes.",
  },
];

export default function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="snap-start-card w-[var(--card-width)] h-full bg-deep-black flex flex-col p-6 md:p-12 relative shrink-0 border-r border-white/10 overflow-hidden"
    >
      {/* Header */}
      <div className="z-10 shrink-0 mt-20.25 mb-4 md:mb-8">
        <div className="w-16 h-1 bg-neon-green mb-4 md:mb-6"></div>
        <h2
          id="faq-heading"
          className="font-display text-[12vw] md:text-[6vw] uppercase leading-none"
        >
          COMMON
          <br />
          <span className="text-stroke-sm text-neon-green">QUESTIONS</span>
        </h2>
      </div>

      {/* Scrollable answers */}
      <div className="flex-1 w-full z-10 overflow-y-auto scrollbar-none pr-2">
        <dl className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-x-16 lg:gap-y-8 pb-20 md:pb-0">
          {faqs.map((faq, i) => (
            <div key={faq.q} className="border-l-2 border-white/20 pl-4">
              <dt className="flex gap-3 mb-2">
                <span className="font-accent text-xs text-neon-green/60 pt-1 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-accent text-base md:text-lg uppercase tracking-wide text-neon-pink">
                  {faq.q}
                </h3>
              </dt>
              <dd className="font-body text-sm md:text-base leading-relaxed text-white/80 pl-8">
                {faq.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-end border-t border-white/10 pt-4 md:pt-6 z-10 shrink-0 mt-4">
        <div className="font-display text-2xl md:text-3xl uppercase tracking-tighter italic text-neon-green">
          Ask Away
        </div>
        <a
          href="mailto:kaustubhbagale10@gmail.com"
          className="font-accent text-sm text-white/60 hover:text-neon-green transition-colors underline underline-offset-4"
        >
          Something else? Email me
        </a>
      </div>
    </section>
  );
}
