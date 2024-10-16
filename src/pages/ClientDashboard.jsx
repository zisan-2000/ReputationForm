import PyramidChart from "./../components/Charts/PyramidChart";

const data = [
  { name: "Active", value: 160, color: "#00C49F" },
  { name: "Paused", value: 3, color: "#FF8042" },
  { name: "Planning", value: 15, color: "#0088FE" },
  { name: "Onboarding", value: 7, color: "#FFBB28" },
];

const COLORS = ["#00C49F", "#FF8042", "#0088FE", "#FFBB28"];

const ClientDashboard = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="mb-6 text-2xl font-bold">Client Dashboard</h2>

      {/* Flex container for side-by-side layout */}
      <div className="flex flex-col lg:flex-row lg:space-x-4">
        {/* Total Active Clients and Campaign Breakdown */}
        <div className="mb-6 flex-1 rounded-lg bg-white p-4 shadow-lg">
          <h2 className="mb-4 text-xl font-bold">Total Active Clients</h2>
          <div className="mb-4">
            <h3 className="text-3xl font-bold text-green-500">160</h3>
          </div>

          {/* Clients by Campaign */}
          <h2>Client By Campaign</h2>
          <div className="flex space-x-4">
            {[
              { label: "Basic", count: 77 },
              { label: "Silver", count: 45 },
              { label: "Gold", count: 22 },
              { label: "Platinum", count: 16 },
              { label: "Local", count: 16 },
              { label: "Custom", count: 10 },
            ].map((item) => (
              <div
                key={item.label}
                className="flex-1 rounded-lg bg-gray-100 p-4 text-center shadow-md"
              >
                <h4 className="text-2xl font-bold text-blue-500">
                  {item.count}
                </h4>
                <p className="text-gray-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pyramid Chart for Clients by Stage */}
        <div className="flex-1 rounded-lg bg-white p-4 shadow-lg">
          <h2 className="mb-4 text-xl font-bold">Clients by Stage</h2>
          <PyramidChart />
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
