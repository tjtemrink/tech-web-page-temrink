import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Your IT team, without the overhead. Managed IT, AI & automation for growing businesses.",
    quickLinks: [
        {
            text: "Services",
            url: "#features"
        },
        {
            text: "Pricing",
            url: "/pricing"
        },
        {
            text: "AI Solutions",
            url: "/ai-solutions"
        },
        {
            text: "Process",
            url: "/process"
        },
        {
            text: "Contact",
            url: "/contact"
        }
    ],
    email: 'consulting@temrink.com',
    telephone: '+1 289-327-2015',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        x: 'https://x.com/Temrinkinc',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com/company/temrinkinc/',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com/temrink.inc',
    }
}
