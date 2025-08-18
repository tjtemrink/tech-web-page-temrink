import React from "react";
import Link from "next/link";                       // ⬅ add
import PricingColumn from "./PricingColumn";
import { tiers } from "@/data/pricing";
import { siteDetails } from "@/data/siteDetails";   // ⬅ add

// tiny check icon for the add-on list
const Check = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M16.704 5.29a1 1 0 010 1.415l-7.2 7.2a1 1 0 01-1.415 0L3.296 9.11a1 1 0 111.415-1.415l3.05 3.05 6.492-6.492a1 1 0 011.451.037z" />
  </svg>
);

const Pricing: React.FC = () => {
  // Prefer the tier with badge "Most popular"; fallback to the 2nd card.
  const popularIdx = tiers.findIndex(
    (t) => typeof t.badge === "string" && t.badge.toLowerCase().includes("popular")
  );
  const highlightIndex = popularIdx >= 0 ? popularIdx : 1;

  // Single source of truth for contact URL
  const contactHref = siteDetails.contactPath || "/contact";

  return (
    <div className="mx-auto max-w-7xl w-full">
      {/* Plan grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
        {tiers.map((tier, index) => (
          <PricingColumn
            key={tier.name}
            tier={tier}
            highlight={index === highlightIndex}
          />
        ))}
      </div>

      {/* Copilot add-on band */}
      <div className="mt-8 md:mt-10 rounded-3xl ring-1 ring-border bg-background p-6 md:p-7 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Add-on
            </div>
            <h4 className="mt-1 text-xl font-bold text-foreground">
              Microsoft 365 Copilot — turbocharge everyday work
            </h4>
            <p className="mt-1 text-sm text-muted-foreground">
              CAD <span className="font-semibold">$40.70</span> per user / month
              (annual subscription, auto-renews) • plus tax
            </p>
          </div>

          {/* CTA -> Contact page */}
          <Link
            href={contactHref}
            className="inline-flex items-center justify-center rounded-2xl bg-[#010775] px-5 py-3 text-white font-semibold shadow-lg hover:opacity-95"
          >
            Add Copilot
          </Link>
        </div>

        <ul className="mt-5 grid gap-3 md:grid-cols-2 text-sm">
          <li className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 text-[#010775]" />
            <span>Works across Word, Excel, PowerPoint, Outlook, and Teams</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 text-[#010775]" />
            <span>Draft, summarize, analyze, and transform content with natural-language prompts</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 text-[#010775]" />
            <span>Answers grounded in your Microsoft 365 data (files, email, chats, meetings)</span>
          </li>
          <li className="flex items-start gap-2">
            <Check className="mt-0.5 h-4 w-4 text-[#010775]" />
            <span>Enterprise-grade security, privacy, and compliance controls</span>
          </li>
        </ul>

        <p className="mt-4 text-xs text-muted-foreground">
          *Copilot requires an eligible base license (e.g., Business Standard or Business Premium).
          Temrink can provision licenses, configure security, and train your team.
        </p>
      </div>
    </div>
  );
};

export default Pricing;
