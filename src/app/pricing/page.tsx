import Container from "@/components/Container";
import Pricing from "@/components/Pricing/Pricing";
import Header from "@/components/Header";

export const metadata = {
  title: "Pricing — Temrink",
  description:
    "Simple, transparent pricing for Microsoft 365 Business plans. Add Copilot and automations when you’re ready.",
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <section className="pt-28 md:pt-40 pb-16">
      <Container>
        <header>
          <h1 className="text-3xl md:text-4xl font-bold">Pricing</h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Choose a plan and add Copilot and automations when you’re ready. We can also quote
            per-user management.
          </p>

          {/* CAD / annual badge + licensing note */}
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
            <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 font-semibold text-[#010775] ring-1 ring-blue-100">
              CAD per user / month <sup>*</sup> annual pricing
            </span>
            <span className="text-muted-foreground">
              License charges billed by Microsoft; taxes extra.
            </span>
          </div>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-[#010775] px-5 py-3 text-white font-semibold shadow-lg hover:opacity-95"
            >
              Book a meeting
            </a>
            <a
              href="mailto:consulting@temrink.com"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-5 py-3 text-slate-800 font-semibold hover:bg-slate-50"
            >
              consulting@temrink.com
            </a>
          </div>
        </header>
      </Container>

      <div className="mt-8">
        <Pricing />
      </div>

      {/* fine print */}
      <Container>
        <p className="mt-6 text-xs text-muted-foreground max-w-3xl">
          *Annual pricing shown; billed monthly and subject to a 12-month commitment. Prices
          exclude applicable taxes. Feature descriptions are summarized for clarity—Temrink can
          provision licenses, configure security, and provide training and support. Microsoft 365
          Copilot requires an eligible base license (e.g., Business Standard or Business Premium).
        </p>
      </Container>
    </section>
    </>
  );
}
