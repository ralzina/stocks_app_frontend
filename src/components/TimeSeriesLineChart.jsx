import React from 'react';
import{
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';

const TimeSeriesLineChart = ({ data }) => {

    console.log("Chart data:", data);

    return (
        <ResponsiveContainer width="80%" height={400}>
            <LineChart data={data}>
                <CartesianGrid stroke="#ccc" />
                <XAxis 
                    dataKey="date" 
                    tickFormatter={(str) => {
                        const date = new Date(str);
                        const month = String(date.getMonth() + 1).padStart(2, '0');
                        const day = String(date.getDate()).padStart(2, '0');
                        return `${month}-${day}`;
                      }}
                />
                <YAxis tickCount={10} tickFormatter={(value) => `$${value}`} />
                <Tooltip
                    labelFormatter={(value) => {
                        const date = new Date(value);
                        const formatted = `${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
                        return `Date: ${formatted}`;
                    }}
                    formatter={(value, name) => [`$${value.toFixed(2)}`, name]}
                />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="actual"
                    stroke="#374151"
                    dot={false}
                    isAnimationActive={false}
                    strokeWidth={3}
                />
                <Line
                    type="monotone"
                    dataKey="predicted"
                    stroke="#1E40AF"
                    dot={false}
                    isAnimationActive={false}
                    strokeWidth={3}
                />
            </LineChart>
        </ResponsiveContainer>
    )
};

export default TimeSeriesLineChart;