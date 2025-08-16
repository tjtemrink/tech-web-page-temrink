// src/components/FAQ.tsx
"use client";

import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";
import SectionTitle from "./SectionTitle";
import { faqs } from "@/data/faq";
import type { IFAQ } from "@/types";

const BRAND_BLUE = "#010775";
const BRAND_RED = "#DD0000";

const FAQ: React.FC = () => {
  // Strongly-typed CSS variables (no `any`)
  const brandVars =
    {
      "--brand-blue": BRAND_BLUE,
      "--brand-red": BRAND_RED,
    } as React.CSSProperties & Record<"--brand-blue" | "--brand-red", string>;

  return (
    <section id="faq" className="py-10 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 flex flex-col lg:flex-row gap-10">
        {/* Left column */}
        <div>
          <p className="hidden lg:block text-sm font-semibold uppercase tracking-wide text-slate-500">
            FAQs
          </p>

          <SectionTitle>
            <h2 className="my-3 !leading-snug lg:max-w-sm text-center lg:text-left">
              Frequently Asked Questions
            </h2>
          </SectionTitle>

          <p className="lg:mt-10 text-slate-600 text-center lg:text-left">Ask us anything!</p>
          <a
            href="mailto:consulting@temrink.com"
            className="mt-3 block text-xl lg:text-3xl font-semibold text-[color:var(--brand-blue)] hover:text-[color:var(--brand-red)] underline decoration-2 underline-offset-4 text-center lg:text-left"
            style={brandVars}
          >
            consulting@temrink.com
          </a>
        </div>

        {/* Right column */}
        <div className="w-full lg:max-w-2xl mx-auto border-b border-slate-200">
          {faqs.map((faq: IFAQ, index: number) => (
            <div key={index} className="mb-7">
              <Disclosure>
                {({ open }: { open: boolean }) => (
                  <>
                    <DisclosureButton className="flex items-center justify-between w-full px-4 pt-7 text-left border-t border-slate-200">
                      <span className="text-xl lg:text-2xl font-semibold text-slate-900">
                        {faq.question}
                      </span>
                      {open ? (
                        <BiMinus className="w-5 h-5" style={{ color: BRAND_RED }} />
                      ) : (
                        <BiPlus className="w-5 h-5" style={{ color: BRAND_BLUE }} />
                      )}
                    </DisclosureButton>

                    <DisclosurePanel className="px-4 pt-4 pb-2 text-slate-600">
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
