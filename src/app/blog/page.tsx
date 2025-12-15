import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "AI & Microsoft 365 Copilot for SMBs | Temrink",
  description:
    "Learn how Temrink helps Canadian SMBs use Microsoft 365 Copilot, AI agents, and automation to improve productivity and reduce costs.",
  keywords: [
    "Microsoft 365 Copilot",
    "AI automation",
    "SMB productivity",
    "Canadian Microsoft Partner",
    "Copilot Chat agents",
    "Microsoft 365",
    "business automation",
    "AI agents",
  ],
  openGraph: {
    title: "AI & Microsoft 365 Copilot for SMBs | Temrink",
    description:
      "Learn how Temrink helps Canadian SMBs use Microsoft 365 Copilot, AI agents, and automation to improve productivity and reduce costs.",
    type: "website",
    url: "https://temrink.com/blog",
    siteName: "Temrink",
  },
  alternates: {
    canonical: "https://www.temrink.com/blog",
  },
};

// Blog post data structure
interface BlogPost {
  title: string;
  date: string;
  time: string;
  type: "Video" | "Infographic";
  description: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "How to Build Agents with Copilot Chat",
    date: "Wed, Sep 10th 2025",
    time: "9:00 AM",
    type: "Infographic",
    description:
      "Guide to building agents that automate employee workflows",
  },
  {
    title: "Top Microsoft 365 Copilot Prompts",
    date: "Tue, Sep 9th 2025",
    time: "9:00 AM",
    type: "Video",
    description:
      "Best prompts across business functions",
  },
  {
    title: "Customer Service Agent Automation",
    date: "Mon, Sep 8th 2025",
    time: "9:00 AM",
    type: "Infographic",
    description:
      "Automating service workflows with Copilot agents",
  },
  {
    title: "Marketing with Microsoft 365 Copilot",
    date: "Tue, Sep 2nd 2025",
    time: "9:00 AM",
    type: "Video",
    description:
      "Copilot for content creation and campaigns",
  },
  {
    title: "Sales Productivity with Copilot",
    date: "Tue, Aug 26th 2025",
    time: "9:00 AM",
    type: "Video",
    description:
      "Automating emails, summaries, and presentations",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 md:pt-24 pb-16">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10" aria-hidden>
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B1026] via-[#0E1530] to-[#0B1026]" />
          <div className="pointer-events-none absolute -top-40 -right-20 h-96 w-96 rounded-full bg-[#2A3BCF]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-52 -left-28 h-[28rem] w-[28rem] rounded-full bg-[#DD0000]/10 blur-3xl" />
        </div>

        <Container>
          <div className="text-center text-white max-w-4xl mx-auto">
            <span className="inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-semibold tracking-wide bg-white/20 text-white mb-6">
              TEMRINK BLOG
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              AI, Microsoft 365 Copilot & Automation for SMBs
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              How Temrink helps Canadian businesses unlock productivity with AI,
              automation, and Microsoft 365
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-[#2A3BCF] px-8 py-4 text-white font-semibold shadow-lg shadow-blue-900/20 hover:opacity-95 transition-all duration-200 hover:scale-105"
              aria-label="Contact & Get a Demo"
            >
              Contact & Get a Demo
            </Link>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <Container className="py-16 md:py-24">
        {/* Intro Section */}
        <section className="mb-16 md:mb-24">
          <div className="prose prose-invert prose-lg max-w-none">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Temrink Inc.
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Temrink is a proudly Canadian technology solutions provider
                helping small and medium-sized businesses unlock the full
                potential of Microsoft 365, AI, and automation.
              </p>
              <p>
                As a certified Microsoft Partner, we deliver tailored solutions
                that improve productivity, reduce costs, and strengthen security
                without disrupting existing workflows.
              </p>
              <p>
                From Microsoft 365 Copilot to secure cloud migrations,
                AI-powered automation, and ongoing IT support, Temrink is your
                trusted partner for digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Why Microsoft 365 Copilot Matters */}
        <section className="mb-16 md:mb-24">
          <div className="rounded-2xl bg-gradient-to-b from-slate-800/90 via-slate-700/90 to-slate-800/90 ring-1 ring-slate-600/50 shadow-2xl backdrop-blur-sm p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Microsoft 365 Copilot Matters
            </h2>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Microsoft 365 Copilot integrates seamlessly across your entire
              productivity suite, bringing AI assistance directly into the
              applications your team uses every day:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Core Applications
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-[#2A3BCF] mr-2">•</span>
                    <span>
                      <strong className="text-white">Outlook</strong> – Smart
                      email drafting and summarization
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2A3BCF] mr-2">•</span>
                    <span>
                      <strong className="text-white">Word</strong> – Document
                      creation and editing assistance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2A3BCF] mr-2">•</span>
                    <span>
                      <strong className="text-white">Excel</strong> – Data
                      analysis and formula generation
                    </span>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white mb-3">
                  Collaboration Tools
                </h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start">
                    <span className="text-[#2A3BCF] mr-2">•</span>
                    <span>
                      <strong className="text-white">PowerPoint</strong> –
                      Presentation creation and design
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2A3BCF] mr-2">•</span>
                    <span>
                      <strong className="text-white">Teams</strong> – Meeting
                      summaries and real-time assistance
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#2A3BCF] mr-2">•</span>
                    <span>
                      <strong className="text-white">SharePoint</strong> –
                      Content management and search
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-600/50">
              <h3 className="text-xl font-semibold text-white mb-4">
                Key Capabilities
              </h3>
              <ul className="grid md:grid-cols-2 gap-3 text-slate-300">
                <li className="flex items-start">
                  <span className="text-[#2A3BCF] mr-2">✓</span>
                  <span>Draft emails and documents</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2A3BCF] mr-2">✓</span>
                  <span>Summarize meetings and conversations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2A3BCF] mr-2">✓</span>
                  <span>Analyze data and generate insights</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2A3BCF] mr-2">✓</span>
                  <span>Create presentations instantly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2A3BCF] mr-2">✓</span>
                  <span>Automate repetitive work</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Copilot Chat Agents & Automation */}
        <section className="mb-16 md:mb-24">
          <div className="rounded-2xl bg-gradient-to-b from-slate-800/90 via-slate-700/90 to-slate-800/90 ring-1 ring-slate-600/50 shadow-2xl backdrop-blur-sm p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Copilot Chat Agents & Automation
            </h2>
            <div className="space-y-6 text-slate-300 leading-relaxed">
              <p>
                <strong className="text-white">Copilot Chat agents</strong> are
                custom AI assistants that can be trained to handle specific
                business tasks, answer questions, and automate workflows. These
                agents integrate directly with your Microsoft 365 environment,
                accessing your data securely while maintaining compliance and
                governance standards.
              </p>
              <p>
                SMBs can create powerful agents with minimal overhead. Using
                natural language, you can design agents that handle customer
                inquiries, process documents, generate reports, or manage
                routine administrative tasks—all without extensive technical
                expertise.
              </p>
              <p>
                <strong className="text-white">Temrink helps teams</strong>{" "}
                design, deploy, and govern agents effectively. We work with you
                to identify automation opportunities, build secure agent
                workflows, and ensure proper governance so your AI solutions
                scale safely and efficiently.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Content Blocks */}
        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Featured Content
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900/90 ring-1 ring-slate-600/50 shadow-xl backdrop-blur-sm overflow-hidden hover:ring-slate-500/70 hover:shadow-2xl transition-all duration-300"
              >
                {/* Thumbnail placeholder */}
                <div className="aspect-video bg-gradient-to-br from-[#2A3BCF]/20 to-[#DD0000]/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-white/10 flex items-center justify-center">
                      {post.type === "Video" ? (
                        <svg
                          className="w-8 h-8 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      ) : (
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                          />
                        </svg>
                      )}
                    </div>
                    <span className="text-xs font-semibold text-white/80 uppercase tracking-wide">
                      {post.type}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-[#2A3BCF] uppercase tracking-wide">
                      {post.type}
                    </span>
                    <span className="text-slate-500">•</span>
                    <time className="text-xs text-slate-400">
                      {post.date} · {post.time}
                    </time>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {post.title}
                  </h3>
                  <p className="text-slate-300 text-sm mb-4 leading-relaxed">
                    {post.description}
                  </p>
                  <Link
                    href="#"
                    className="inline-flex items-center text-[#2A3BCF] font-semibold hover:text-[#010775] transition-colors text-sm"
                    aria-label={`Read more about ${post.title}`}
                  >
                    Read more
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Why Businesses Choose Temrink */}
        <section className="mb-16 md:mb-24">
          <div className="rounded-2xl bg-gradient-to-b from-slate-800/90 via-slate-700/90 to-slate-800/90 ring-1 ring-slate-600/50 shadow-2xl backdrop-blur-sm p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Businesses Choose Temrink
            </h2>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start">
                <span className="text-[#2A3BCF] mr-3 mt-1">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div>
                  <strong className="text-white">
                    Microsoft Partner expertise
                  </strong>
                  <p className="text-sm mt-1">
                    Certified Microsoft Partner with deep expertise in Microsoft 365, Copilot, and enterprise solutions
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#2A3BCF] mr-3 mt-1">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div>
                  <strong className="text-white">
                    SMB-focused delivery
                  </strong>
                  <p className="text-sm mt-1">
                    Solutions designed specifically for small and medium businesses, not enterprise complexity
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#2A3BCF] mr-3 mt-1">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div>
                  <strong className="text-white">
                    Secure-by-design implementations
                  </strong>
                  <p className="text-sm mt-1">
                    Security and compliance built into every solution from the ground up
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#2A3BCF] mr-3 mt-1">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div>
                  <strong className="text-white">
                    Automation-first mindset
                  </strong>
                  <p className="text-sm mt-1">
                    We identify and automate repetitive tasks to free your team for higher-value work
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-[#2A3BCF] mr-3 mt-1">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <div>
                  <strong className="text-white">
                    Ongoing support & optimization
                  </strong>
                  <p className="text-sm mt-1">
                    Continuous improvement, proactive monitoring, and optimization of your IT environment
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="mb-16 md:mb-24">
          <div className="rounded-2xl bg-gradient-to-r from-[#2A3BCF] to-[#010775] p-12 md:p-16 text-center shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to unlock the full value of Microsoft 365 and AI?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Let Temrink help you transform your business with Microsoft 365
              Copilot, AI agents, and automation solutions tailored for SMBs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-white px-8 py-4 text-[#2A3BCF] font-semibold shadow-xl hover:opacity-95 transition-all duration-200 hover:scale-105"
              aria-label="Contact & Get a Demo"
            >
              Contact & Get a Demo
            </Link>
          </div>
        </section>
      </Container>
    </main>
  );
}

