// StackedBarChart.jsx
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

const StackedBarChart = ({
  data,
  xAxisKey,
  bars, // Array of bar configurations
  width = "100%",
  height = 400,
  margin = { top: 20, right: 30, left: 20, bottom: 5 },
  showLegend = true,
  showGrid = true,
}) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <BarChart data={data} margin={margin}>
        {showGrid && <CartesianGrid strokeDasharray="3 3" />}
        <XAxis dataKey={xAxisKey} />
        <YAxis />
        <Tooltip />
        {showLegend && <Legend />}
        {bars.map((bar) => (
          <Bar
            key={bar.dataKey}
            dataKey={bar.dataKey}
            stackId={bar.stackId}
            fill={bar.color}
          />
        ))}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default StackedBarChart;
