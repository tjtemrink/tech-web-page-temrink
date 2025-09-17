import { decisionMatrixData } from "@/data/decisionMatrix";

export default function DecisionMatrix() {
  return (
    <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
      <table className="min-w-[1000px] w-full text-left">
        <thead className="border-b border-slate-200 bg-gradient-to-r from-[#010775]/5 to-[#2A3BCF]/5">
          <tr>
            <th scope="col" className="p-6 text-sm font-bold text-[#010775] uppercase tracking-wide">Users</th>
            <th scope="col" className="p-6 text-sm font-bold text-[#010775] uppercase tracking-wide">Licenses</th>
            <th scope="col" className="p-6 text-sm font-bold text-[#010775] uppercase tracking-wide">Security</th>
            <th scope="col" className="p-6 text-sm font-bold text-[#010775] uppercase tracking-wide">Devices Needed?</th>
            <th scope="col" className="p-6 text-sm font-bold text-[#010775] uppercase tracking-wide">Recommendation</th>
          </tr>
        </thead>
        <tbody>
          {decisionMatrixData.map((row, index) => (
            <tr 
              key={index} 
              className={`border-b border-slate-100 last:border-0 align-top hover:bg-slate-50/50 transition-colors ${
                index % 2 === 0 ? 'bg-white' : 'bg-slate-50/30'
              }`}
            >
              <td className="p-6">
                <div className="font-semibold text-slate-900 text-sm leading-tight">{row.users}</div>
              </td>
              <td className="p-6">
                <div className="text-sm text-slate-700">{row.licenses}</div>
              </td>
              <td className="p-6">
                <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${
                  row.security === 'High' 
                    ? 'bg-red-100 text-red-800 border border-red-200' 
                    : 'bg-green-100 text-green-800 border border-green-200'
                }`}>
                  {row.security}
                </span>
              </td>
              <td className="p-6">
                <div className="text-sm text-slate-700">{row.devicesNeeded}</div>
              </td>
              <td className="p-6">
                <div className="text-sm text-slate-900 font-medium leading-relaxed">{row.recommendation}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
      <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
        <p className="text-xs text-slate-600 leading-relaxed">
          <strong>Notes:</strong> Device Leasing is optional; recommend only if the client needs new hardware or a refresh cycle. 
          For incidents/urgent needs, surface Emergency IT Support (hourly) without showing rates. 
          If the user mentions automation/chatbots, suggest Cloud & Automation Consulting and relevant add-ons.
        </p>
      </div>
    </div>
  );
}
