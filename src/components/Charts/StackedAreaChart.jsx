// StackedAreaChart.jsx
import PropTypes from "prop-types";
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

const StackedAreaChart = ({
  data,
  areaColors,
  xDataKey = "month",
  chartHeight = 400,
}) => (
  <ResponsiveContainer width="100%" height={chartHeight}>
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
      <XAxis dataKey={xDataKey} />
      <YAxis />
      <Tooltip />
      <Legend verticalAlign="bottom" height={36} />
      {Object.keys(areaColors).map((key) => (
        <Area
          key={key}
          type="monotone"
          dataKey={key}
          stackId="1"
          stroke={areaColors[key].stroke}
          fill={areaColors[key].fill}
          dot={{ fill: areaColors[key].stroke }}
          activeDot={{ r: 8 }}
        />
      ))}
    </AreaChart>
  </ResponsiveContainer>
);

StackedAreaChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  areaColors: PropTypes.objectOf(
    PropTypes.shape({
      stroke: PropTypes.string.isRequired,
      fill: PropTypes.string.isRequired,
    }),
  ).isRequired,
  xDataKey: PropTypes.string,
  chartHeight: PropTypes.number,
};

export default StackedAreaChart;
