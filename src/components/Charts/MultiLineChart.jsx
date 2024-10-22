// MultiLineChart.jsx
import PropTypes from "prop-types";
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

const MultiLineChart = ({
  data,
  lineColors,
  xDataKey = "month",
  chartHeight = 400,
}) => {
  return (
    <ResponsiveContainer width="100%" height={chartHeight}>
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
        <XAxis dataKey={xDataKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        {Object.keys(lineColors).map((key) => (
          <Line
            key={key}
            type="monotone"
            dataKey={key}
            stroke={lineColors[key]}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};

MultiLineChart.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  lineColors: PropTypes.objectOf(PropTypes.string).isRequired,
  xDataKey: PropTypes.string,
  chartHeight: PropTypes.number,
};

export default MultiLineChart;
