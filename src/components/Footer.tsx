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

// Official profiles (we enforce X/Twitter to avoid duplicates)
const OFFICIAL = {
  x: "https://x.com/Temrinkinc",
};

const SOCIAL_DEFAULTS: Record<string, string> = {
  x: OFFICIAL.x,
  instagram:
    "https://www.instagram.com/temrink.inc?utm_source=ig_web_button_share_sheet&igsh=dWJ3cXN3aDlxc2Jo",
  linkedin: "https://www.linkedin.com/company/temrinkinc/",
};

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

// Normalize platform keys to what getPlatformIconByName expects
function normalizePlatformKey(k: string): string {
  const low = k.toLowerCase();
  if (["twitter", "x", "xtwitter"].includes(low)) return "x";
  if (["linkedin", "linkedIn", "li"].includes(low)) return "linkedin";
  if (["instagram", "ig"].includes(low)) return "instagram";
  return low;
}

const EMAIL = resolveEmail(footerDetails.email);
const PHONE =
  footerDetails.telephone || process.env.NEXT_PUBLIC_TEMRINK_PHONE || "";

const Footer: React.FC = () => {
  // Merge defaults + site data, then de-duplicate by normalized key
  const merged = { ...SOCIAL_DEFAULTS, ...(footerDetails.socials || {}) };

  const finalSocials: Record<string, string> = {};
  for (const [rawKey, urlRaw] of Object.entries(merged)) {
    const key = normalizePlatformKey(rawKey);
    let url = urlRaw || "";

    // Always enforce the official X/Twitter link; skip any other/empty one
    if (key === "x") {
      finalSocials.x = OFFICIAL.x;
      continue;
    }

    if (!url) continue;
    if (!finalSocials[key]) finalSocials[key] = url;
  }

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
              src="/images/temrink-logo.png"
              alt="Temrink"
              width={160}
              height={40}
              className="h-8 w-auto object-contain"
            />
            <span className="manrope text-xl font-semibold">
              {siteDetails.siteName}
            </span>
          </Link>

          {footerDetails.subheading && (
            <p className="mt-3.5 text-foreground-accent">
              {footerDetails.subheading}
            </p>
          )}
        </div>

        {/* Quick Links */}
        <nav aria-label="Footer">
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="text-foreground-accent">
            {footerDetails.quickLinks.map((link: { text: string; url: string }) => (
              <li key={link.text} className="mb-2">
                <Link href={link.url} className="hover:text-foreground">
                  {link.text}
                </Link>
              </li>
            ))}
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

          {/* Social icons (deduped; X always official) */}
          <div className="mt-5 flex items-center gap-3 md:justify-end flex-wrap">
            {Object.entries(finalSocials).map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Temrink on ${key}`}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border hover:bg-muted transition"
              >
                {getPlatformIconByName(key)}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-8 md:text-center text-foreground-accent px-6">
        <p>
          Copyright &copy; {new Date().getFullYear()} {siteDetails.siteName}.
          All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
