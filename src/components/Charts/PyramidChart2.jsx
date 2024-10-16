import "./PyramidChart.css"; // CSS for custom styling

const data = [
  { value: 160, label: "Active", color: "#00C49F" },
  { value: 15, label: "Planning", color: "#0088FE" },
  { value: 7, label: "Onboarding", color: "#A020F0" },
  { value: 3, label: "Paused", color: "#FF8042" },
];

const PyramidChart = () => {
  return (
    <div className="pyramid-container">
      {data.map((item, index) => (
        <div
          key={index}
          className="pyramid-layer"
          style={{
            backgroundColor: item.color,
            height: `${item.value * 0.5}px`, // Adjust height based on value
            width: `${100 - index * 15}%`, // Adjust width as it goes up
          }}
        >
          <div className="label">
            <span className="value">{item.value}</span>
            <span className="label-text">{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PyramidChart;
