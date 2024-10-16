import * as echarts from "echarts";
import { useEffect, useRef } from "react";

const PyramidChart3 = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current);

    const option = {
      title: {
        text: "Pyramid Chart ",
        left: "center",
      },
      tooltip: {
        trigger: "item",
        formatter: "{b}: {c}",
      },
      series: [
        {
          name: "Data",
          type: "funnel",
          sort: "ascending", // Makes it appear like an ascending pyramid
          data: [
            { value: 40, name: "Onboarding" },
            { value: 80, name: "Planning" },
            { value: 120, name: "Paused" },
            { value: 160, name: "Active" },
          ],
          label: {
            position: "inside",
            formatter: "{b} ({c})",
          },
          itemStyle: {
            borderColor: "#fff",
            borderWidth: 2,
          },
        },
      ],
    };

    chartInstance.setOption(option);

    // Cleanup the chart on component unmount
    return () => {
      chartInstance.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "500px" }} />;
};

export default PyramidChart3;
