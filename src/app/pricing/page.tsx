import Container from "@/components/Container";
import Pricing from "@/components/Pricing/Pricing";
import ComprehensivePricing from "@/components/ComprehensivePricing";
import Section from "@/components/Section";
import Header from "@/components/Header";

export const metadata = {
  title: "IT Support & AI Solutions Pricing — Temrink",
  description: "Complete IT Solutions & Pricing - Choose from our comprehensive range of IT support packages, device leasing options, and add-on services. Transparent pricing for all business sizes.",
  keywords: "IT support pricing, AI solutions cost, managed services pricing, Microsoft 365 licensing, device as a service pricing",
  openGraph: {
    title: "IT Support & AI Solutions Pricing — Temrink",
    description: "Complete IT Solutions & Pricing - Choose from our comprehensive range of IT support packages, device leasing options, and add-on services.",
    type: "website",
  },
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="pt-28 md:pt-40 pb-16">
          <Container>
            <div className="text-center mb-16">
              <span className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold tracking-wide bg-[#2A3BCF]/20 text-[#2A3BCF] border border-[#2A3BCF]/30 mb-6">
                COMPREHENSIVE PRICING
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                <span className="bg-gradient-to-r from-white via-[#2A3BCF] to-[#DD0000] bg-clip-text text-transparent">
                  Complete IT Solutions & Pricing
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
                Transparent pricing for all your IT needs. From basic support to fully managed services, 
                device leasing, and AI solutions - find the perfect plan for your business.
              </p>
              
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#2A3BCF] to-[#010775] px-8 py-4 text-white font-semibold shadow-xl shadow-blue-900/50 hover:shadow-blue-900/60 hover:scale-105 transition-all duration-200 text-lg"
                >
                  Book a Meeting
                </a>
                <a
                  href="mailto:consulting@temrink.com"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/40 bg-white/10 px-8 py-4 text-white font-semibold backdrop-blur-sm hover:bg-white/20 transition-all duration-200 text-lg"
                >
                  consulting@temrink.com
                </a>
              </div>
            </div>
          </Container>
        </section>

        {/* Comprehensive Pricing */}
        <Section className="py-20">
          <Container>
            <ComprehensivePricing />
          </Container>
        </Section>

        {/* Microsoft 365 Licensing Section */}
        <Section className="py-20">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-[#2A3BCF] to-[#DD0000] bg-clip-text text-transparent">
                  Microsoft 365 Licensing
                </span>
              </h2>
              <p className="text-lg text-slate-300 max-w-3xl mx-auto">
                Choose a plan and add Copilot and automations when you're ready. We can also quote per-user management.
              </p>
            </div>
            <Pricing />
          </Container>
        </Section>

        {/* Fine Print */}
        <Container>
          <div className="py-12 border-t border-slate-600/50">
            <p className="text-sm text-slate-400 max-w-4xl mx-auto text-center leading-relaxed">
              *Annual pricing shown; billed monthly and subject to a 12-month commitment. Prices exclude applicable taxes. 
              Feature descriptions are summarized for clarity—Temrink can provision licenses, configure security, and provide 
              training and support. Microsoft 365 Copilot requires an eligible base license (e.g., Business Standard or Business Premium).
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}
