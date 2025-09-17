import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import { siteDetails } from "@/data/siteDetails";

export const metadata: Metadata = {
  title: "Contact Temrink - Book a Discovery Call",
  description:
    "Book a discovery call with Temrink to assess your IT environment, optimize licensing, and plan your AI automation rollout. Get expert guidance on Microsoft 365, security, and productivity solutions.",
};

const DEFAULT_EMAIL = "consulting@temrink.com";
const DEFAULT_PHONE = "+1 289-327-2015";

export default function ContactPage() {
  const email =
    typeof siteDetails.contactEmail === "string" &&
    siteDetails.contactEmail.includes("@")
      ? siteDetails.contactEmail
      : DEFAULT_EMAIL;

  const phone = DEFAULT_PHONE;

  return (
    <section className="pt-28 md:pt-40 pb-20">
      <Container>
        <div className="text-center mb-12">
          <span className="inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-semibold tracking-wide bg-[#010775]/10 text-[#010775] mb-4">
            GET STARTED
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-[#010775] via-[#2A3BCF] to-[#DD0000] bg-clip-text text-transparent">
            Book a Discovery Call
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Let's assess your IT environment, optimize licensing costs, and plan your AI automation rollout. Get expert guidance tailored to your business needs.
          </p>
        </div>

        {/* Quick actions */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Book a call (scrolls to form below) */}
          <div className="rounded-2xl border border-[#010775]/20 p-8 bg-gradient-to-br from-[#010775]/5 to-white ring-1 ring-[#010775]/10">
            <h2 className="text-2xl font-bold text-[#010775] mb-3">Schedule Discovery Call</h2>
            <p className="text-muted-foreground mb-6">
              We'll assess your licensing, security baseline, and identify top automation opportunities for your business.
            </p>
            <a
              href="#form"
              className="inline-flex items-center justify-center rounded-2xl bg-[#010775] px-8 py-4 text-white font-semibold shadow-lg hover:bg-[#2A3BCF] transition-all duration-200 hover:scale-105"
            >
              Book Discovery Call
            </a>
          </div>

          {/* Email / Phone */}
          <div className="rounded-2xl border border-slate-200 p-8 bg-white shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Direct Contact</h2>
            <p className="text-muted-foreground mb-6">
              Prefer email or phone? We'll reply within one business day with personalized recommendations.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${email}`}
                className="flex items-center gap-3 rounded-xl border border-slate-200 px-6 py-4 hover:bg-slate-50 hover:border-[#010775]/30 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#010775]/10 flex items-center justify-center group-hover:bg-[#010775]/20 transition-colors">
                  <svg className="w-5 h-5 text-[#010775]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{email}</div>
                  <div className="text-sm text-slate-600">Email us directly</div>
                </div>
              </a>

              <a
                href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                className="flex items-center gap-3 rounded-xl border border-slate-200 px-6 py-4 hover:bg-slate-50 hover:border-[#010775]/30 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#010775]/10 flex items-center justify-center group-hover:bg-[#010775]/20 transition-colors">
                  <svg className="w-5 h-5 text-[#010775]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{phone}</div>
                  <div className="text-sm text-slate-600">Call us directly</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div id="form" className="mt-16 rounded-2xl border border-[#010775]/20 p-8 bg-gradient-to-br from-white to-[#F8FAFF] ring-1 ring-[#010775]/10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#010775] mb-3">Send Us a Message</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you within one business day with personalized recommendations for your IT needs.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
