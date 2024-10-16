import { ResponsiveFunnel } from "@nivo/funnel";

const data = [
  {
    id: "Onboarding",
    value: 7,
    label: "Onboarding",
    color: "#9C27B0", // Purple
  },
  {
    id: "Planning",
    value: 15,
    label: "Planning",
    color: "#2196F3", // Blue
  },
  {
    id: "Paused",
    value: 3,
    label: "Paused",
    color: "#FF5722", // Orange
  },
  {
    id: "Active",
    value: 160,
    label: "Active",
    color: "#4CAF50", // Green
  },
];

const PyramidChart = () => {
  return (
    <div style={{ height: 400 }}>
      <ResponsiveFunnel
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        direction="vertical"
        colors={{ datum: "color" }}
        borderWidth={20}
        labelColor={{
          from: "color",
          modifiers: [["darker", 3]],
        }}
        enableLabel={true}
        labelTextColor={{ from: "color", modifiers: [["darker", 2]] }}
        tooltip={({ id, value }) => (
          <div
            style={{
              padding: "5px 10px",
              background: "#fff",
              border: "1px solid #ccc",
            }}
          >
            <strong>{id}</strong>: {value}
          </div>
        )}
        valueFormat=" >-.0d" // This is now used only once.
        labelSkipWidth={12}
        labelSkipHeight={12}
        animate={true}
      />
    </div>
  );
};

export default PyramidChart;
