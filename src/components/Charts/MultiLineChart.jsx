import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Sample data based on your image
const data = [
  {
    month: "February",
    "Local SEO": 4000,
    "Link Building": 5000,
    "Website Optimization": 10000,
    Content: 7500,
    Communication: 7200,
    Reporting: 8000,
    Analytics: 8500,
  },
  {
    month: "March",
    "Local SEO": 9000,
    "Link Building": 8000,
    "Website Optimization": 9200,
    Content: 8500,
    Communication: 7600,
    Reporting: 8300,
    Analytics: 9000,
  },
  {
    month: "April",
    "Local SEO": 9500,
    "Link Building": 7000,
    "Website Optimization": 10000,
    Content: 8800,
    Communication: 8100,
    Reporting: 8600,
    Analytics: 9500,
  },
  {
    month: "May",
    "Local SEO": 11000,
    "Link Building": 10000,
    "Website Optimization": 12000,
    Content: 11500,
    Communication: 9200,
    Reporting: 9700,
    Analytics: 10800,
  },
  {
    month: "June",
    "Local SEO": 12500,
    "Link Building": 10500,
    "Website Optimization": 12800,
    Content: 12000,
    Communication: 10000,
    Reporting: 11200,
    Analytics: 12000,
  },
  {
    month: "July",
    "Local SEO": 13000,
    "Link Building": 11000,
    "Website Optimization": 14500,
    Content: 12500,
    Communication: 10500,
    Reporting: 12500,
    Analytics: 13500,
  },
];

const MultiLineChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart
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
        <Legend />

        {/* Multiple lines for each dataset */}
        <Line type="monotone" dataKey="Local SEO" stroke="#8884d8" />
        <Line type="monotone" dataKey="Link Building" stroke="#ff7300" />
        <Line type="monotone" dataKey="Website Optimization" stroke="#00C49F" />
        <Line type="monotone" dataKey="Content" stroke="#FF8042" />
        <Line type="monotone" dataKey="Communication" stroke="#0088FE" />
        <Line type="monotone" dataKey="Reporting" stroke="#A020F0" />
        <Line type="monotone" dataKey="Analytics" stroke="#FF0000" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default MultiLineChart;
