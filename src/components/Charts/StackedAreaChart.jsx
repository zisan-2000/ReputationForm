import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { month: "February", Pending: 20, Approved: 10, Published: 10 },
  { month: "March", Pending: 15, Approved: 12, Published: 18 },
  { month: "April", Pending: 25, Approved: 20, Published: 30 },
  { month: "May", Pending: 40, Approved: 30, Published: 45 },
  { month: "June", Pending: 30, Approved: 50, Published: 60 },
  { month: "July", Pending: 20, Approved: 35, Published: 70 },
];

const StackedAreaChart = () => (
  <ResponsiveContainer width="100%" height={400}>
    <AreaChart
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Legend verticalAlign="bottom" height={36} />

      {/* Area for Pending data */}
      <Area
        type="monotone"
        dataKey="Pending"
        stackId="1"
        stroke="#FF0000"
        fill="rgba(255, 0, 0, 0.4)"
        dot={{ fill: "#FF0000" }}
        activeDot={{ r: 8 }}
      />

      {/* Area for Approved data */}
      <Area
        type="monotone"
        dataKey="Approved"
        stackId="1"
        stroke="#0088FE"
        fill="rgba(0, 136, 254, 0.4)"
        dot={{ fill: "#0088FE" }}
        activeDot={{ r: 8 }}
      />

      {/* Area for Published data */}
      <Area
        type="monotone"
        dataKey="Published"
        stackId="1"
        stroke="#00C49F"
        fill="rgba(0, 196, 159, 0.4)"
        dot={{ fill: "#00C49F" }}
        activeDot={{ r: 8 }}
      />
    </AreaChart>
  </ResponsiveContainer>
);

export default StackedAreaChart;
