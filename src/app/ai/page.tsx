import type { Metadata } from "next";
import Container from "@/components/Container";

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
    <section className="pt-28 md:pt-40 pb-20">
      <Container>
        <h1 className="text-3xl md:text-4xl font-bold">AI at a glance</h1>
        <p className="mt-3 text-muted-foreground max-w-3xl">
          Skimmable overview of major Copilot types and other AI licenses available via Sherweb, plus where each fits best.
        </p>

        <div className="mt-8 overflow-x-auto rounded-2xl border bg-background">
          <table className="min-w-[900px] w-full text-left text-sm">
            <thead className="border-b bg-muted/50 text-xs uppercase tracking-wide">
              <tr>
                <th className="p-4">Solution</th>
                <th className="p-4">Type</th>
                <th className="p-4">Key features</th>
                <th className="p-4">Best-fit industries</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.solution} className="border-b last:border-0 align-top">
                  <td className="p-4 font-medium">{r.solution}{r.notes ? <span className="block text-xs text-muted-foreground mt-1">{r.notes}</span> : null}</td>
                  <td className="p-4">{r.type}</td>
                  <td className="p-4">
                    <ul className="list-disc pl-5 space-y-1">
                      {r.keyFeatures.map((k) => <li key={k}>{k}</li>)}
                    </ul>
                  </td>
                  <td className="p-4">
                    <ul className="list-disc pl-5 space-y-1">
                      {r.bestFit.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Sources: Microsoft Learn, Microsoft product pages, Google Workspace & Sherweb marketplace announcements.
        </p>
      </Container>
    </section>
  );
}
