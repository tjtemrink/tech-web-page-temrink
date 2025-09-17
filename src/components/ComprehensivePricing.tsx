import React from 'react';
import { HiCheck, HiDevicePhoneMobile, HiCog, HiShieldCheck } from 'react-icons/hi2';

interface Package {
  name: string;
  price: string;
  description: string;
  features: string[];
  requirements?: string;
  icon: React.ReactNode;
  popular?: boolean;
  category: 'it-support' | 'device-leasing' | 'hourly' | 'add-ons';
}

const packages: Package[] = [
  // IT Support Packages
  {
    name: "Essential IT Support",
    price: "$25/user/month",
    description: "Helpdesk for email/collaboration & essential IT support.",
    features: [
      "Email & collaboration support",
      "Basic troubleshooting",
      "User onboarding/offboarding",
      "Monthly optimization reviews"
    ],
    icon: <HiCog className="h-8 w-8" />,
    category: 'it-support'
  },
  {
    name: "Advanced IT & Security",
    price: "$45/user/month",
    description: "Security, device management (Intune), and compliance controls.",
    features: [
      "Everything in Essential",
      "Device management (Intune)",
      "Security hardening & compliance",
      "Advanced threat protection",
      "Compliance reporting"
    ],
    requirements: "Required for Microsoft 365 Business Premium environments.",
    icon: <HiShieldCheck className="h-8 w-8" />,
    popular: true,
    category: 'it-support'
  },
  {
    name: "Cloud Optimized IT",
    price: "$35/user/month",
    description: "Support tailored to each user's license mix; flexible & cost-aware.",
    features: [
      "License-specific support",
      "Cost optimization",
      "Flexible scaling",
      "Usage analytics",
      "Right-sizing recommendations"
    ],
    icon: <HiCog className="h-8 w-8" />,
    category: 'it-support'
  },
  {
    name: "Fully Managed IT",
    price: "$75/user/month",
    description: "Full IT outsourcing: management, security, compliance & strategy.",
    features: [
      "Complete IT outsourcing",
      "Strategic planning",
      "24/7 monitoring",
      "Proactive maintenance",
      "Executive reporting",
      "After-hours support available"
    ],
    icon: <HiShieldCheck className="h-8 w-8" />,
    category: 'it-support'
  },
  // Device Leasing Packages
  {
    name: "Essential Windows",
    price: "$115/user/month",
    description: "Business-grade Windows laptop with Microsoft 365 Business Premium.",
    features: [
      "Business-grade Windows laptop",
      "Microsoft 365 Business Premium",
      "Device setup & configuration",
      "Security hardening",
      "Remote IT support"
    ],
    icon: <HiDevicePhoneMobile className="h-8 w-8" />,
    category: 'device-leasing'
  },
  {
    name: "Essential Mac",
    price: "$135/user/month",
    description: "Business-grade MacBook Air with Microsoft 365 Business Premium.",
    features: [
      "Business-grade MacBook Air",
      "Microsoft 365 Business Premium",
      "Device setup & configuration",
      "Security hardening (FileVault)",
      "Remote IT support"
    ],
    icon: <HiDevicePhoneMobile className="h-8 w-8" />,
    category: 'device-leasing'
  },
  {
    name: "Advanced Windows",
    price: "$150/user/month",
    description: "Security-focused; compliance + MDM.",
    features: [
      "Everything in Essential Windows",
      "Intune device management",
      "Compliance baselines",
      "Backup & Disaster Recovery",
      "Advanced security policies"
    ],
    icon: <HiShieldCheck className="h-8 w-8" />,
    category: 'device-leasing'
  },
  {
    name: "Advanced Mac",
    price: "$170/user/month",
    description: "Security-focused; compliance + MDM.",
    features: [
      "Everything in Essential Mac",
      "Intune device management",
      "Compliance baselines",
      "Backup & Disaster Recovery",
      "Advanced security policies"
    ],
    icon: <HiShieldCheck className="h-8 w-8" />,
    category: 'device-leasing'
  },
  {
    name: "Fully Managed Windows",
    price: "$200/user/month",
    description: "High-performance laptop with fully outsourced IT.",
    features: [
      "High-performance Windows laptop",
      "Zero Trust enforcement",
      "Complete IT outsourcing",
      "24/7 monitoring",
      "Hardware failure replacement"
    ],
    icon: <HiShieldCheck className="h-8 w-8" />,
    category: 'device-leasing'
  },
  {
    name: "Fully Managed Mac",
    price: "$225/user/month",
    description: "High-performance MacBook with fully outsourced IT.",
    features: [
      "High-performance MacBook",
      "Zero Trust enforcement",
      "Complete IT outsourcing",
      "24/7 monitoring",
      "Hardware failure replacement"
    ],
    icon: <HiShieldCheck className="h-8 w-8" />,
    category: 'device-leasing'
  }
];

const hourlyRates = [
  { service: "Standard IT Support (Business Hours)", price: "$75/hour" },
  { service: "Standard IT Support (After Hours)", price: "$100/hour" },
  { service: "Advanced IT & Security (Business Hours)", price: "$100/hour" },
  { service: "Advanced IT & Security (After Hours)", price: "$125/hour" },
  { service: "Cloud Automation Consulting (Business Hours)", price: "$125/hour" },
  { service: "Cloud Automation Consulting (After Hours)", price: "$150/hour" },
  { service: "Emergency IT (Business Hours)", price: "$150/hour" },
  { service: "Emergency IT (After Hours)", price: "$200/hour" },
  { service: "On-site IT Support (GTA)", price: "$150/hour (2-hour min.)" }
];

const addOns = [
  { service: "Data Migration & Device Setup", price: "$100 per device" },
  { service: "Custom Security & Compliance Policies", price: "$500 per company" },
  { service: "Email Data Migration", price: "$100 per user" },
  { service: "Custom Power Apps Development", price: "Starting at $500 per app" },
  { service: "Security & Compliance Audit", price: "$1,000 per audit" },
  { service: "SharePoint & Teams Intranet Setup", price: "$750 per site" },
  { service: "Azure Cost Optimization Review", price: "$500 per review" }
];

const ComprehensivePricing: React.FC = () => {
  const itSupportPackages = packages.filter(p => p.category === 'it-support');
  const deviceLeasingPackages = packages.filter(p => p.category === 'device-leasing');

  return (
    <div className="space-y-16">
      {/* IT Support Packages */}
      <div>
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Managed IT Support Packages</h3>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Choose the right level of IT support for your organization. All packages include business hours support with optional after-hours coverage.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {itSupportPackages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border-2 p-6 transition-all duration-300 hover:shadow-lg ${
                pkg.popular 
                  ? 'border-[#010775] bg-gradient-to-b from-[#010775]/5 to-white shadow-lg' 
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#010775] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#010775]/10 text-[#010775] mb-4">
                  {pkg.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{pkg.name}</h4>
                <div className="text-3xl font-bold text-[#010775] mb-2">{pkg.price}</div>
                <p className="text-sm text-slate-600">{pkg.description}</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <HiCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {pkg.requirements && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-4">
                  <p className="text-xs text-amber-800 font-medium">{pkg.requirements}</p>
                </div>
              )}
              
              <a
                href="/contact"
                className="w-full bg-[#010775] text-white py-3 px-4 rounded-xl font-semibold hover:bg-[#2A3BCF] transition-colors inline-block text-center"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Device Leasing Packages */}
      <div>
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Device as a Service (DaaS)</h3>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Business-grade devices bundled with Microsoft 365 and full IT support. All packages include device setup, security hardening, and remote support.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {deviceLeasingPackages.map((pkg, index) => (
            <div
              key={index}
              className="rounded-2xl border-2 border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-lg hover:border-slate-300"
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#010775]/10 text-[#010775] mb-4">
                  {pkg.icon}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{pkg.name}</h4>
                <div className="text-3xl font-bold text-[#010775] mb-2">{pkg.price}</div>
                <p className="text-sm text-slate-600">{pkg.description}</p>
              </div>
              
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <HiCheck className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a
                href="/contact"
                className="w-full bg-[#010775] text-white py-3 px-4 rounded-xl font-semibold hover:bg-[#2A3BCF] transition-colors inline-block text-center"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Hourly Support Rates */}
      <div>
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Hourly Support Rates</h3>
          <p className="text-slate-600 max-w-3xl mx-auto">
            Pay-as-you-go support for organizations not on a package or for overflow needs. 10% discount when pre-purchasing 10+ hours.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hourlyRates.map((rate, index) => (
            <div key={index} className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <h4 className="font-semibold text-slate-900 text-sm leading-tight">{rate.service}</h4>
                <span className="text-2xl font-bold text-[#010775] ml-4 flex-shrink-0">{rate.price}</span>
              </div>
              <div className="text-xs text-slate-500">
                {rate.service.includes('After Hours') ? 'Outside business hours' : 'During business hours'}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add-ons */}
      <div>
        <div className="text-center mb-12">
          <div className="inline-flex items-center rounded-full px-4 py-2 bg-gradient-to-r from-[#010775]/10 to-[#DD0000]/10 mb-6">
            <span className="text-sm font-semibold text-[#010775] uppercase tracking-wide">ADDITIONAL SERVICES</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#010775] via-[#2A3BCF] to-[#DD0000] bg-clip-text text-transparent mb-4">
            Add-on Services
          </h3>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg">
            One-time services to enhance your IT infrastructure and capabilities.
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {addOns.map((addon, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200 p-6 hover:shadow-md transition-shadow"
            >
              <h4 className="font-semibold text-slate-900 mb-2">{addon.service}</h4>
              <div className="text-2xl font-bold text-[#010775] mb-4">{addon.price}</div>
              <a
                href="/contact"
                className="w-full bg-slate-100 text-slate-700 py-2 px-4 rounded-lg font-medium hover:bg-slate-200 transition-colors inline-block text-center"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Global Discounts */}
      <div className="bg-gradient-to-r from-[#010775]/5 to-[#DD0000]/5 rounded-2xl p-8 text-center">
        <h3 className="text-xl font-bold text-slate-900 mb-4">Global Discounts</h3>
        <div className="grid gap-4 md:grid-cols-2 max-w-2xl mx-auto">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 mb-2">Annual Prepay</h4>
            <p className="text-2xl font-bold text-[#010775]">10% discount</p>
            <p className="text-sm text-slate-600">for annual payments</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold text-slate-900 mb-2">Long-term Contracts</h4>
            <p className="text-2xl font-bold text-[#010775]">Custom pricing</p>
            <p className="text-sm text-slate-600">for 12+ month agreements</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensivePricing;
