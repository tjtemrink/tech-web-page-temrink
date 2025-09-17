import React from "react";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Header from "@/components/Header";
import { 
  HiChatBubbleLeftRight, 
  HiDocumentText, 
  HiCog, 
  HiShieldCheck, 
  HiLightBulb,
  HiArrowRight,
  HiCheckCircle,
  HiClock,
  HiUsers,
  HiPlay
} from "react-icons/hi2";

export const metadata = {
  title: "Our AI Implementation Process — Temrink",
  description: "Discover our proven 6-step process for implementing AI solutions and IT services. From discovery to deployment, we ensure seamless integration and maximum value for your business.",
  keywords: "AI implementation process, IT services workflow, project management, AI deployment, business automation process",
  openGraph: {
    title: "Our AI Implementation Process — Temrink",
    description: "Discover our proven 6-step process for implementing AI solutions and IT services. From discovery to deployment, we ensure seamless integration and maximum value.",
    type: "website",
  },
};

const ProcessPage: React.FC = () => {
  const processSteps = [
    {
      step: "01",
      icon: <HiChatBubbleLeftRight className="h-8 w-8" />,
      title: "Discovery & Consultation",
      duration: "1-2 weeks",
      description: "We begin by thoroughly understanding your business needs, current systems, and strategic goals to ensure our solution aligns perfectly with your objectives.",
      activities: [
        "Initial consultation call",
        "Business requirements analysis",
        "Current system assessment",
        "Goal setting and KPI definition",
        "Stakeholder interviews"
      ],
      deliverables: [
        "Requirements document",
        "Current state analysis",
        "Proposed solution architecture",
        "Project timeline and milestones"
      ]
    },
    {
      step: "02",
      icon: <HiDocumentText className="h-8 w-8" />,
      title: "Planning & Design",
      duration: "2-3 weeks",
      description: "We create comprehensive technical specifications and design a robust solution architecture tailored to your specific requirements and infrastructure.",
      activities: [
        "Technical architecture design",
        "Data flow mapping",
        "Security and compliance planning",
        "Integration strategy development",
        "User experience design"
      ],
      deliverables: [
        "Technical specification document",
        "System architecture diagrams",
        "Security and compliance plan",
        "Integration roadmap"
      ]
    },
    {
      step: "03",
      icon: <HiCog className="h-8 w-8" />,
      title: "Development & Configuration",
      duration: "4-8 weeks",
      description: "Our expert team builds and configures your AI solution using industry best practices, ensuring scalability, security, and optimal performance.",
      activities: [
        "AI model training and fine-tuning",
        "System integration and configuration",
        "Custom development work",
        "Data pipeline setup",
        "Testing and quality assurance"
      ],
      deliverables: [
        "Configured AI solution",
        "Integration with existing systems",
        "Custom features and workflows",
        "Quality assurance reports"
      ]
    },
    {
      step: "04",
      icon: <HiPlay className="h-8 w-8" />,
      title: "Testing & Validation",
      duration: "1-2 weeks",
      description: "Rigorous testing and validation ensure your solution works flawlessly and meets all performance requirements before going live.",
      activities: [
        "Functional testing",
        "Performance testing",
        "Security testing",
        "User acceptance testing",
        "Integration testing"
      ],
      deliverables: [
        "Test results and reports",
        "Performance benchmarks",
        "Security audit results",
        "User feedback and recommendations"
      ]
    },
    {
      step: "05",
      icon: <HiShieldCheck className="h-8 w-8" />,
      title: "Deployment & Go-Live",
      duration: "1 week",
      description: "We deploy your solution seamlessly with minimal disruption to your business operations, ensuring a smooth transition and immediate value.",
      activities: [
        "Production environment setup",
        "Data migration and validation",
        "System deployment",
        "Go-live support",
        "Initial monitoring and optimization"
      ],
      deliverables: [
        "Live AI solution",
        "Deployment documentation",
        "User training materials",
        "Support and monitoring setup"
      ]
    },
    {
      step: "06",
      icon: <HiLightBulb className="h-8 w-8" />,
      title: "Optimization & Support",
      duration: "Ongoing",
      description: "Ongoing monitoring, optimization, and support to ensure your AI solution continues to deliver maximum value and adapts to your evolving business needs.",
      activities: [
        "Performance monitoring",
        "Regular optimization",
        "User training and support",
        "Feature enhancements",
        "Ongoing maintenance"
      ],
      deliverables: [
        "Performance reports",
        "Optimization recommendations",
        "Training sessions",
        "Ongoing support and maintenance"
      ]
    }
  ];

  const methodologies = [
    {
      icon: <HiCheckCircle className="h-6 w-6" />,
      title: "Agile Development",
      description: "We use agile methodologies to ensure flexibility and rapid iteration throughout the project."
    },
    {
      icon: <HiUsers className="h-6 w-6" />,
      title: "Collaborative Approach",
      description: "Your team is involved at every step, ensuring the solution meets your exact needs."
    },
    {
      icon: <HiShieldCheck className="h-6 w-6" />,
      title: "Security First",
      description: "Security and compliance are built into every aspect of our development process."
    },
    {
      icon: <HiClock className="h-6 w-6" />,
      title: "Timely Delivery",
      description: "We maintain strict timelines while ensuring quality and thoroughness."
    }
  ];

  const timeline = [
    { phase: "Discovery", duration: "1-2 weeks", description: "Understanding your needs" },
    { phase: "Planning", duration: "2-3 weeks", description: "Designing the solution" },
    { phase: "Development", duration: "4-8 weeks", description: "Building and configuring" },
    { phase: "Testing", duration: "1-2 weeks", description: "Quality assurance" },
    { phase: "Deployment", duration: "1 week", description: "Going live" },
    { phase: "Support", duration: "Ongoing", description: "Continuous optimization" }
  ];

  return (
    <>
      <Header />
      <section className="pt-28 md:pt-40 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen">
        {/* Hero Section */}
        <Container>
          <div className="text-center mb-16">
            <span className="inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold tracking-wide bg-[#2A3BCF]/20 text-[#2A3BCF] border border-[#2A3BCF]/30 mb-6">
              OUR PROCESS
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              <span className="bg-gradient-to-r from-white via-[#2A3BCF] to-[#DD0000] bg-clip-text text-transparent">
                How We Deliver AI Solutions
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Our proven 6-step process ensures successful AI implementation from discovery to deployment. 
              We work closely with your team to deliver solutions that drive real business value and measurable results.
            </p>
          </div>
        </Container>

        {/* Process Steps */}
        <Container>
          <Section
            className="relative isolate rounded-[2rem] bg-gradient-to-b from-slate-800/90 via-slate-700/90 to-slate-800/90 ring-1 ring-slate-600/50 shadow-2xl backdrop-blur-sm"
            title=""
            titleClassName=""
            description=""
          >
            <div className="space-y-16">
              {processSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left side - Step info */}
                    <div className="lg:w-1/3">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-full bg-[#2A3BCF]/10 flex items-center justify-center text-[#2A3BCF]">
                            {step.icon}
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-[#2A3BCF] mb-1">STEP {step.step}</div>
                          <h3 className="text-2xl font-bold text-slate-900">{step.title}</h3>
                          <div className="flex items-center gap-2 mt-2">
                            <HiClock className="h-4 w-4 text-slate-500" />
                            <span className="text-sm text-slate-500">{step.duration}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-slate-600 mb-6">{step.description}</p>
                    </div>

                    {/* Right side - Activities and Deliverables */}
                    <div className="lg:w-2/3">
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Activities */}
                        <div>
                          <h4 className="text-2xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[#2A3BCF]/10 flex items-center justify-center">
                              <HiCog className="h-6 w-6 text-[#2A3BCF]" />
                            </div>
                            Key Activities
                          </h4>
                          <ul className="space-y-5">
                            {step.activities.map((activity, activityIndex) => (
                              <li key={activityIndex} className="flex items-start gap-5">
                                <div className="w-7 h-7 rounded-full bg-[#2A3BCF] flex items-center justify-center mt-1 flex-shrink-0 shadow-sm">
                                  <span className="text-white text-sm font-bold">{activityIndex + 1}</span>
                                </div>
                                <span className="text-lg text-slate-800 font-semibold leading-relaxed">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Deliverables */}
                        <div>
                          <h4 className="text-2xl font-extrabold text-slate-900 mb-6 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                              <HiCheckCircle className="h-6 w-6 text-green-500" />
                            </div>
                            Expected Deliverables
                          </h4>
                          <ul className="space-y-5">
                            {step.deliverables.map((deliverable, deliverableIndex) => (
                              <li key={deliverableIndex} className="flex items-start gap-5">
                                <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center mt-1 flex-shrink-0 shadow-sm">
                                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                </div>
                                <span className="text-lg text-slate-800 font-semibold leading-relaxed">{deliverable}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Arrow for next step */}
                  {index < processSteps.length - 1 && (
                    <div className="flex justify-center mt-8">
                      <HiArrowRight className="h-6 w-6 text-slate-400" />
                    </div>
                  )}
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

        {/* Methodologies */}
        <Container>
          <Section
            className="relative isolate rounded-[2rem] bg-gradient-to-b from-slate-800/90 via-slate-700/90 to-slate-800/90 ring-1 ring-slate-600/50 shadow-2xl backdrop-blur-sm"
            title=""
            titleClassName=""
            description=""
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-[#2A3BCF] to-[#DD0000] bg-clip-text text-transparent">
                  Our Methodologies
                </span>
              </h2>
              <p className="text-slate-300">
                The principles that guide our approach to AI solution development
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodologies.map((methodology, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-[#2A3BCF]/10 flex items-center justify-center text-[#2A3BCF] mx-auto mb-4">
                    {methodology.icon}
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{methodology.title}</h3>
                  <p className="text-sm text-slate-600">{methodology.description}</p>
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

        {/* Timeline Overview */}
        <Container>
          <Section
            className="relative isolate rounded-[2rem] bg-gradient-to-b from-slate-800/90 via-slate-700/90 to-slate-800/90 ring-1 ring-slate-600/50 shadow-2xl backdrop-blur-sm"
            title=""
            titleClassName=""
            description=""
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-[#2A3BCF] to-[#DD0000] bg-clip-text text-transparent">
                  Project Timeline
                </span>
              </h2>
              <p className="text-slate-300">
                Typical project duration: 8-16 weeks depending on complexity
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
              {timeline.map((phase, index) => (
                <div key={index} className="bg-white rounded-xl p-4 text-center shadow-lg">
                  <div className="text-2xl font-bold text-[#2A3BCF] mb-2">{phase.duration}</div>
                  <h3 className="font-semibold text-slate-900 mb-1">{phase.phase}</h3>
                  <p className="text-xs text-slate-500">{phase.description}</p>
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

        {/* Related Pages Navigation */}
        <Container>
          <Section
            className="relative isolate rounded-[2rem] bg-gradient-to-b from-slate-800/90 via-slate-700/90 to-slate-800/90 ring-1 ring-slate-600/50 shadow-2xl backdrop-blur-sm"
            title=""
            titleClassName=""
            description=""
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                <span className="bg-gradient-to-r from-white via-[#2A3BCF] to-[#DD0000] bg-clip-text text-transparent">
                  Explore More
                </span>
              </h2>
              <p className="text-slate-300">
                Learn more about our services and solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* AI Solutions */}
              <a
                href="/ai-solutions"
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#2A3BCF]/10 flex items-center justify-center text-[#2A3BCF] mx-auto mb-4 group-hover:bg-[#2A3BCF]/20 transition-colors">
                    <HiCog className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">AI Solutions</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Discover our comprehensive AI services including custom chatbots, document processing, and automation tools.
                  </p>
                  <span className="text-[#2A3BCF] font-semibold group-hover:text-[#010775] transition-colors">
                    Explore AI Solutions →
                  </span>
                </div>
              </a>

              {/* Pricing */}
              <a
                href="/pricing"
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mx-auto mb-4 group-hover:bg-green-500/20 transition-colors">
                    <HiCheckCircle className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Pricing Plans</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    View our transparent pricing for IT support packages, AI solutions, and managed services.
                  </p>
                  <span className="text-green-500 font-semibold group-hover:text-green-600 transition-colors">
                    View Pricing →
                  </span>
                </div>
              </a>

              {/* Contact */}
              <a
                href="/contact"
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[#DD0000]/10 flex items-center justify-center text-[#DD0000] mx-auto mb-4 group-hover:bg-[#DD0000]/20 transition-colors">
                    <HiChatBubbleLeftRight className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Get Started</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    Ready to begin? Contact us for a free consultation and project assessment.
                  </p>
                  <span className="text-[#DD0000] font-semibold group-hover:text-red-700 transition-colors">
                    Contact Us →
                  </span>
                </div>
              </a>
            </div>
          </Section>
        </Container>

        {/* Section divider */}
        <div className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-slate-500 to-transparent"></div>
          </div>
        </div>

        {/* CTA Section */}
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
                  Ready to Start Your AI Journey?
                </span>
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Let&apos;s discuss your project and see how our proven process can help you 
                achieve your AI goals. We&apos;ll provide a detailed project plan tailored to your specific needs.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#2A3BCF] to-[#010775] px-8 py-4 text-white font-semibold shadow-xl shadow-blue-900/50 hover:shadow-blue-900/60 hover:scale-105 transition-all duration-200 text-lg"
                >
                  Start Your Project
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

export default ProcessPage;
