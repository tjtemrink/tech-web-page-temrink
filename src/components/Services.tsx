// src/components/Services.tsx
import Image from "next/image";
import Container from "./Container";
import { HiCheckCircle } from "react-icons/hi2";

const BRAND_BLUE = "#010775";

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
    <section id="features" className="py-16 md:py-24 bg-muted/30">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">What we provide</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Four core services to stabilize your IT and unlock AI-powered productivity.
          </p>
        </div>

        <div className="mt-10 grid gap-6">
          {services.map((s) => (
            <article
              key={s.key}
              className="grid overflow-hidden rounded-3xl bg-background ring-1 ring-slate-200 shadow-sm md:grid-cols-[1fr,1.25fr]"
            >
              {/* Image */}
              <div className="relative min-h-56 md:min-h-[240px]">
                <Image
                  src={s.img}
                  alt={`${s.title} illustration`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority={s.key === "licensing"}
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-7">
                <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                  {s.title}
                </h3>

                {/* Two-column bullets on sm+ to cut vertical scrolling */}
                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                  {s.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 text-[15px] leading-6 text-slate-700">
                      <HiCheckCircle
                        className="mt-0.5 h-5 w-5"
                        style={{ color: BRAND_BLUE }}
                        aria-hidden="true"
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className="mt-4 inline-flex items-center justify-center rounded-2xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-100"
                >
                  Get started
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
