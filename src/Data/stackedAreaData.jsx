// data.jsx
export const stackedAreaData = [
  { month: "February", Pending: 20, Approved: 10, Published: 10 },
  { month: "March", Pending: 15, Approved: 12, Published: 18 },
  { month: "April", Pending: 25, Approved: 20, Published: 30 },
  { month: "May", Pending: 40, Approved: 30, Published: 45 },
  { month: "June", Pending: 30, Approved: 50, Published: 60 },
  { month: "July", Pending: 20, Approved: 35, Published: 70 },
];

export const areaColors = {
  Pending: { stroke: "#FF0000", fill: "rgba(255, 0, 0, 0.4)" }, // Red
  Approved: { stroke: "#0088FE", fill: "rgba(0, 136, 254, 0.4)" }, // Blue
  Published: { stroke: "#00C49F", fill: "rgba(0, 196, 159, 0.4)" }, // Green
};
