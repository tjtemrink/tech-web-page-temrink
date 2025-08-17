import type { Metadata } from "next";
import Container from "@/components/Container";
import ContactForm from "@/components/ContactForm";
import { siteDetails } from "@/data/siteDetails";

export const metadata: Metadata = {
  title: "Contact — Temrink",
  description:
    "Book a discovery call or email Temrink for support, pricing, and rollout questions.",
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
        <h1 className="text-3xl md:text-4xl font-bold">Contact Temrink</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">
          Book a discovery call to review your environment and plan your Copilot + automation rollout.
        </p>

        {/* Quick actions */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {/* Book a call (scrolls to form below) */}
          <div className="rounded-2xl border p-6 bg-background">
            <h2 className="text-xl font-semibold">Book a discovery call</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We’ll assess licensing, security baseline, and top automation opportunities.
            </p>
            <a
              href="#form"
              className="mt-4 inline-block rounded-full bg-primary px-6 py-3 text-black hover:bg-primary-accent"
            >
              Book now
            </a>
          </div>

          {/* Email / Phone */}
          <div className="rounded-2xl border p-6 bg-background">
            <h2 className="text-xl font-semibold">Email or call us</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Prefer email or phone? We’ll reply within one business day.
            </p>

            <div className="mt-4 flex flex-col gap-3">
              <a
                href={`mailto:${email}`}
                className="inline-block rounded-full border px-6 py-3 hover:bg-muted"
              >
                {email}
              </a>

              <a
                href={`tel:${phone.replace(/[^+\d]/g, "")}`}
                className="inline-block rounded-full border px-6 py-3 hover:bg-muted"
              >
                {phone}
              </a>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div id="form" className="mt-10 rounded-2xl border p-6 bg-background">
          <h2 className="text-xl font-semibold">Send us a message</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Fill out the form and we’ll get back to you shortly.
          </p>
          <div className="mt-4">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
