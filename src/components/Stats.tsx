import { BsCheckCircleFill } from "react-icons/bs";

const BRAND_BLUE = "#010775";

const items = [
  { name: "Aurora Chamber of Commerce" },
  { name: "Vaughan Chamber of Commerce" },
  { name: "Toronto Entrepreneurship Association (TEA)" },
];

const Stats: React.FC = () => {
  return (
    <section id="affiliations" className="py-20 lg:py-28 bg-slate-800/30">
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="text-2xl md:text-3xl font-bold text-white">
          Affiliations & Memberships
        </h3>
        <p className="mt-2 text-slate-300 font-medium">
          Temrink is an active member of business and entrepreneurship communities in the GTA.
        </p>

        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((i) => (
            <li
              key={i.name}
              className="flex items-start gap-3 rounded-2xl bg-white p-4 ring-1 ring-slate-600/50 shadow-lg"
            >
              <BsCheckCircleFill className="h-5 w-5 text-[#2A3BCF]" />
              <span className="font-semibold text-slate-900">{i.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Stats;
