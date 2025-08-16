// src/components/Pricing/PricingColumn.tsx
import clsx from "clsx";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { IPricing } from "@/types";

interface Props {
  // allow an optional badge on the tier without using `any`
  tier: IPricing & { badge?: string };
  highlight?: boolean;
}

const BRAND_BLUE = "#010775";
const BRAND_RED = "#DD0000";

function formatPrice(val: IPricing["price"]) {
  if (typeof val === "number") return val.toFixed(2);
  const num = Number(val);
  return Number.isFinite(num) ? num.toFixed(2) : String(val);
}

const PricingColumn: React.FC<Props> = ({ tier, highlight }) => {
  const { name, price, features, badge } = tier;

  const isNumeric = typeof price === "number" || Number.isFinite(Number(price));
  const displayPrice = isNumeric ? `$${formatPrice(price)}` : String(price);

  const buttonClasses = clsx(
    "w-full py-3 px-4 rounded-full font-semibold transition-opacity shadow-md text-white hover:opacity-95",
    highlight ? "bg-[var(--brand-red)]" : "bg-[var(--brand-blue)]"
  );

  // Strongly-typed CSS variables (avoids `any`)
  const brandVars =
    {
      "--brand-blue": BRAND_BLUE,
      "--brand-red": BRAND_RED,
    } as React.CSSProperties & Record<"--brand-blue" | "--brand-red", string>;

  return (
    <div
      className={clsx(
        "w-full max-w-sm mx-auto bg-white rounded-xl border border-gray-200 lg:max-w-full",
        { "shadow-lg": highlight }
      )}
      style={brandVars}
    >
      <div className="p-6 border-b border-gray-200 rounded-t-xl">
        {/* Badge (optional) */}
        {badge && (
          <span className="mb-2 inline-flex items-center rounded-full bg-[color:var(--brand-blue)]/10 text-[color:var(--brand-blue)] px-3 py-1 text-xs font-semibold">
            {badge}
          </span>
        )}

        <h3 className="text-2xl font-semibold mb-3">{name}</h3>

        <div className="mb-6 flex items-end gap-2">
          <span className="text-3xl md:text-5xl font-extrabold text-[color:var(--brand-blue)]">
            {displayPrice}
          </span>
          {isNumeric && (
            <span className="ml-1 text-sm font-normal text-gray-600">
              /mo <sup>*</sup> <span className="align-middle">annual pricing</span>
            </span>
          )}
        </div>

        <button className={buttonClasses}>Get Started</button>
      </div>

      <div className="p-6 mt-1">
        <p className="font-bold mb-0">FEATURES</p>
        <p className="text-foreground-accent mb-5">Everything in basic, plus...</p>

        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <BsFillCheckCircleFill
                className="h-5 w-5 mr-2"
                style={{ color: BRAND_BLUE }}
              />
              <span className="text-foreground-accent">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingColumn;
