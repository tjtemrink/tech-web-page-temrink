// src/components/Footer.tsx
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { siteDetails } from "@/data/siteDetails";
import { footerDetails } from "@/data/footer";
import { getPlatformIconByName } from "@/utils";

const BRAND_BLUE = "#010775";
const BRAND_RED = "#DD0000";
const DEFAULT_EMAIL = "consulting@temrink.com";

// Guard against placeholder emails from seed data
function resolveEmail(e?: string) {
  if (!e) return DEFAULT_EMAIL;
  const looksPlaceholder = /yoursite|example\.com|finwise/i.test(e);
  return looksPlaceholder ? DEFAULT_EMAIL : e;
}

// Sanitize tel href
function telHref(raw?: string) {
  if (!raw) return undefined;
  const cleaned = raw.replace(/[^\d+]/g, "");
  return `tel:${cleaned}`;
}

const EMAIL = resolveEmail(footerDetails.email);
const PHONE = footerDetails.telephone || process.env.NEXT_PUBLIC_TEMRINK_PHONE || "";

const Footer: React.FC = () => {
  // Strongly typed CSS variables (no `any`)
  const brandVars =
    {
      "--brand-blue": BRAND_BLUE,
      "--brand-red": BRAND_RED,
    } as React.CSSProperties & Record<"--brand-blue" | "--brand-red", string>;

  return (
    <footer className="bg-hero-background text-foreground pt-10 pb-6">
      <div className="mx-auto w-full max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand + tagline */}
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/temrink-logo.png" // ensure this exists (SVG preferred)
              alt="Temrink"
              width={160}
              height={40}
              className="h-8 w-auto object-contain"
              priority={false}
            />
            <span className="manrope text-xl font-semibold">{siteDetails.siteName}</span>
          </Link>

          {footerDetails.subheading && (
            <p className="mt-3.5 text-foreground-accent">{footerDetails.subheading}</p>
          )}
        </div>

        {/* Quick Links */}
        <nav aria-label="Footer">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="text-foreground-accent">
            {footerDetails.quickLinks.map(
              (link: { text: string; url: string }) => (
                <li key={link.text} className="mb-2">
                  <Link href={link.url} className="hover:text-foreground">
                    {link.text}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Contact + Socials */}
        <div className="md:text-right">
          <h4 className="text-lg font-semibold mb-4">Contact</h4>

          <a
            href={`mailto:${EMAIL}`}
            className="block font-semibold text-[color:var(--brand-blue)] hover:text-[color:var(--brand-red)]"
            style={brandVars}
            aria-label="Email Temrink"
          >
            {EMAIL}
          </a>

          {PHONE ? (
            <a
              href={telHref(PHONE)}
              className="mt-1 block text-foreground-accent hover:text-foreground"
              aria-label={`Call Temrink at ${PHONE}`}
            >
              {PHONE}
            </a>
          ) : (
            <span className="mt-1 block text-foreground-accent">
              Add phone in <code>NEXT_PUBLIC_TEMRINK_PHONE</code>
            </span>
          )}

          {footerDetails.socials && (
            <div className="mt-5 flex items-center gap-5 md:justify-end flex-wrap">
              {Object.entries(footerDetails.socials).map(
                ([platformName, url]: [string, string | undefined]) =>
                  url ? (
                    <Link
                      href={url}
                      key={platformName}
                      aria-label={platformName}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:opacity-80"
                    >
                      {getPlatformIconByName(platformName)}
                    </Link>
                  ) : null
              )}
            </div>
          )}
        </div>
      </div>

      {/* Bottom bar – credits removed */}
      <div className="mt-8 md:text-center text-foreground-accent px-6">
        <p>
          Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
