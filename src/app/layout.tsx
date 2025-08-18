import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Source_Sans_3, Manrope } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteDetails } from "@/data/siteDetails";

import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], display: "swap" });
const sourceSans = Source_Sans_3({ subsets: ["latin"], display: "swap" });

// Absolute base URL for OG/Twitter images
const baseUrl =
  siteDetails.siteUrl?.startsWith("http")
    ? siteDetails.siteUrl
    : "https://temrink.com";

const absolute = (p: string) => (p?.startsWith("http") ? p : `${baseUrl}${p}`);
const logoUrl = siteDetails.siteLogo
  ? absolute(siteDetails.siteLogo)
  : absolute("/images/og-image.jpg");

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: siteDetails.metadata.title,
  description: siteDetails.metadata.description,
  robots: { index: true, follow: true },

  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: baseUrl,
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 675,
        alt: siteDetails.siteName,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    images: ["/images/twitter-image.jpg"],
  },

  // Browser tab / homescreen icons
  icons: {
    // Primary (Next.js will serve src/app/icon.png at /icon.png)
    icon: [
      { url: "/icon.png", type: "image/png" },
      // Keep a generic .ico fallback for older/strict user agents
      { url: "/favicon.ico", sizes: "any" },
    ],
    // Nice to have: also provide these so iOS/shortcuts pick it up
    shortcut: ["/icon.png"],
    apple: [{ url: "/icon.png" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteDetails.siteName || "Temrink",
    url: baseUrl,
    logo: logoUrl,
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${manrope.className} ${sourceSans.className} antialiased`}>
        {siteDetails.googleAnalyticsId ? (
          <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />
        ) : null}

        {/* Organization structured data for rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
