// src/components/Services.tsx
import Image from "next/image";
import Container from "./Container";

const BRAND_BLUE = "#010775";

const services = [
  {
    key: "licensing",
    title: "Licensing (M365 & Google)",
    img: "/images/licensing.webp",
    blurb: "Right-size and manage your Microsoft 365 or Google Workspace licenses with security best practices.",
    points: [
      "Consolidated billing & cost reporting",
      "Right-size seats to cut waste",
      "Security baseline & governance",
      "Monthly usage & savings report",
    ],
  },
  {
    key: "daas",
    title: "Device as a Service",
    img: "/images/daas.webp",
    blurb: "Standardized Windows/Mac builds, zero‑touch provisioning, and lifecycle management.",
    points: [
      "Std. Windows/Mac builds & zero-touch",
      "Bitdefender protection & patching",
      "Lifecycle: procurement→refresh",
      "Inventory & asset tracking",
    ],
  },
  {
    key: "ai",
    title: "AI & Automation",
    img: "/images/ai.webp",
    blurb: "Roll out Copilot and automate high‑leverage workflows to boost productivity.",
    points: [
      "Copilot readiness, rollout & training",
      "Automate 2–3 high-leverage workflows",
      "Power Automate / Logic Apps",
      "Guardrails, governance & controls",
    ],
  },
  {
    key: "helpdesk",
    title: "IT Helpdesk Support",
    img: "/images/helpdesk.webp",
    blurb: "Responsive support with clear SLAs and proactive monitoring to keep teams moving.",
    points: [
      "Responsive support with clear SLAs",
      "On/Off-boarding & access requests",
      "Monitoring & monthly optimization",
      "Priority incident handling",
    ],
  },
];

export default function Services() {
  return (
    <section id="features" className="py-16 md:py-24 relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#F5F7FF] via-white to-[#F8FAFF]" />
      <Container>
        <div className="text-center">
          <span className="inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-semibold tracking-wide bg-[#010775]/10 text-[#010775]">
            CORE SERVICES
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-extrabold tracking-tight">What we provide</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Four core services to stabilize your IT and unlock AI‑powered productivity.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((s) => (
            <article
              key={s.key}
              className="group rounded-2xl border bg-white/70 shadow-sm ring-1 ring-slate-200 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              {/* Edge-to-edge image with rounded top corners (no white space) */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <Image
                  src={s.img}
                  alt={`${s.title} illustration`}
                  width={1280}
                  height={720}
                  className="h-56 w-full object-cover md:h-56"
                  priority={s.key === "licensing"}
                />
                {/* top gradient for text legibility */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/20 to-transparent" />
              </div>

              <div className="p-6 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold" style={{ color: BRAND_BLUE }}>
                  {s.title}
                </h3>

                {/* one‑line blurb */}
                {s.blurb ? (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {s.blurb}
                  </p>
                ) : null}

                {/* bullets */}
                <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed">
                  {s.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[color:var(--brand-blue,#010775)] text-white">
                        <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M16.7 5.3a1 1 0 010 1.4l-7.5 7.5a1 1 0 01-1.4 0l-3.5-3.5a1 1 0 111.4-1.4l2.8 2.8 6.8-6.8a1 1 0 011.4 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
