import React from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Container from "@/components/Container";
import Section from "@/components/Section";
import ComprehensivePricing from "@/components/ComprehensivePricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Stats from "@/components/Stats";
import DecisionMatrix from "@/components/DecisionMatrix";
// REMOVE: import CTA from "@/components/CTA";
// Removed MicrosoftBanner per request

/** AI quick summary rows (clean + simple) */
type AIRow = {
  solution: string;
  type: string;
  keyFeatures: string[];
  notes?: string;
};

const aiRows: AIRow[] = [
  {
    solution: "Microsoft 365 Copilot",
    type: "Productivity AI (suite)",
    keyFeatures: [
      "In-app help across Word, Excel, PowerPoint, Outlook, Teams",
      "Drafting, summarizing, meeting notes, data analysis",
    ],
  },
  {
    solution: "Copilot for Sales",
    type: "Role-based (Sales)",
    keyFeatures: [
      "Works with Dynamics 365 or Salesforce",
      "Email/meeting prep, CRM updates, opp & account summaries",
    ],
  },
  {
    solution: "Copilot for Service",
    type: "Role-based (Support)",
    keyFeatures: [
      "Draft responses, case summaries",
      "Integrates with existing contact center & knowledge",
    ],
  },
  {
    solution: "Microsoft Security Copilot",
    type: "Security AI (SOC assistant)",
    keyFeatures: [
      "Incident triage, investigation & threat hunting",
      "Works with Microsoft Security stack",
    ],
  },
  {
    solution: "Microsoft Copilot Studio",
    type: "Builder platform (low-code agents)",
    keyFeatures: [
      "Build role/LOB agents, plugins & connectors",
      "Governance & data grounding",
    ],
  },
  {
    solution: "Copilot in Azure",
    type: "Cloud ops assistant",
    keyFeatures: [
      "Understand resources, get recommendations & queries",
      "Manage Azure at scale with natural language",
    ],
  },
  {
    solution: "Copilot for Finance (Finance agents)",
    type: "Role-based (Finance)",
    keyFeatures: [
      "Excel reconciliations & variance checks",
      "Outlook AR workflows; ERP connections",
    ],
    notes: "Rolling out under “Finance agents” branding.",
  },
  {
    solution: "Google Workspace with Gemini",
    type: "Productivity AI (Workspace)",
    keyFeatures: [
      "AI in Docs, Sheets, and Gmail side-panel",
      "Custom “Gems” assistants",
    ],
  },
  {
    solution: "SentinelOne Purple AI",
    type: "Security AI",
    keyFeatures: [
      "Generative-AI security analyst",
      "Natural-language threat hunting & investigation",
    ],
  },
  {
    solution: "IRONSCALES Email Security",
    type: "AI email security",
    keyFeatures: [
      "AI phishing detection and automated response",
      "Multi-tenant management for MSPs",
    ],
  },
];

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero with partner strip */}
      <Hero />

      {/* Core services */}
      <Services />

      {/* Section divider */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        </div>
      </div>

      {/* Pricing - High importance, moved up */}
      <Container>
        <Section
          id="pricing"
          className="relative isolate rounded-[2rem] bg-gradient-to-b from-[#F1F5FF] via-white to-[#F8FAFF] ring-1 ring-border shadow-lg"
          title={
            <div className="text-center">
              <span className="inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-semibold tracking-wide bg-[#010775]/10 text-[#010775] mb-4">
                COMPREHENSIVE PRICING
              </span>
              <span className="bg-gradient-to-r from-[#010775] via-[#2A3BCF] to-[#DD0000] bg-clip-text text-transparent">
                Complete IT Solutions & Pricing
              </span>
            </div>
          }
          titleClassName="text-4xl md:text-5xl font-extrabold tracking-tight"
          description="Choose from our comprehensive range of IT support packages, device leasing options, and add-on services. All pricing in CAD with flexible payment options."
        >
          <ComprehensivePricing />
        </Section>
      </Container>

      {/* Section divider */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        </div>
      </div>

      {/* AI summary (anchor target for #ai-summary) */}
      <Container>
        <Section
          id="ai-summary"
          className="relative isolate rounded-[2rem] bg-gradient-to-b from-[#0107750D] via-white to-[#DD00000D] ring-1 ring-border"
          title={
            <div className="text-center">
              <span className="inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-semibold tracking-wide bg-[#010775]/10 text-[#010775] mb-4">
                AI & AUTOMATION
              </span>
              <span className="bg-gradient-to-r from-[#010775] via-[#2A3BCF] to-[#DD0000] bg-clip-text text-transparent">
                AI solutions we implement
              </span>
            </div>
          }
          titleClassName="text-4xl md:text-5xl font-extrabold tracking-tight"
          description="Temrink provides licensing, implementation, and training for the AI products below. Use this quick comparison to see what's possible for your team."
        >
          <div className="overflow-x-auto rounded-2xl border bg-background">
            <table className="min-w-[780px] w-full text-left text-[15px] md:text-base leading-relaxed">
              <thead className="border-b bg-muted/50 text-sm uppercase tracking-wide">
                <tr>
                  <th className="p-5">Solution</th>
                  <th className="p-5">Type</th>
                  <th className="p-5">Key features</th>
                </tr>
              </thead>
              <tbody>
                {aiRows.map((r) => (
                  <tr key={r.solution} className="border-b last:border-0 align-top">
                    <td className="p-5 font-medium">
                      {r.solution}
                      {r.notes ? (
                        <span className="block text-xs text-muted-foreground mt-1">
                          {r.notes}
                        </span>
                      ) : null}
                    </td>
                    <td className="p-5">{r.type}</td>
                    <td className="p-5">
                      <ul className="space-y-1">
                        {r.keyFeatures.map((k) => (
                          <li key={k} className="flex items-start gap-3">
                            {/* Fixed-size brand check badge */}
                            <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#010775] text-white">
                              <svg
                                viewBox="0 0 20 20"
                                className="h-3.5 w-3.5"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                            <span>{k}</span>
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>
      </Container>

      {/* Section divider */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        </div>
      </div>

      {/* Decision Matrix */}
      <Container>
        <Section
          id="decision-matrix"
          className="relative isolate rounded-[2rem] bg-gradient-to-b from-[#F1F5FF] via-white to-[#F8FAFF] ring-1 ring-border shadow-lg"
          title={
            <div className="text-center">
              <span className="inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-semibold tracking-wide bg-[#010775]/10 text-[#010775] mb-4">
                PACKAGE RECOMMENDATIONS
              </span>
              <span className="bg-gradient-to-r from-[#010775] via-[#2A3BCF] to-[#DD0000] bg-clip-text text-transparent">
                Decision Matrix
              </span>
            </div>
          }
          titleClassName="text-4xl md:text-5xl font-extrabold tracking-tight"
          description="Find the right IT support package based on your team size, current licenses, security needs, and device requirements."
        >
          <DecisionMatrix />
        </Section>
      </Container>

      {/* Section divider */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        </div>
      </div>

      {/* Process (linked from the hero CTA) */}
      <Process />

      {/* Section divider */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        </div>
      </div>

      {/* Testimonials */}
      <Container>
        <Section
          id="testimonials"
          className="relative overflow-hidden"
          title="What Our Clients Say"
          description="Hear from those who have partnered with us."
        >
          {/* background */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#F8FAFF] via-white to-[#F1F5FF]" />
          <Testimonials />
        </Section>
      </Container>

      {/* Section divider */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        </div>
      </div>

      {/* Standalone sections render their own containers */}
      <FAQ />
      <Stats />

      {/* CTA removed */}
    </div>
  );
};

export default HomePage;
