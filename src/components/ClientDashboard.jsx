import ReusableCard from "./ReuseableComp/ReusableCard";
import TotalClients from "./ReuseableComp/TotalClients";

const ClientDashboard = () => {
  const campaigns = [
    { title: "Basic", count: 77 },
    { title: "Silver", count: 45 },
    { title: "Gold", count: 22 },
    { title: "Platinum", count: 16 },
    { title: "Local", count: 16 },
    { title: "Custom", count: 10 },
  ];

  // Calculate the total clients dynamically
  const totalClients = campaigns.reduce(
    (total, campaign) => total + campaign.count,
    0,
  );

  return (
    <div className="container mx-auto my-6 px-4">
      {/* Total Active Clients at the top */}
      <div className="mb-6">
        <TotalClients totalClients={totalClients} />
      </div>

      {/* Clients by Campaign section */}
      <h2 className="mb-4  text-lg font-semibold">Clients by Campaign</h2>
      <div className="r flex flex-wrap">
        {campaigns.map((campaign, index) => (
          <ReusableCard
            key={index}
            title={campaign.title}
            count={campaign.count}
          />
        ))}
      </div>
    </div>
  );
};

export default ClientDashboard;
