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

// Sample data based on the image
const data = [
  { name: "0 Weeks", value: 2, fill: "#FF0000" }, // Red
  { name: "5 Weeks", value: 8, fill: "#FF8042" }, // Orange
  { name: "4 Weeks", value: 12, fill: "#FFBB28" }, // Yellow
  { name: "3 Weeks", value: 32, fill: "#A020F0" }, // Purple
  { name: "2 Weeks", value: 22, fill: "#0088FE" }, // Blue
  { name: "1 Week", value: 12, fill: "#00C49F" }, // Green
];

const VerticalBarChart = () => (
  <ResponsiveContainer width="100%" height={400}>
    <BarChart
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey="value" barSize={50}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.fill} />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

export default VerticalBarChart;
