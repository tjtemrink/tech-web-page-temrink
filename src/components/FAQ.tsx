// src/components/FAQ.tsx
"use client";

import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";
import SectionTitle from "./SectionTitle";
import type { IFAQ } from "@/types";

const BRAND_BLUE = "#010775";
const BRAND_RED = "#DD0000";

const FAQ: React.FC = () => {
  // Temrink-specific FAQs (previous data file removed)
  const faqs: IFAQ[] = [
    {
      question: "What does Temrink actually do?",
      answer:
        "We manage Microsoft 365 or Google Workspace licensing, run your IT helpdesk and device management, and roll out Copilot plus automations to speed up daily work.",
    },
    {
      question: "How long does Copilot rollout take?",
      answer:
        "Most SMBs start with a 2–4 week pilot: tenant readiness, data hygiene checks, pilot users, and training. Full rollout depends on size and governance needs.",
    },
    {
      question: "Do you charge for Microsoft or Google licenses?",
      answer:
        "License costs are separate. We can transfer and right-size your licenses to reduce waste and consolidate billing.",
    },
    {
      question: "What are automations and 'agentic AI'?",
      answer:
        "Automations remove repetitive work (Power Automate/Logic Apps). Agentic AI are task‑oriented copilots grounded in your data that complete multi‑step workflows.",
    },
    {
      question: "What support is included?",
      answer:
        "Email helpdesk, device onboarding standards, patching policies, and monthly optimization reviews. Higher tiers add priority SLAs.",
    },
  ];
  // Strongly-typed CSS variables (no `any`)
  const brandVars =
    {
      "--brand-blue": BRAND_BLUE,
      "--brand-red": BRAND_RED,
    } as React.CSSProperties & Record<"--brand-blue" | "--brand-red", string>;

  return (
    <section id="faq" className="py-20 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-800/50 via-slate-700/50 to-slate-800/50" />
      <div className="mx-auto max-w-7xl px-6 flex flex-col lg:flex-row gap-10">
        {/* Left column */}
        <div>
          <p className="hidden lg:block text-sm font-semibold uppercase tracking-wide text-slate-400">
            FAQs
          </p>

          <SectionTitle>
            <h2 className="my-3 !leading-snug lg:max-w-sm text-center lg:text-left text-white">
              Frequently Asked Questions
            </h2>
          </SectionTitle>

          <p className="lg:mt-10 text-slate-300 text-center lg:text-left font-medium">Ask us anything!</p>
          <a
            href="mailto:consulting@temrink.com"
            className="mt-3 block text-xl lg:text-3xl font-semibold text-[#2A3BCF] hover:text-[#DD0000] underline decoration-2 underline-offset-4 text-center lg:text-left transition-colors"
          >
            consulting@temrink.com
          </a>
        </div>

        {/* Right column */}
        <div className="w-full lg:max-w-2xl mx-auto border-b border-slate-600">
          {faqs.map((faq: IFAQ, index: number) => (
            <div key={index} className="mb-7">
              <Disclosure>
                {({ open }: { open: boolean }) => (
                  <>
                    <DisclosureButton className="flex items-center justify-between w-full px-4 pt-7 text-left border-t border-slate-600">
                      <span className="text-xl lg:text-2xl font-semibold text-white">
                        {faq.question}
                      </span>
                      {open ? (
                        <BiMinus className="w-5 h-5 text-[#DD0000]" />
                      ) : (
                        <BiPlus className="w-5 h-5 text-[#2A3BCF]" />
                      )}
                    </DisclosureButton>

                    <DisclosurePanel className="px-4 pt-4 pb-2 text-slate-300 font-medium leading-relaxed">
                      {faq.answer}
                    </DisclosurePanel>
                  </>
                )}
              </Disclosure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;