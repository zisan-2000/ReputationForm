// VerticalBarChart.jsx
import PropTypes from "prop-types";
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

const VerticalBarChart = ({
  data,
  barSize = 50,
  chartHeight = 400,
  xAxisDataKey = "name",
  yAxisDataKey = "value",
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
      <Bar dataKey={yAxisDataKey} barSize={barSize}>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.fill} />
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

VerticalBarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      fill: PropTypes.string.isRequired,
    }),
  ).isRequired,
  barSize: PropTypes.number,
  chartHeight: PropTypes.number,
  xAxisDataKey: PropTypes.string,
  yAxisDataKey: PropTypes.string,
};

export default VerticalBarChart;
