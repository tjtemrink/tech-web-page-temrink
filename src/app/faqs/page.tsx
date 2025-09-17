import Container from "@/components/Container";
import Header from "@/components/Header";

const faqs = [
  {
    q: "What does Temrink actually do?",
    a: "We manage Microsoft 365 or Google Workspace licensing, run your IT helpdesk and device management, and roll out Copilot plus automations to speed up daily work."
  },
  {
    q: "How long does Copilot rollout take?",
    a: "Most SMBs start with a 2–4 week pilot: tenant readiness, data hygiene checks, pilot users, and training. Full rollout depends on size and governance needs."
  },
  {
    q: "Do you charge for Microsoft or Google licenses?",
    a: "License costs are separate. We can transfer and right-size your licenses to reduce waste and consolidate billing."
  },
  {
    q: "What are automations and 'agentic AI'?",
    a: "Automations remove repetitive work (Power Automate/Logic Apps). Agentic AI are task-oriented copilots grounded in your data that complete multi-step workflows."
  },
  {
    q: "What support is included?",
    a: "Email helpdesk, device onboarding standards, patching policies, and monthly optimization reviews. Higher tiers add priority SLAs."
  }
];

export const metadata = {
  title: "FAQs — Temrink",
  description: "Common questions about Temrink’s services, Copilot rollout, and pricing."
};

export default function FAQsPage() {
  return (
    <>
      <Header />
      <section className="pt-28 md:pt-40 pb-16">
      <Container>
        <h1 className="text-3xl md:text-4xl font-bold">FAQs</h1>
        <div className="mt-8 divide-y">
          {faqs.map((f) => (
            <div key={f.q} className="py-6">
              <h2 className="text-lg font-semibold">{f.q}</h2>
              <p className="mt-2 text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
    </>
  );
}
