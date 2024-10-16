const TotalClients = ({ totalClients }) => {
  return (
    <div className="my-6 ">
      <h2 className="text-lg font-semibold">Total Active Clients</h2>
      <p className="text-5xl font-bold text-green-500">{totalClients}</p>
    </div>
  );
};

export default TotalClients;
