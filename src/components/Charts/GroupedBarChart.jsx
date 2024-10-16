import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Data based on the image you provided
const data = [
  { name: "Technical", Completed: 45, Pending: 18 },
  { name: "Schema", Completed: 32, Pending: 5 },
  { name: "PageSpeed", Completed: 16, Pending: 3 },
];

const GroupedBarChart = () => (
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
      <Legend />

      {/* Completed Bars */}
      <Bar dataKey="Completed" fill="#0088FE" barSize={40}>
        <LabelList dataKey="Completed" position="top" />
      </Bar>

      {/* Pending Bars */}
      <Bar dataKey="Pending" fill="#FF8042" barSize={40}>
        <LabelList dataKey="Pending" position="top" />
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

export default GroupedBarChart;
