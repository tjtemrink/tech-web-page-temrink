// src/data/siteDetails.ts
export type SiteDetails = {
  siteName: string;
  siteUrl: string;
  metadata: { title: string; description: string };
  language: string;
  locale: string;
  siteLogo: string;
  googleAnalyticsId: string;
  contactEmail?: string;
  contactPhone?: string;

  /** Where “Get Started” and similar CTAs should go */
  contactPath?: string;

  /** Scheduling/booking configuration */
  scheduling?: {
    /** BookWithMe (or any) meeting URL */
    bookingUrl?: string;
  };
};

// Optional: allow override via env (works in Next since it's NEXT_PUBLIC_)
const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL ??
  "https://outlook.office.com/bookwithme/user/b6e2a8d7e88043658e570d521edcc67d@temrink.com/meetingtype/qC99LmYOFUWWuR9lYKCx_A2?anonymous&ismsaljsauthenabled&ep=mlink";

export const siteDetails: SiteDetails = {
  siteName: "Temrink",

  // Deployed site URL
  siteUrl: "https://temrink.com",

  metadata: {
    title: "Temrink — AI, Automation & IT Helpdesk for SMBs",
    description:
      "We manage Microsoft 365 & Google Workspace licensing, run your IT helpdesk and device management, and deploy Copilot + custom automations so your team moves faster with less overhead.",
  },

  language: "en-us",
  locale: "en-CA",

  siteLogo: "/images/temrink-logo.png",
  googleAnalyticsId: "",

  // Contact details
  contactEmail: "consulting@temrink.com",
  contactPhone: "+1 289-327-2015",

  // Canonical paths/links used by CTAs
  contactPath: "/contact",
  scheduling: {
    bookingUrl: BOOKING_URL,
  },
};
