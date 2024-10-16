import ReusableCard from "./ReuseableComp/ReusableCard";

const AuditDashboard = () => {
  const auditData = [
    { title: "Site Audits", count: 12 },
    { title: "Content", count: 5 },
    { title: "PageSpeed", count: 3 },
    { title: "GTMetrix", count: 10 },
    { title: "Schema", count: 8 },
  ];

  return (
    <div className="container mx-auto my-6 px-4">
      <h2 className="mb-4 text-lg font-semibold">
        Website Reports & Audits Pending
      </h2>
      <div className="flex flex-wrap ">
        {auditData.map((audit, index) => (
          <ReusableCard key={index} title={audit.title} count={audit.count} />
        ))}
      </div>
    </div>
  );
};

export default AuditDashboard;
