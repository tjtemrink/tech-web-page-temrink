// src/components/Hero.tsx
"use client";
import React from "react";
import Image from "next/image";
import Container from "@/components/Container";
import { heroDetails } from "@/data/hero";

const BRAND_BLUE = "#010775";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Full-bleed soft background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white to-slate-50" />

      {/* Constrained content */}
      <Container className="pt-20 md:pt-24 pb-10">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* LEFT */}
          <div className="text-center lg:text-left">
            {/* Kicker */}
            <span
              className="inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-semibold tracking-wide"
              style={{
                backgroundColor: `${BRAND_BLUE}1A`, // ~10% alpha
                color: BRAND_BLUE,
              }}
            >
              {heroDetails.kicker ?? "TEMRINK FOR SMBS"}
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold text-slate-900 md:leading-tight max-w-2xl mx-auto lg:mx-0">
              {heroDetails.heading}
            </h1>

            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0">
              {heroDetails.subheading}
            </p>

            <div className="mt-7 flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href={heroDetails.ctaPrimary?.href ?? "#contact"}
                className="inline-flex items-center justify-center rounded-2xl bg-[#010775] px-6 py-3 text-white font-semibold shadow-lg shadow-blue-200 hover:opacity-95"
              >
                {heroDetails.ctaPrimary?.label ?? "Book a meeting"}
              </a>
              <a
                href={heroDetails.ctaSecondary?.href ?? "#process"}
                className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-3 text-slate-800 font-semibold hover:bg-slate-100"
              >
                {heroDetails.ctaSecondary?.label ?? "See our process"}
              </a>
            </div>
          </div>

          {/* RIGHT (nudged down a bit on large screens) */}
          <div className="relative lg:mt-4">
            <div className="aspect-[4/3] w-full rounded-3xl bg-white/70 p-3 ring-1 ring-slate-200 shadow-xl">
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

        {/* Partner logos */}
        <div className="mt-10 border-t border-slate-200 pt-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 text-center lg:text-left">
            Trusted by partners
          </p>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 items-center gap-10">
            {heroDetails.partners?.map((p) => (
              <Image
                key={p.name}
                src={p.src}
                alt={p.name}
                width={p.width ?? 240}
                height={p.height ?? 72}
                className="mx-auto h-12 md:h-16 w-auto object-contain"
                sizes="(max-width: 640px) 40vw, 240px"
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
