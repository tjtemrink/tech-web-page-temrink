import { IPricing } from "@/types";

export const tiers: IPricing[] = [
  {
    name: "Microsoft 365 Business Basic",
    price: 8.10, // CAD per user/month, annual (plus tax)
    features: [
      "Up to 300 users; user & access management",
      "Business email with custom domain (Exchange Online)",
      "Microsoft Teams for chat, online meetings & calling",
      "Web & mobile versions of Word, Excel, PowerPoint & Outlook",
      "1 TB OneDrive cloud storage per user",
      "SharePoint team sites & core apps (Bookings, Planner, Forms)",
      "Spam & malware filtering",
      "Standard phone and web support",
    ],
  },
  {
    name: "Microsoft 365 Business Standard",
    price: 17.0, // CAD per user/month, annual (plus tax)
    features: [
      "Everything in Business Basic",
      "Desktop apps for Word, Excel, PowerPoint & Outlook (plus web & mobile)",
      "Webinars with registration & attendee reporting",
      "Collaborative workspaces with Microsoft Loop",
      "Video editing & design tools with Clipchamp",
      "Publisher & Access (PC only)",
    ],
  },
  {
    name: "Microsoft 365 Business Premium",
    price: 29.80, // CAD per user/month, annual (plus tax)
    badge: "Most popular",
    features: [
      "Everything in Business Standard",
      "Advanced identity & access management",
      "Device & endpoint management (MDM/MAM)",
      "Threat protection for phishing & malware",
      "Information protection & data-loss prevention (DLP)",
      "Conditional access & security baselines",
    ],
  },
  {
    name: "Microsoft 365 Apps for Business",
    price: 11.70, // CAD per user/month, annual (plus tax)
    features: [
      "Desktop versions of Word, Excel, PowerPoint & Outlook",
      "Licensed for up to 300 users",
      "1 TB OneDrive storage per user",
      "Standard phone and web support",
      "Does not include business email or Teams",
    ],
  },
];
