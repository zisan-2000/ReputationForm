import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Data based on your chart
const data = [
  {
    name: "June 1",
    Blogs: 15,
    Pages: 20,
    Press: 30,
    Videos: 35,
  },
  {
    name: "June 7",
    Blogs: 10,
    Pages: 15,
    Press: 25,
    Videos: 20,
  },
  {
    name: "June 14",
    Blogs: 25,
    Pages: 30,
    Press: 20,
    Videos: 25,
  },
  {
    name: "June 21",
    Blogs: 35,
    Pages: 25,
    Press: 30,
    Videos: 20,
  },
  {
    name: "June 27",
    Blogs: 20,
    Pages: 25,
    Press: 35,
    Videos: 40,
  },
];

const PublishedContentChart = () => (
  <ResponsiveContainer width="100%" height={400}>
    <BarChart
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      barGap={10} // Gap between grouped bars
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Blogs" fill="#0088FE" barSize={20} />
      <Bar dataKey="Pages" fill="#FFBB28" barSize={20} />
      <Bar dataKey="Press" fill="#00C49F" barSize={20} />
      <Bar dataKey="Videos" fill="#FF8042" barSize={20} />
    </BarChart>
  </ResponsiveContainer>
);

export default PublishedContentChart;
