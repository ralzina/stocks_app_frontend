import { AreaChart, Area, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload || payload.length === 0) return null;

  const p5 = payload.find(p => p.dataKey === 'p5')?.value;
  const mean = payload.find(p => p.dataKey === 'mean')?.value;

  // We calculate p95 from the stacked area if necessary:
  const rangeArea = payload.find(p => typeof p.dataKey === 'function'); // dynamic area
  const p95 = rangeArea ? p5 + rangeArea.value : undefined;

  const date = new Date(label);
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const formattedLabel = `${month}-${day}`;

  return (
    <div style={{ background: "white", border: "1px solid #ccc", padding: "10px" }}>
      <p>Date: {formattedLabel}</p>
      <p className="text-gray-500">5th Percentile: ${p5?.toFixed(2)}</p>
      <p className="text-gray-500">95th Percentile: ${p95?.toFixed(2)}</p>
      <p className="text-gray-500">5-95th Percentile Range: ${(p95 - p5).toFixed(2)}</p>
      <p className="text-blue-800">Mean: ${mean?.toFixed(2)}</p>
    </div>
  );
};


export default function MonteCarloChart({ data }) {
  return (
    <ResponsiveContainer width="90%" height={400}>
      <AreaChart data={data}>
        <CartesianGrid stroke="#ccc" />
        <XAxis 
          dataKey="day" 
          tickFormatter={(str) => {
            const date = new Date(str);
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${month}-${day}`;
          }}
        />
        <YAxis />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        <Area type="linear" dataKey="p5" stroke="none" fill="transparent" stackId="range" />
        <Area type="linear" dataKey={(d) => d.p95 - d.p5} baseLine={(d) => d.p5} stroke="none" fill="#7B8595" stackId="range" name="5th–95th Percentile Range" />
        <Line type="monotone" dataKey="mean" stroke="#1E40AF" dot={false} name="Mean Price" />
      </AreaChart>
    </ResponsiveContainer>
  );
}