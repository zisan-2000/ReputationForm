// data.jsx
export const pyramidChartData = [
  { value: 40, name: "Onboarding", color: "#0088FE" }, // Blue
  { value: 80, name: "Planning", color: "#00C49F" }, // Green
  { value: 120, name: "Paused", color: "#A020F0" }, // Purple
  { value: 160, name: "Active", color: "#FF8042" }, // Orange
];

export const pyramidChartOptions = {
  title: {
    left: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{b}: {c}",
  },
  sort: "ascending", // Ascending pyramid
  itemStyle: {
    borderColor: "#fff",
    borderWidth: 2,
  },
};
