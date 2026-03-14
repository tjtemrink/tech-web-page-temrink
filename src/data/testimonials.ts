import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'Sarah M.',
        role: 'Office Manager, 30-person firm',
        message: `${siteDetails.siteName} took over our Microsoft 365 licensing and IT helpdesk. We stopped worrying about renewals, passwords, and device issues overnight.`,
        avatar: '/images/testimonial-1.webp',
    },
    {
        name: 'David R.',
        role: 'Operations Director, growing startup',
        message: `The AI automation ${siteDetails.siteName} built for our intake process saves us about 10 hours a week. Their team actually understands small-business workflows.`,
        avatar: '/images/testimonial-2.webp',
    },
    {
        name: 'Priya K.',
        role: 'Founder, professional services',
        message: `We needed Copilot rolled out properly, not just turned on. ${siteDetails.siteName} handled the deployment, training, and ongoing support. Huge difference.`,
        avatar: '/images/testimonial-3.webp',
    },
];
