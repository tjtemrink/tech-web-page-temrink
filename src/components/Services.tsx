// src/components/Services.tsx
import Link from "next/link";
import Image from "next/image";
import Container from "./Container";

const services = [
  {
    key: "licensing",
    title: "Licensing (M365 & Google)",
    img: "/images/licensing.webp",
    points: [
      "Consolidated billing and cost reporting",
      "Right-size seats to cut waste",
      "Governance guidance and security baseline",
    ],
  },
  {
    key: "daas",
    title: "Device as a Service",
    img: "/images/daas.webp",
    points: [
      "Standardized Windows/Mac builds & zero-touch setup",
      "Bitdefender protection, patching & updates",
      "Lifecycle: procurement, warranty, refresh",
    ],
  },
  {
    key: "ai",
    title: "AI & Automation",
    img: "/images/ai.webp",
    points: [
      "Copilot readiness, rollout & training",
      "Automate 2–3 high-leverage workflows first",
      "Integrations with Power Automate / Logic Apps",
    ],
  },
  {
    key: "helpdesk",
    title: "IT Helpdesk Support",
    img: "/images/helpdesk.webp",
    points: [
      "Responsive support with clear SLAs",
      "On/Off-boarding & access requests",
      "Monitoring and monthly optimization",
    ],
  },
];

export default function Services() {
  return (
    <section id="features" className="relative py-20 md:py-28">
      {/* gives the section its own “band” feel */}
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-slate-50/90 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-slate-50/70 to-transparent" />

      <Container>
        <header className="text-center">
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-slate-500">
            Services
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-900">
            What we provide
          </h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">
            Four core services to stabilize your IT and unlock AI-powered productivity.
          </p>
        </header>

        {/* vertical stack; each card is its own panel */}
        <div className="mt-12 space-y-10 md:space-y-14">
          {services.map((s) => (
            <article
              key={s.key}
              className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              {/* FULL image visible (object-contain) */}
              <div className="w-full bg-slate-50 flex items-center justify-center">
                <Image
                  src={s.img}
                  alt={s.title}
                  width={1600}
                  height={900}
                  priority={s.key === "licensing"}
                  className="h-56 md:h-80 w-auto object-contain"
                />
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-semibold text-slate-900">{s.title}</h3>

                {/* clear, airy bullets; wrap to 1–3 columns on larger screens */}
                <ul className="mt-4 grid gap-2 text-slate-700 sm:grid-cols-2 lg:grid-cols-3">
                  {s.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#010775]" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-2xl bg-[#010775] px-5 py-2.5 text-white font-semibold shadow-md hover:opacity-95"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
