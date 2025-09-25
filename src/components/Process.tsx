// src/components/Process.tsx
"use client";
import React, { useState } from "react";
import Image from "next/image";
import Container from "./Container";
import { siteDetails } from "@/data/siteDetails";

const steps = [
  { title: "Discovery call", desc: "Understand your stack, pain points, security posture, and goals." },
  { title: "Licensing & baseline", desc: "Right-size M365/Google licenses, MFA/SSPR, device standards and backups." },
  { title: "Copilot rollout & training", desc: "Tenant readiness, governance, pilot users, playbooks, enablement." },
  { title: "Automations", desc: "Power Automate / Logic Apps and integrations to remove repetitive work." },
  { title: "Agentic AI", desc: "Custom copilots/agents grounded in your data to run multi-step workflows." },
  { title: "Ongoing support", desc: "Helpdesk, device mgmt, monitoring, and monthly optimization reviews." },
];

function ArrowBadge() {
  return (
    <span
      className="absolute -left-2 -top-3 flex h-8 w-8 items-center justify-center rounded-full
                 bg-[#010775] text-white shadow ring-2 ring-background"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2"
           strokeLinecap="round" strokeLinejoin="round">
        <path d="M6 9l6 6 6-6" />
      </svg>
    </span>
  );
}

export default function Process() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  
  // Always route CTAs to the contact page
  const contactHref = siteDetails.contactPath || "/contact";

  return (
    <section id="process" className="relative scroll-mt-28 md:scroll-mt-40 overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#F1F5FF] via-white to-[#F8FAFF]" />
      <Container>
        <div className="grid items-start gap-10 py-12 md:py-16 lg:grid-cols-[1.1fr,1fr]">
          {/* Timeline */}
          <div className="order-2 lg:order-1">
            <header className="mb-6 md:mb-8">
              <span className="inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-semibold tracking-wide bg-[#010775]/10 text-[#010775]">
                IMPLEMENTATION PROCESS
              </span>
              <h2 className="mt-4 text-2xl md:text-3xl font-bold text-foreground">How we implement AI</h2>
              <p className="mt-2 text-slate-300 font-medium max-w-2xl leading-relaxed">
                A simple, low-risk path from discovery to AI-powered operations.
              </p>
            </header>

            <div className="relative mt-8 pl-8">
              {/* vertical spine */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-border" aria-hidden />
              <ol className="space-y-4 md:space-y-5">
                {steps.map((s, index) => (
                  <li key={s.title} className="relative">
                    <ArrowBadge />
                    <div className="rounded-2xl bg-background ring-1 ring-border shadow-sm overflow-hidden">
                      <button
                        onClick={() => setExpandedStep(expandedStep === index ? null : index)}
                        className="w-full text-left p-4 md:p-5 hover:bg-slate-50 transition-colors group"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-base md:text-lg font-semibold text-foreground group-hover:text-[#010775] transition-colors">
                              {s.title}
                            </h3>
                            <p className="mt-1 text-sm md:text-[15px] leading-relaxed text-slate-300 font-medium">
                              {s.desc}
                            </p>
                          </div>
                          <div className="ml-4 flex-shrink-0">
                            <svg
                              className={`w-5 h-5 text-slate-400 transition-transform duration-200 ${
                                expandedStep === index ? 'rotate-180' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </div>
                        </div>
                      </button>
                      
                      {/* Expanded content */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out ${
                          expandedStep === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="px-4 md:px-5 pb-4 md:pb-5">
                          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                            <div className="space-y-3">
                              {index === 0 && (
                                <>
                                  <h4 className="font-semibold text-slate-900">What we'll cover:</h4>
                                  <ul className="space-y-2 text-sm text-slate-700">
                                    <li>• Current IT infrastructure assessment</li>
                                    <li>• Security posture evaluation</li>
                                    <li>• User workflow analysis</li>
                                    <li>• Compliance requirements review</li>
                                  </ul>
                                </>
                              )}
                              {index === 1 && (
                                <>
                                  <h4 className="font-semibold text-slate-900">Implementation includes:</h4>
                                  <ul className="space-y-2 text-sm text-slate-700">
                                    <li>• License optimization and right-sizing</li>
                                    <li>• Multi-factor authentication setup</li>
                                    <li>• Device compliance policies</li>
                                    <li>• Backup and recovery configuration</li>
                                  </ul>
                                </>
                              )}
                              {index === 2 && (
                                <>
                                  <h4 className="font-semibold text-slate-900">Training program:</h4>
                                  <ul className="space-y-2 text-sm text-slate-700">
                                    <li>• Pilot user selection and onboarding</li>
                                    <li>• Custom playbooks and best practices</li>
                                    <li>• Hands-on training sessions</li>
                                    <li>• Ongoing support and optimization</li>
                                  </ul>
                                </>
                              )}
                              {index === 3 && (
                                <>
                                  <h4 className="font-semibold text-slate-900">Automation focus:</h4>
                                  <ul className="space-y-2 text-sm text-slate-700">
                                    <li>• Workflow analysis and mapping</li>
                                    <li>• Power Automate flow creation</li>
                                    <li>• Integration with existing systems</li>
                                    <li>• Performance monitoring and optimization</li>
                                  </ul>
                                </>
                              )}
                              {index === 4 && (
                                <>
                                  <h4 className="font-semibold text-slate-900">AI capabilities:</h4>
                                  <ul className="space-y-2 text-sm text-slate-700">
                                    <li>• Custom AI agent development</li>
                                    <li>• Data grounding and security</li>
                                    <li>• Multi-step workflow automation</li>
                                    <li>• Continuous learning and improvement</li>
                                  </ul>
                                </>
                              )}
                              {index === 5 && (
                                <>
                                  <h4 className="font-semibold text-slate-900">Ongoing support:</h4>
                                  <ul className="space-y-2 text-sm text-slate-700">
                                    <li>• 24/7 helpdesk and monitoring</li>
                                    <li>• Monthly optimization reviews</li>
                                    <li>• Security updates and patches</li>
                                    <li>• Performance reporting and analytics</li>
                                  </ul>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={contactHref}
                  className="inline-flex items-center justify-center rounded-2xl bg-[#010775] px-5 py-2.5 text-white font-semibold shadow-lg hover:opacity-95"
                  aria-label="Book a meeting"
                  title="Book a meeting"
                >
                  Book a meeting
                </a>
                <a
                  href={contactHref}
                  className="inline-flex items-center justify-center rounded-2xl border border-border px-5 py-2.5 text-foreground font-semibold hover:bg-muted"
                >
                  Talk to an expert
                </a>
              </div>
            </div>
          </div>

          {/* Images column (right) */}
          <div className="order-1 lg:order-2">
            <div className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-auto space-y-6 pr-2">
              {/* First image */}
              <div className="rounded-3xl bg-background p-3 ring-1 ring-border shadow-xl">
                <Image
                  src="/images/timeline.webp"
                  width={1200}
                  height={900}
                  alt="Temrink implementation timeline"
                  priority
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="h-auto w-full rounded-2xl object-cover"
                />
              </div>

              {/* Second image */}
              <div className="rounded-3xl bg-background p-3 ring-1 ring-border shadow-xl">
                <Image
                  src="/images/implementation.webp"
                  width={1200}
                  height={900}
                  alt="Implementation workflow illustration"
                  loading="lazy"
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="h-auto w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* soft brand glow */}
      <div className="pointer-events-none absolute -z-10 -bottom-24 -right-16 h-72 w-72 rounded-full bg-[#010775]/5 blur-3xl" />
    </section>
  );
}
