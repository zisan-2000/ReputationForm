// HorizontalBarChart.jsx
import PropTypes from "prop-types";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const HorizontalBarChart = ({
  data,
  barSize = 40,
  chartHeight = 400,
  xAxisType = "number",
  yAxisDataKey = "name",
}) => (
  <ResponsiveContainer width="100%" height={chartHeight}>
    <BarChart
      layout="vertical"
      data={data}
      margin={{
        top: 20,
        right: 30,
        left: 50,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type={xAxisType} />
      <YAxis type="category" dataKey={yAxisDataKey} />
      <Tooltip />
      <Bar dataKey="value" barSize={barSize} label={{ position: "right" }}>
        {data.map((entry, index) => (
          <Bar key={`bar-${index}`} fill={entry.fill}>
            <LabelList dataKey="value" position="right" />
          </Bar>
        ))}
      </Bar>
    </BarChart>
  </ResponsiveContainer>
);

HorizontalBarChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.number.isRequired,
      fill: PropTypes.string.isRequired,
    }),
  ).isRequired,
  barSize: PropTypes.number,
  chartHeight: PropTypes.number,
  xAxisType: PropTypes.string,
  yAxisDataKey: PropTypes.string,
};

export default HorizontalBarChart;
