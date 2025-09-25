import Container from "@/components/Container";
import { aiRows } from "@/data/aiRows";

export default function AIQuickSummary() {
  return (
    <section id="ai" className="pt-16">
      <Container>
        <h2 className="text-2xl md:text-3xl font-bold">AI at a glance</h2>
        <p className="mt-3 text-slate-300 font-medium max-w-3xl leading-relaxed">
          Skimmable overview of major Copilot types and other AI licenses via Sherweb, plus best-fit industries.
        </p>

        <div className="mt-6 overflow-x-auto rounded-2xl border bg-background">
          <table className="min-w-[900px] w-full text-left text-sm">
            <thead className="border-b bg-muted/50 text-xs uppercase tracking-wide">
              <tr>
                <th className="p-4">Solution</th>
                <th className="p-4">Type</th>
                <th className="p-4">Key features</th>
                <th className="p-4">Best-fit industries</th>
              </tr>
            </thead>
            <tbody>
              {aiRows.map((r) => (
                <tr key={r.solution} className="border-b last:border-0 align-top">
                  <td className="p-4 font-medium">
                    {r.solution}
                    {r.notes ? <span className="block text-xs text-slate-400 mt-1 font-medium">{r.notes}</span> : null}
                  </td>
                  <td className="p-4">{r.type}</td>
                  <td className="p-4">
                    <ul className="list-disc pl-5 space-y-1">
                      {r.keyFeatures.map((k) => <li key={k}>{k}</li>)}
                    </ul>
                  </td>
                  <td className="p-4">
                    <ul className="list-disc pl-5 space-y-1">
                      {r.bestFit.map((b) => <li key={b}>{b}</li>)}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-slate-400 font-medium">
          Sources: Microsoft / Google official docs and Sherweb marketplace listings.
        </p>
      </Container>
    </section>
  );
}
