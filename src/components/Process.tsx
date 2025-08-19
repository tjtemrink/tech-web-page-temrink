// src/components/Process.tsx
import Image from "next/image";
import Container from "./Container";
import { siteDetails } from "@/data/siteDetails";

const steps = [
  { title: "Discovery call", desc: "Understand your stack, pain points, security posture, and goals." },
  { title: "Licensing & baseline", desc: "Right-size M365/Google licenses, MFA/SSPR, device standards and backups." },
  { title: "Copilot rollout & training", desc: "Tenant readiness, governance, pilot users, playbooks, enablement." },
  { title: "Automations", desc: "Power Automate / Logic Apps and integrations to remove repetitive work." },
  { title: "Agentic AI", desc: "Custom copilots/agents grounded in your data to run multi-step workflows." },
  { title: "Ongoing support", desc: "Helpdesk, device mgmt, monitoring, and monthly optimization reviews." },
];

function ArrowBadge() {
  return (
    <span
      className="absolute -left-2 -top-3 flex h-8 w-8 items-center justify-center rounded-full
                 bg-[#010775] text-white shadow ring-2 ring-background"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"
           strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </span>
  );
}

export default function Process() {
  // Always route CTAs to the contact page
  const contactHref = siteDetails.contactPath || "/contact";

  return (
    <section id="process" className="relative scroll-mt-28 md:scroll-mt-40 bg-muted/30">
      <Container>
        <div className="grid items-start gap-10 py-12 md:py-16 lg:grid-cols-[1.1fr,1fr]">
          {/* Timeline */}
          <div className="order-2 lg:order-1">
            <header className="mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">How we implement AI</h2>
              <p className="mt-2 text-muted-foreground max-w-2xl">
                A simple, low-risk path from discovery to AI-powered operations.
              </p>
            </header>

            <div className="relative mt-8 pl-8">
              {/* vertical spine */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" aria-hidden />
              <ol className="space-y-4 md:space-y-5">
                {steps.map((s) => (
                  <li key={s.title} className="relative">
                    <ArrowBadge />
                    <div className="rounded-2xl bg-background p-4 md:p-5 ring-1 ring-border shadow-sm">
                      <h3 className="text-base md:text-lg font-semibold text-foreground">{s.title}</h3>
                      <p className="mt-1 text-sm md:text-[15px] leading-relaxed text-muted-foreground">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={contactHref}
                  className="inline-flex items-center justify-center rounded-2xl bg-[#010775] px-5 py-2.5 text-white font-semibold shadow-lg hover:opacity-95"
                  aria-label="Book a meeting"
                  title="Book a meeting"
                >
                  Book a meeting
                </a>
                <a
                  href={contactHref}
                  className="inline-flex items-center justify-center rounded-2xl border border-border px-5 py-2.5 text-foreground font-semibold hover:bg-muted"
                >
                  Talk to an expert
                </a>
              </div>
            </div>
          </div>

          {/* Images column (right) */}
          <div className="order-1 lg:order-2">
            <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-auto space-y-6 pr-2">
              {/* First image */}
              <div className="rounded-3xl bg-background p-3 ring-1 ring-border shadow-xl">
                <Image
                  src="/images/timeline.webp"
                  width={1200}
                  height={900}
                  alt="Temrink implementation timeline"
                  priority
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="h-auto w-full rounded-2xl object-cover"
                />
              </div>

              {/* Second image */}
              <div className="rounded-3xl bg-background p-3 ring-1 ring-border shadow-xl">
                <Image
                  src="/images/implementation.webp"
                  width={1200}
                  height={900}
                  alt="Implementation workflow illustration"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="h-auto w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* soft brand glow */}
      <div className="pointer-events-none absolute -z-10 -bottom-24 -right-16 h-72 w-72 rounded-full bg-[#010775]/5 blur-3xl" />
    </section>
  );
}
