import React from "react";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Stats from "@/components/Stats";
import DecisionMatrix from "@/components/DecisionMatrix";

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
      "Incident analysis, threat hunting, security reporting",
      "Integrates with Microsoft Sentinel, Defender XDR",
    ],
  },
  {
    solution: "Power Platform Copilot",
    type: "Low-code AI (citizen developers)",
    keyFeatures: [
      "Build apps, flows, chatbots with natural language",
      "Data analysis and visualization in Power BI",
    ],
  },
  {
    solution: "Custom AI Solutions",
    type: "Bespoke (your data)",
    keyFeatures: [
      "Custom chatbots, document processing, workflow automation",
      "Multi-tenant management for MSPs",
    ],
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero with partner strip */}
      <Hero />

      {/* Section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent" />

      {/* Core services */}
      <Services />

      {/* Section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent" />

      {/* AI summary (anchor target for #ai-summary) */}
      <Container>
        <Section
          id="ai-summary"
          className="relative isolate rounded-[2rem] bg-gradient-to-b from-slate-800/90 via-slate-700/90 to-slate-800/90 ring-1 ring-slate-600/50 shadow-2xl backdrop-blur-sm"
          title={
            <div className="text-center">
              <span className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold tracking-wide bg-[#2A3BCF]/20 text-[#2A3BCF] border border-[#2A3BCF]/30 mb-6">
                AI SOLUTIONS
              </span>
              <span className="bg-gradient-to-r from-white via-[#2A3BCF] to-[#DD0000] bg-clip-text text-transparent">
                AI Solutions Overview
              </span>
            </div>
          }
          titleClassName="text-4xl md:text-5xl font-extrabold tracking-tight text-white"
          description="Discover our comprehensive AI solutions designed to transform your business operations and boost productivity."
        >
          <div className="overflow-x-auto rounded-2xl border border-slate-600/50 bg-white shadow-lg">
            <table className="w-full">
              <thead className="border-b border-slate-200 bg-slate-50 text-sm uppercase tracking-wide">
                <tr>
                  <th className="px-6 py-4 text-left text-slate-900 font-bold">Solution</th>
                  <th className="px-6 py-4 text-left text-slate-900 font-bold">Type</th>
                  <th className="px-6 py-4 text-left text-slate-900 font-bold">Key Features</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {aiRows.map((row, index) => (
                  <tr key={index} className="hover:bg-slate-50">
                    <td className="px-6 py-4 font-semibold text-slate-900 text-lg">{row.solution}</td>
                    <td className="px-6 py-4 text-lg text-slate-800 font-semibold">{row.type}</td>
                    <td className="px-6 py-4">
                      <ul className="space-y-1">
                        {row.keyFeatures.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-slate-700">
                            <span className="text-slate-700">{feature}</span>
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
      <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent" />

      {/* Decision Matrix */}
      <Container>
        <Section
          id="decision-matrix"
          className="relative isolate rounded-[2rem] bg-gradient-to-b from-slate-800/90 via-slate-700/90 to-slate-800/90 ring-1 ring-slate-600/50 shadow-2xl backdrop-blur-sm"
          title={
            <div className="text-center">
              <span className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold tracking-wide bg-[#2A3BCF]/20 text-[#2A3BCF] border border-[#2A3BCF]/30 mb-6">
                DECISION MATRIX
              </span>
              <span className="bg-gradient-to-r from-white via-[#2A3BCF] to-[#DD0000] bg-clip-text text-transparent">
                Which Package is Right for You?
              </span>
            </div>
          }
          titleClassName="text-4xl md:text-5xl font-extrabold tracking-tight text-white"
          description="Use our decision matrix to find the perfect IT support package for your business needs."
        >
          <DecisionMatrix />

          {/* Chatbot Help Textbox */}
          <div className="mt-8 bg-gradient-to-r from-[#2A3BCF]/20 to-[#DD0000]/20 rounded-2xl border border-[#2A3BCF]/30 p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-white mb-3">Need Help Deciding?</h3>
            <p className="text-slate-300 mb-4">
              Not sure which package is right for you? Ask our chatbot for personalized recommendations or check out our detailed pricing page.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#chatbot"
                className="inline-flex items-center justify-center rounded-xl bg-[#2A3BCF] px-6 py-3 text-white font-semibold hover:bg-[#010775] transition-colors"
              >
                Ask the Chatbot
              </a>
              <a
                href="/pricing"
                className="inline-flex items-center justify-center rounded-xl border border-white/40 text-white hover:bg-white/10 px-6 py-3 font-semibold transition-colors"
              >
                View Detailed Pricing
              </a>
            </div>
          </div>
        </Section>
      </Container>

      {/* Section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent" />

      {/* Pricing CTA Section */}
      <Container>
        <Section
          id="pricing"
          className="relative isolate rounded-[2rem] bg-gradient-to-b from-slate-800/90 via-slate-700/90 to-slate-800/90 ring-1 ring-slate-600/50 shadow-2xl backdrop-blur-sm"
          title="Ready to Get Started?"
          titleClassName="text-3xl md:text-4xl font-bold text-center text-white"
          description="Choose from our comprehensive IT support packages and start transforming your business today."
        >
          <div className="text-center">
            <a
              href="/pricing"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#2A3BCF] to-[#010775] px-8 py-4 text-white font-semibold shadow-xl shadow-blue-900/50 hover:shadow-blue-900/60 hover:scale-105 transition-all duration-200 text-lg"
            >
              View All Pricing
            </a>
          </div>
        </Section>
      </Container>

      {/* Section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent" />

      {/* Testimonials */}
      <Testimonials />

      {/* Section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent" />

      {/* FAQ */}
      <FAQ />

      {/* Section divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent" />

      {/* Stats */}
      <Stats />
    </div>
  );
};

export default HomePage;