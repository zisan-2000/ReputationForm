// PieChartComponent.jsx
import PropTypes from "prop-types";
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const PieChartComponent = ({
  data,
  outerRadius = 150,
  chartHeight = 400,
  cx = "50%",
  cy = "50%",
}) => {
  return (
    <ResponsiveContainer width="100%" height={chartHeight}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx={cx}
          cy={cy}
          outerRadius={outerRadius}
          label={({ name, percent }) =>
            `${name} ${(percent * 100).toFixed(0)}%`
          }
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend verticalAlign="right" layout="vertical" />
      </PieChart>
    </ResponsiveContainer>
  );
};

PieChartComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
    }),
  ).isRequired,
  outerRadius: PropTypes.number,
  chartHeight: PropTypes.number,
  cx: PropTypes.string,
  cy: PropTypes.string,
};

export default PieChartComponent;
