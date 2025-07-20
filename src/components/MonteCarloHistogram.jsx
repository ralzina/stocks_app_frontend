import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend } from "recharts";

export default function MonteCarloHistogram ({ data }) {
    return (
        <ResponsiveContainer width="80%" height={400}>
            <BarChart 
                data={data}
                margin={{ bottom: 10, left: 1 }}
            >
                <CartesianGrid stroke="#ccc" />
                <XAxis 
                    dataKey="price"
                    tickFormatter={(price) => `$${price.toFixed(2)}`}
                    label={{ value: 'Price', position: 'insideBottom', offset: -10 }}
                />

                <YAxis 
                    tickCount={10}
                    label={{ value: 'Count', angle: -90, position: 'insideLeft' }}
                />
                <Tooltip 
                    labelFormatter={(value) => `Price: $${value.toFixed(2)}`}
                    formatter={(value) => [value, 'Count']}
                />
                <Bar dataKey="count" fill="#1E40AF" name="Price Count" />
            </BarChart>
        </ResponsiveContainer>
    );
}