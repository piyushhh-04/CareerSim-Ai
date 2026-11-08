import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, AreaChart, Area, BarChart, Bar } from "recharts";

export default function Charts({ data }) {
  return (
    <div className="grid gap-6 xl:grid-cols-2">
      <div className="rounded-[2rem] border border-[#eadcc9] bg-[#fffaf4] p-6 shadow-[0_12px_30px_rgba(93,86,79,0.05)]">
        <h3 className="mb-4 text-xl font-semibold text-[#1f1b18]">Salary Growth</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <CartesianGrid stroke="rgba(120, 104, 91, 0.18)" />
              <XAxis dataKey="name" tick={{ fill: "#6b625b", fontSize: 12 }} />
              <YAxis tick={{ fill: "#6b625b", fontSize: 12 }} tickFormatter={(value) => `$${value}k`} />
              <Tooltip formatter={(value) => [`$${value}k`, "Salary"]} />
              <Area type="monotone" dataKey="salary" stroke="#c7774b" fill="#c7774b" fillOpacity={0.2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-[2rem] border border-[#eadcc9] bg-[#fffaf4] p-6 shadow-[0_12px_30px_rgba(93,86,79,0.05)]">
        <h3 className="mb-4 text-xl font-semibold text-[#1f1b18]">Stress & Balance</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid stroke="rgba(120, 104, 91, 0.18)" />
              <XAxis dataKey="name" tick={{ fill: "#6b625b", fontSize: 12 }} />
              <YAxis tick={{ fill: "#6b625b", fontSize: 12 }} />
              <Tooltip />
              <Line type="monotone" dataKey="stress" stroke="#b9544f" strokeWidth={3} />
              <Line type="monotone" dataKey="balance" stroke="#2f6a4a" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="rounded-[2rem] border border-[#eadcc9] bg-[#fffaf4] p-6 shadow-[0_12px_30px_rgba(93,86,79,0.05)] xl:col-span-2">
        <h3 className="mb-4 text-xl font-semibold text-[#1f1b18]">Demand Timeline</h3>
        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid stroke="rgba(120, 104, 91, 0.18)" />
              <XAxis dataKey="name" tick={{ fill: "#6b625b", fontSize: 12 }} />
              <YAxis tick={{ fill: "#6b625b", fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="demand" radius={[8, 8, 0, 0]} fill="#8b4e2a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
