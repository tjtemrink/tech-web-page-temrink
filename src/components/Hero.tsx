// src/components/Hero.tsx
"use client";
import React from "react";
import Image from "next/image";
import Container from "@/components/Container";
import { heroDetails } from "@/data/hero";
import { siteDetails } from "@/data/siteDetails";

const BRAND_BLUE = "#010775";

const Hero: React.FC = () => {
  // Always route “Book a meeting” to the contact page
  const contactHref = siteDetails.contactPath || "/contact";
  const secondaryHref = heroDetails.ctaSecondary?.href ?? "#process";

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Full-bleed tech gradient background */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1026] via-[#0E1530] to-[#0B1026]" />
        <div className="pointer-events-none absolute -top-40 -right-20 h-96 w-96 rounded-full bg-[#2A3BCF]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-52 -left-28 h-[28rem] w-[28rem] rounded-full bg-[#DD0000]/10 blur-3xl" />
      </div>

      {/* Constrained content */}
      <Container className="pt-20 md:pt-24 pb-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div className="text-center lg:text-left text-white">
            {/* Kicker */}
            <span
              className="inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-semibold tracking-wide bg-white/20 text-white"
            >
              {heroDetails.kicker ?? "TEMRINK FOR SMBS"}
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold md:leading-tight max-w-2xl mx-auto lg:mx-0">
              {heroDetails.heading}
            </h1>

            <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0">
              {heroDetails.subheading}
            </p>

            <div className="mt-7 flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href={contactHref}
                className="inline-flex items-center justify-center rounded-2xl bg-[#2A3BCF] px-6 py-3 text-white font-semibold shadow-lg shadow-blue-900/20 hover:opacity-95"
                aria-label="Book a meeting"
                title="Book a meeting"
              >
                {heroDetails.ctaPrimary?.label ?? "Book a meeting"}
              </a>

              <a
                href={secondaryHref}
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3 text-white font-semibold hover:bg-white/10"
              >
                {heroDetails.ctaSecondary?.label ?? "See our process"}
              </a>
            </div>
          </div>

          {/* RIGHT (nudged down a bit on large screens) */}
          <div className="relative lg:mt-4">
            <div className="aspect-[4/3] w-full rounded-3xl bg-white/90 p-3 ring-1 ring-white/30 shadow-xl">
              <Image
                src={heroDetails.centerImageSrc}
                width={1200}
                height={900}
                alt={heroDetails.centerImageAlt ?? "AI & Automation"}
                priority
                sizes="(max-width: 1024px) 100vw, 600px"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>

            {/* On-brand soft glows */}
            <div className="absolute -z-10 -top-24 -right-20 h-72 w-72 rounded-full bg-[#DD0000]/10 blur-3xl" />
            <div className="absolute -z-10 -bottom-28 -left-28 h-72 w-72 rounded-full bg-[#010775]/10 blur-3xl" />
          </div>
        </div>

      </Container>
    </section>
  );
};

export default Hero;
