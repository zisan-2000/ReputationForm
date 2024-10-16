import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Data based on the image you provided
const data = [
  { name: "Active", value: 105, fill: "#0088FE" }, // Blue
  { name: "Completed", value: 85, fill: "#00C49F" }, // Green
  { name: "Pending", value: 20, fill: "#FF8042" }, // Orange
];

const HorizontalBarChart2 = () => (
  <ResponsiveContainer width="100%" height={300}>
    <BarChart
      layout="vertical"
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 30,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" />
      <YAxis type="category" dataKey="name" />
      <Tooltip />
      <Bar dataKey="value" barSize={40} label={{ position: "right" }}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.fill} />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

export default HorizontalBarChart2;
