// PyramidChart3.jsx
import * as echarts from "echarts";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";

const PyramidChart3 = ({ data, options, chartHeight = "300px" }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const defaultOptions = {
      series: [
        {
          name: "Data",
          type: "funnel",
          data: data.map((item) => ({
            ...item,
            itemStyle: { color: item.color }, // Set individual colors
          })),
          label: {
            position: "inside",
            formatter: "{b} ({c})",
          },
          ...options,
        },
      ],
    };

    chartInstance.setOption(defaultOptions);

    // Cleanup on component unmount
    return () => {
      chartInstance.dispose();
    };
  }, [data, options]);

  return <div ref={chartRef} style={{ width: "100%", height: chartHeight }} />;
};

PyramidChart3.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired, // Validate color
    }),
  ).isRequired,
  options: PropTypes.object,
  chartHeight: PropTypes.string,
};

export default PyramidChart3;
