import type { Metadata } from "next";
import Container from "@/components/Container";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "AI at a Glance — Copilot, Gemini & More",
  description: "Quick, skimmable table of Microsoft Copilot types and other AI licenses Sherweb provides, with use-case fit by industry.",
};

type Row = {
  solution: string;
  type: string;
  keyFeatures: string[];
  bestFit: string[];
  notes?: string;
};

const rows: Row[] = [
  {
    solution: "Microsoft 365 Copilot",
    type: "Productivity AI (suite)",
    keyFeatures: [
      "In-app help across Word, Excel, PowerPoint, Outlook, Teams",
      "Copilot Chat + Agents; summarize, draft, analyze",
    ],
    bestFit: ["All knowledge-work industries", "Professional services", "Financial services", "Healthcare", "Public sector"],
  },
  {
    solution: "Copilot for Sales",
    type: "Role-based (Sales)",
    keyFeatures: [
      "Works with Dynamics 365 or Salesforce",
      "Email/meeting prep, CRM updates, account & opp summaries",
    ],
    bestFit: ["B2B sales orgs", "SaaS", "Manufacturing", "Pro services"],
  },
  {
    solution: "Copilot for Service",
    type: "Role-based (Support / Contact center)",
    keyFeatures: [
      "Integrates with existing contact centers & knowledge",
      "Draft responses, case summaries; Outlook add-in",
    ],
    bestFit: ["Retail & e-commerce", "Telco & utilities", "SaaS support desks", "Public sector service centers"],
  },
  {
    solution: "Microsoft Security Copilot",
    type: "Security AI (SOC assistant)",
    keyFeatures: [
      "Incident triage, investigation & hunting",
      "Integrates with Microsoft Security; emerging AI agents",
    ],
    bestFit: ["MSSPs/MSPs", "Regulated industries (finance, healthcare, public sector)"],
  },
  {
    solution: "Microsoft Copilot Studio",
    type: "Builder platform (low-code agents)",
    keyFeatures: [
      "Build role/line-of-business agents & plugins",
      "Connect to data via connectors; govern centrally",
    ],
    bestFit: ["Any org needing custom agents", "Ops/IT automation", "Regulated orgs that need grounded bots"],
  },
  {
    solution: "Microsoft Copilot in Azure",
    type: "Cloud ops assistant",
    keyFeatures: [
      "Understand Azure environment & resources",
      "Query, get recommendations, manage at scale",
    ],
    bestFit: ["Any Azure-running orgs", "MSPs delivering Azure managed services"],
  },
  {
    solution: "Microsoft 365 Copilot for Finance (Finance agents)",
    type: "Role-based (Finance)",
    keyFeatures: [
      "Excel reconciliation & variance checks",
      "Outlook AR workflows; connects to ERP (D365, SAP, others)",
    ],
    bestFit: ["Corporate finance teams", "Public sector finance", "Mid-market & enterprise"],
    notes: "Currently rolling out as 'Finance agents' branding.",
  },
  {
    solution: "Google Workspace with Gemini (via Sherweb)",
    type: "Productivity AI (Workspace)",
    keyFeatures: [
      "AI in Docs, Sheets, Gmail side-panel",
      "Custom 'Gems' assistants accessible in Workspace",
    ],
    bestFit: ["Google-leaning orgs", "Marketing & sales content teams", "Ops teams using Sheets"],
  },
  {
    solution: "SentinelOne Purple AI (via Sherweb)",
    type: "Security AI",
    keyFeatures: [
      "Generative AI security analyst",
      "Natural-language threat hunting & investigation",
    ],
    bestFit: ["MSSPs/MSPs", "Security-mature SMBs/SMEs", "Regulated industries"],
  },
  {
    solution: "IRONSCALES (via Sherweb)",
    type: "AI email security",
    keyFeatures: [
      "AI-powered phishing detection & automated response",
      "Multi-tenant management for MSPs",
    ],
    bestFit: ["Any org targeted by phishing", "Heavily email-centric teams"],
  },
];

export default function AIPage() {
  return (
    <>
      <Header />
      <section className="pt-28 md:pt-40 pb-20">
      <Container>
        <div className="text-center mb-12">
          <span className="inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-semibold tracking-wide bg-[#010775]/10 text-[#010775] mb-4">
            AI SOLUTIONS
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#010775] via-[#2A3BCF] to-[#DD0000] bg-clip-text text-transparent">
            AI Solutions at a Glance
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-4xl mx-auto">
            Comprehensive overview of Microsoft Copilot types and AI solutions we implement. Find the perfect AI solution for your industry and use case.
          </p>
        </div>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
          <table className="min-w-[1000px] w-full text-left">
            <thead className="border-b border-slate-200 bg-gradient-to-r from-[#010775]/5 to-[#2A3BCF]/5">
              <tr>
                <th className="p-6 text-sm font-bold text-[#010775] uppercase tracking-wide">Solution</th>
                <th className="p-6 text-sm font-bold text-[#010775] uppercase tracking-wide">Type</th>
                <th className="p-6 text-sm font-bold text-[#010775] uppercase tracking-wide">Key Features</th>
                <th className="p-6 text-sm font-bold text-[#010775] uppercase tracking-wide">Best-Fit Industries</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, index) => (
                <tr key={r.solution} className={`border-b border-slate-100 last:border-0 align-top hover:bg-slate-50/50 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'}`}>
                  <td className="p-6">
                    <div className="font-semibold text-slate-900 text-base leading-tight">{r.solution}</div>
                    {r.notes && (
                      <div className="mt-2 text-sm text-slate-600 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                        <span className="font-medium text-amber-800">Note:</span> {r.notes}
                      </div>
                    )}
                  </td>
                  <td className="p-6">
                    <span className="inline-flex items-center rounded-full px-3 py-1 text-sm font-medium bg-[#010775]/10 text-[#010775] border border-[#010775]/20">
                      {r.type}
                    </span>
                  </td>
                  <td className="p-6">
                    <ul className="space-y-2">
                      {r.keyFeatures.map((k, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#010775] flex-shrink-0"></span>
                          <span className="leading-relaxed">{k}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="p-6">
                    <div className="flex flex-wrap gap-1.5">
                      {r.bestFit.map((b, idx) => (
                        <span key={idx} className="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                          {b}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Sources: Microsoft Learn, Microsoft product pages, Google Workspace & Sherweb marketplace announcements.
        </p>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#010775]/5 to-[#2A3BCF]/5 rounded-2xl p-8 border border-[#010775]/10">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Ready to Implement AI in Your Organization?</h2>
            <p className="text-slate-600 mb-6 max-w-2xl mx-auto">
              Let us help you choose the right AI solutions and implement them successfully. Our experts can assess your needs and create a customized AI strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-[#010775] px-8 py-4 text-white font-semibold shadow-lg hover:bg-[#2A3BCF] transition-all duration-200 hover:scale-105"
              >
                Book AI Consultation
              </a>
              <a
                href="mailto:consulting@temrink.com"
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-8 py-4 text-slate-700 font-semibold hover:bg-slate-50 transition-all duration-200"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
    </>
  );
}
