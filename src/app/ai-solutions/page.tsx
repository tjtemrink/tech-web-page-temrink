import React from "react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Header from "@/components/Header";
import { HiSparkles, HiChatBubbleLeftRight, HiDocumentText, HiQuestionMarkCircle, HiCog, HiShieldCheck, HiLanguage, HiBolt } from "react-icons/hi2";

export const metadata = {
  title: "AI Solutions & Automation Services — Temrink",
  description: "Transform your business with cutting-edge AI solutions including custom chatbots, document extraction, speech translation, QnA systems, and CRM integrations. Custom AI development for SMBs.",
  keywords: "AI solutions, custom chatbots, document processing, speech translation, CRM integration, Microsoft Copilot, automation services",
  openGraph: {
    title: "AI Solutions & Automation Services — Temrink",
    description: "Transform your business with cutting-edge AI solutions including custom chatbots, document extraction, speech translation, QnA systems, and CRM integrations.",
    type: "website",
  },
};

const AISolutionsPage: React.FC = () => {
  const aiSolutions = [
    {
      icon: <HiChatBubbleLeftRight className="h-8 w-8" />,
      title: "Custom AI Chatbots",
      description: "Intelligent conversational agents tailored to your business needs",
      features: [
        "24/7 customer support automation",
        "Multi-language support",
        "Integration with existing systems",
        "Natural language processing",
        "Escalation to human agents when needed"
      ],
      useCases: [
        "Customer service automation",
        "Lead qualification and nurturing",
        "Internal employee support",
        "FAQ automation"
      ]
    },
    {
      icon: <HiDocumentText className="h-8 w-8" />,
      title: "Document Extraction & Processing",
      description: "Automatically extract and process information from documents",
      features: [
        "OCR text recognition",
        "Data extraction from PDFs, images, and forms",
        "Intelligent document classification",
        "Automated data entry",
        "Compliance and validation checks"
      ],
      useCases: [
        "Invoice processing automation",
        "Contract analysis and extraction",
        "Medical record digitization",
        "Legal document review"
      ]
    },
    {
      icon: <HiLanguage className="h-8 w-8" />,
      title: "Speech Translation & Voice AI",
      description: "Real-time speech translation and voice-enabled AI solutions",
      features: [
        "Real-time speech-to-text conversion",
        "Multi-language translation",
        "Voice command processing",
        "Accent and dialect recognition",
        "Audio content analysis"
      ],
      useCases: [
        "Multilingual customer support",
        "Meeting transcription and translation",
        "Voice-controlled applications",
        "Accessibility solutions"
      ]
    },
    {
      icon: <HiQuestionMarkCircle className="h-8 w-8" />,
      title: "QnA Chatbots for HR",
      description: "Popular HR-focused question and answer systems",
      features: [
        "Employee policy queries",
        "Benefits and leave management",
        "Onboarding assistance",
        "Performance review guidance",
        "Compliance and training support"
      ],
      useCases: [
        "HR policy clarification",
        "Employee self-service portal",
        "Training and development support",
        "Compliance assistance"
      ]
    },
    {
      icon: <HiCog className="h-8 w-8" />,
      title: "CRM Integration with Copilot",
      description: "Seamless integration between CRM tools and Microsoft Copilot",
      features: [
        "Sales pipeline automation",
        "Customer data synchronization",
        "Intelligent lead scoring",
        "Automated follow-up sequences",
        "Cross-platform data analysis"
      ],
      useCases: [
        "Sales process optimization",
        "Customer relationship management",
        "Marketing automation",
        "Business intelligence insights"
      ]
    },
    {
      icon: <HiBolt className="h-8 w-8" />,
      title: "Workflow Automation",
      description: "Intelligent automation of business processes and workflows",
      features: [
        "Process optimization",
        "Task automation",
        "Approval workflows",
        "Data validation and processing",
        "Integration with existing tools"
      ],
      useCases: [
        "Invoice approval processes",
        "Employee onboarding automation",
        "Customer onboarding flows",
        "Compliance monitoring"
      ]
    }
  ];

  const technologies = [
    "Microsoft Copilot Studio",
    "Azure Cognitive Services",
    "Power Platform AI Builder",
    "OpenAI GPT Integration",
    "Azure Bot Framework",
    "Microsoft 365 Copilot",
    "Azure Form Recognizer",
    "Azure Speech Services"
  ];

  const benefits = [
    {
      icon: <HiShieldCheck className="h-6 w-6" />,
      title: "Enterprise Security",
      description: "Built on Microsoft&apos;s secure cloud platform with enterprise-grade security and compliance"
    },
    {
      icon: <HiSparkles className="h-6 w-6" />,
      title: "Custom Solutions",
      description: "Tailored AI solutions designed specifically for your business requirements and workflows"
    },
    {
      icon: <HiCog className="h-6 w-6" />,
      title: "Seamless Integration",
      description: "Easy integration with your existing Microsoft 365 and business applications"
    }
  ];

  return (
    <>
      <Header />
      <section className="pt-28 md:pt-40 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen">
        {/* Hero Section */}
        <Container>
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold tracking-wide bg-[#2A3BCF]/20 text-[#2A3BCF] border border-[#2A3BCF]/30 mb-6">
              AI SOLUTIONS
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-white via-[#2A3BCF] to-[#DD0000] bg-clip-text text-transparent">
                Transform Your Business with AI
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Leverage cutting-edge AI solutions to automate processes, enhance customer experiences, 
              and drive business growth. From custom chatbots to document processing, we build intelligent 
              solutions tailored to your needs.
            </p>
          </div>
        </Container>

        {/* AI Solutions Grid */}
        <Container>
          <Section
            className="relative isolate rounded-[2rem] bg-gradient-to-b from-slate-800/90 via-slate-700/90 to-slate-800/90 ring-1 ring-slate-600/50 shadow-2xl backdrop-blur-sm"
            title=""
            titleClassName=""
            description=""
          >
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {aiSolutions.map((solution, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#2A3BCF]/10 text-[#2A3BCF] mb-4">
                      {solution.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{solution.title}</h3>
                    <p className="text-slate-600 mb-6">{solution.description}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Key Features:</h4>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <span className="w-2 h-2 bg-[#2A3BCF] rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm text-slate-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">Use Cases:</h4>
                      <ul className="space-y-1">
                        {solution.useCases.map((useCase, useCaseIndex) => (
                          <li key={useCaseIndex} className="text-sm text-slate-500">
                            • {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </Container>

        {/* Section divider */}
        <div className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent"></div>
          </div>
        </div>

        {/* Technologies & Benefits */}
        <Container>
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Technologies */}
            <Section
              className="relative isolate rounded-[2rem] bg-gradient-to-b from-slate-800/90 via-slate-700/90 to-slate-800/90 ring-1 ring-slate-600/50 shadow-2xl backdrop-blur-sm"
              title=""
              titleClassName=""
              description=""
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-white via-[#2A3BCF] to-[#DD0000] bg-clip-text text-transparent">
                    Technologies We Use
                  </span>
                </h2>
                <p className="text-slate-300">
                  Built on Microsoft&apos;s trusted AI platform and cutting-edge technologies
                </p>
              </div>
              
              <div className="grid gap-4 md:grid-cols-2">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-4 text-center shadow-lg"
                  >
                    <span className="text-slate-900 font-semibold">{tech}</span>
                  </div>
                ))}
              </div>
            </Section>

            {/* Benefits */}
            <Section
              className="relative isolate rounded-[2rem] bg-gradient-to-b from-slate-800/90 via-slate-700/90 to-slate-800/90 ring-1 ring-slate-600/50 shadow-2xl backdrop-blur-sm"
              title=""
              titleClassName=""
              description=""
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-white via-[#2A3BCF] to-[#DD0000] bg-clip-text text-transparent">
                    Why Choose Temrink
                  </span>
                </h2>
                <p className="text-slate-300">
                  Enterprise-grade AI solutions with unmatched security and support
                </p>
              </div>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-[#2A3BCF]/10 flex items-center justify-center text-[#2A3BCF]">
                          {benefit.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                        <p className="text-slate-600">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </Container>

        {/* Section divider */}
        <div className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent"></div>
          </div>
        </div>

        {/* Custom Solutions CTA */}
        <Container>
          <Section
            className="relative isolate rounded-[2rem] bg-gradient-to-b from-slate-800/90 via-slate-700/90 to-slate-800/90 ring-1 ring-slate-600/50 shadow-2xl backdrop-blur-sm"
            title=""
            titleClassName=""
            description=""
          >
            <div className="text-center py-16">
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-white via-[#2A3BCF] to-[#DD0000] bg-clip-text text-transparent">
                  Need a Custom AI Solution?
                </span>
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Every business is unique. Share your specific requirements with us, and we&apos;ll design 
                a custom AI solution that perfectly fits your needs and integrates seamlessly with 
                your existing systems.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#2A3BCF] to-[#010775] px-8 py-4 text-white font-semibold shadow-xl shadow-blue-900/50 hover:shadow-blue-900/60 hover:scale-105 transition-all duration-200 text-lg"
                >
                  Discuss Your Requirements
                </a>
                <a
                  href="mailto:consulting@temrink.com"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-400 bg-slate-700/50 px-8 py-4 text-white font-semibold hover:bg-slate-600/50 hover:scale-105 transition-all duration-200 shadow-lg text-lg backdrop-blur-sm"
                >
                  consulting@temrink.com
                </a>
              </div>
            </div>
          </Section>
        </Container>
      </section>
    </>
  );
};

export default AISolutionsPage;
