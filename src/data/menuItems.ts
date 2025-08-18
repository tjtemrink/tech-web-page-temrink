import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
  { text: "Features",     url: "#features" },
  { text: "Process",      url: "#process" },
  { text: "Pricing",      url: "#pricing" },
  { text: "AI solutions", url: "#ai-summary" }, // homepage section
  {
    text: "Blog", // Microsite
    url: "https://temrink-inc.dmc-microsite.com/?utm_source=temrink.com&utm_medium=website&utm_campaign=nav"
  },
  { text: "Contact",      url: "/contact" }     // dedicated page
];
