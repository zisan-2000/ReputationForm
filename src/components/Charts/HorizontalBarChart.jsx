import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Sample data based on the image
const data = [
  { name: "Great", value: 15, fill: "#0088FE" },
  { name: "Good", value: 35, fill: "#00C49F" },
  { name: "Need Improvement", value: 8, fill: "#A020F0" },
  { name: "Bad", value: 10, fill: "#FF8042" },
  { name: "Critical", value: 3, fill: "#FF0000" },
];

const HorizontalBarChart = () => (
  <ResponsiveContainer width="100%" height={400}>
    <BarChart
      layout="vertical"
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 50,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" />
      <YAxis type="category" dataKey="name" />
      <Tooltip />
      <Bar dataKey="value" barSize={40} label={{ position: "right" }}>
        {/* Use colors based on the data */}
        {data.map((entry, index) => (
          <Bar key={`bar-${index}`} fill={entry.fill}>
            <LabelList dataKey="value" position="right" />
          </Bar>
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

export default HorizontalBarChart;
