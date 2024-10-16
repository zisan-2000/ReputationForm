import AuditDashboard from "@/components/AuditDashboard";
import GroupedBarChart from "@/components/Charts/GroupedBarChart";
import HorizontalBarChart from "@/components/Charts/HorizontalBarChart";
import HorizontalBarChart2 from "@/components/Charts/HorizontalBarChart2";
import MultiLineChart from "@/components/Charts/MultiLineChart";
import PieChartComponent from "@/components/Charts/PieChart";
import PieChart2 from "@/components/Charts/PieChart2";
import PublishedContentChart from "@/components/Charts/PublishedContentChart";
import PyramidChart from "@/components/Charts/PyramidChart";
import StackedAreaChart from "@/components/Charts/StackedAreaChart";
import VerticalBarChart from "@/components/Charts/VerticalBarChart";
import ClientDashboard from "@/components/ClientDashboard";

const DashboardPage = () => {
  return (
    <div className="dashboard-page container mx-auto my-6 px-4">
      <h1 className="dashboard-title">Dashboard Page</h1>

      {/* Client and Audit Dashboards in flex layout */}
      <div className="flex-wrap-container">
        <div className="chart-container">
          <h2 className="chart-title">Client Dashboard</h2>
          <ClientDashboard />
        </div>

        <div className="chart-container">
          <h2 className="chart-title">Pyramid Chart</h2>
          <PyramidChart />
        </div>
      </div>

      {/* Chart sections in pairs */}
      <div className="flex-wrap-container">
        <div className="chart-container">
          <h2 className="chart-title">Grouped Bar Chart</h2>
          <GroupedBarChart />
        </div>
        <div className="chart-container">
          <h2 className="chart-title">Horizontal Bar Chart</h2>
          <HorizontalBarChart />
        </div>
      </div>

      <div className="flex-wrap-container">
        <div className="chart-container">
          <h2 className="chart-title">Horizontal Bar Chart 2</h2>
          <HorizontalBarChart2 />
        </div>
        <div className="chart-container">
          <h2 className="chart-title">Multi-Line Chart</h2>
          <MultiLineChart />
        </div>
      </div>

      <div className="flex-wrap-container">
        <div className="chart-container">
          <h2 className="chart-title">Pie Chart</h2>
          <PieChartComponent />
        </div>
        <div className="chart-container">
          <h2 className="chart-title">Pie Chart 2</h2>
          <PieChart2 />
        </div>
      </div>

      <div className="flex-wrap-container">
        <div className="chart-container">
          <h2 className="chart-title">Published Content Chart</h2>
          <PublishedContentChart />
        </div>

        <div className="chart-container">
          <h2 className="chart-title">Audit Dashboard</h2>
          <AuditDashboard />
        </div>
      </div>

      <div className="flex-wrap-container">
        <div className="chart-container">
          <h2 className="chart-title">Stacked Area Chart</h2>
          <StackedAreaChart />
        </div>
        <div className="chart-container">
          <h2 className="chart-title">Vertical Bar Chart</h2>
          <VerticalBarChart />
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
