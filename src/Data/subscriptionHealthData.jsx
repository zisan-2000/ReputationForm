// data.jsx
export const subscriptionHealthData = [
  { date: "25/06", succeeded: 8, failed: -3 },
  { date: "26/06", succeeded: 6, failed: -2 },
  { date: "27/06", succeeded: 5, failed: -3 },
  { date: "28/06", succeeded: 6, failed: -4 },
  { date: "29/06", succeeded: 7, failed: -2 },
  { date: "30/06", succeeded: 5, failed: -3 },
  { date: "01/07", succeeded: 3, failed: -4 },
];

// Bar configurations
export const subscriptionBars = [
  { dataKey: "succeeded", stackId: "a", color: "#4caf50" }, // Green bar
  { dataKey: "failed", stackId: "a", color: "#f44336" }, // Red bar
];
