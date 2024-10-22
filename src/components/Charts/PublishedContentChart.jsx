// PublishedContentChart.jsx
import PropTypes from "prop-types";
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

const PublishedContentChart = ({
  data,
  barColors,
  barSize = 20,
  xDataKey = "name",
  chartHeight = 400,
}) => (
  <ResponsiveContainer width="100%" height={chartHeight}>
    <BarChart
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      barGap={10}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={xDataKey} />
      <YAxis />
      <Tooltip />
      <Legend />
      {Object.keys(data[0])
        .filter((key) => key !== xDataKey)
        .map((key) => (
          <Bar
            key={key}
            dataKey={key}
            fill={barColors[key] || "#8884d8"} // Default color if not provided
            barSize={barSize}
          />
        ))}
    </BarChart>
  </ResponsiveContainer>
);

PublishedContentChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  barColors: PropTypes.objectOf(PropTypes.string).isRequired,
  barSize: PropTypes.number,
  xDataKey: PropTypes.string,
  chartHeight: PropTypes.number,
};

export default PublishedContentChart;
