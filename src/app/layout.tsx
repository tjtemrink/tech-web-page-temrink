import type { Metadata, Viewport } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Source_Sans_3 } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import SimpleBlueCursor from "@/components/SimpleBlueCursor";
import { siteDetails } from "@/data/siteDetails";

import "./globals.css";

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
  alternates: { canonical: baseUrl },

  openGraph: {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    url: baseUrl,
    type: "website",
    images: [
      {
        url: "/images/temrink-logo.png",
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
    images: ["/images/temrink-logo.png"],
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
      <body className={`${sourceSans.className} antialiased`}>
        {/* Performance: preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {siteDetails.googleAnalyticsId ? (
          <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />
        ) : null}

        {/* Organization structured data for rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />

        <SimpleBlueCursor />
        <Header />
        <main>{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
