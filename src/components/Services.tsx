// src/components/Services.tsx
import Image from "next/image";
import Container from "./Container";

const BRAND_BLUE = "#010775";

const services = [
  {
    key: "licensing",
    title: "Licensing (M365 & Google)",
    img: "/images/licensing.webp",
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
    <section id="features" className="py-16 md:py-24 bg-muted/30">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold">What we provide</h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Four core services to stabilize your IT and unlock AI-powered productivity.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.key}
              className="rounded-2xl border bg-background shadow-sm ring-1 ring-slate-200"
            >
              {/* Edge-to-edge image with rounded top corners (no white space) */}
              <div className="overflow-hidden rounded-t-2xl">
                <Image
                  src={s.img}
                  alt={`${s.title} illustration`}
                  width={1280}
                  height={720}
                  className="h-56 w-full object-cover md:h-64"
                  priority={s.key === "licensing"}
                />
              </div>

              <div className="p-6 md:p-7">
                <h3
                  className="text-lg md:text-xl font-semibold"
                  style={{ color: BRAND_BLUE }}
                >
                  {s.title}
                </h3>

                {/* 4 crisp bullets — easy to scan */}
                <ul className="mt-4 space-y-2.5 text-[15px] leading-relaxed">
                  {s.points.map((p, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span
                        className="mt-2 h-2.5 w-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: BRAND_BLUE }}
                      />
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
