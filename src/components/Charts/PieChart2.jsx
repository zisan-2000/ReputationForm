import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

// Data for the chart
const data = [
  { name: "Completed", value: 130, fill: "#0088FE" }, // Blue color for Completed
  { name: "Pending", value: 17, fill: "#FF8042" }, // Orange color for Pending
];

const PieChart2 = () => (
  <ResponsiveContainer width="100%" height={400}>
    <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        label={({ name, value }) => `${value} Clients`}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.fill} />
        ))}
      </Pie>
      <Tooltip />
      <Legend verticalAlign="right" layout="vertical" />
    </PieChart>
  </ResponsiveContainer>
);

export default PieChart2;
