// GroupedBarChart.jsx
import PropTypes from "prop-types";
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

const GroupedBarChart = ({
  data,
  barColors,
  barSize = 40,
  chartHeight = 400,
  xAxisDataKey = "name",
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
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey={xAxisDataKey} />
      <YAxis />
      <Tooltip />
      <Legend />
      {Object.keys(barColors).map((key) => (
        <Bar key={key} dataKey={key} fill={barColors[key]} barSize={barSize}>
          <LabelList dataKey={key} position="top" />
        </Bar>
      ))}
    </BarChart>
  </ResponsiveContainer>
);

GroupedBarChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  barColors: PropTypes.objectOf(PropTypes.string).isRequired,
  barSize: PropTypes.number,
  chartHeight: PropTypes.number,
  xAxisDataKey: PropTypes.string,
};

export default GroupedBarChart;
