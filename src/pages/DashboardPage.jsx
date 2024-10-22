import AuditDashboard from "@/components/AuditDashboard";
import DonutChart from "@/components/Charts/DonutChart";
import GroupedBarChart from "@/components/Charts/GroupedBarChart";
import HorizontalBarChart from "@/components/Charts/HorizontalBarChart";
import HorizontalBarChart2 from "@/components/Charts/HorizontalBarChart2";
import MultiLineChart from "@/components/Charts/MultiLineChart";
import PieChartComponent from "@/components/Charts/PieChart";
import PieChart2 from "@/components/Charts/PieChart2";
import PublishedContentChart from "@/components/Charts/PublishedContentChart";
import PyramidChart from "@/components/Charts/PyramidChart";
import PyramidChart3 from "@/components/Charts/PyramidChart3";
import StackedAreaChart from "@/components/Charts/StackedAreaChart";
import StackedBarChart from "@/components/Charts/StackedBarChart";
import VerticalBarChart from "@/components/Charts/VerticalBarChart";
import ClientDashboard from "@/components/ClientDashboard";
import Card from "@/components/ReuseableComp/Card";
import ProfileCard from "@/components/ReuseableComp/ProfileCard";
import SubscriptionCard from "@/components/ReuseableComp/SubscriptionCard";
import SummaryCard from "@/components/ReuseableComp/SummaryCard";
import { cardData } from "@/Data/CardsData";
import { DonutChartData, DonutChartData2 } from "@/Data/DonutChartData";
import {
  groupedBarChartData,
  groupedBarChartData2,
  groupedBarColors,
  groupedBarColors2,
} from "@/Data/groupedBarChartData";
import { horizontalBarData } from "@/Data/horizontalBarData";
import { lineColors, multiLineChartData } from "@/Data/multiLineChartData";
import { pieChartData } from "@/Data/pieChartData";
import { profileData } from "@/Data/ProfileData";
import { barColors, publishedContentData } from "@/Data/publishedContentData";
import { pyramidChartData, pyramidChartOptions } from "@/Data/pyramidChartData";
import { areaColors, stackedAreaData } from "@/Data/stackedAreaData";
import { subscriptionData } from "@/Data/subscriptionData";
import {
  subscriptionBars,
  subscriptionHealthData,
} from "@/Data/subscriptionHealthData";
import { summaryCardData } from "@/Data/summaryCardData";
import { verticalBarChartData } from "@/Data/verticalBarChartData";

const DashboardPage = () => {
  return (
    <div className="dashboard-page container mx-auto my-6 px-4">
      {/* Client and Audit Dashboards in flex layout */}
      <div className="flex-wrap-container">
        <div className="chart-container">
          <h2 className="chart-title">Client Dashboard</h2>
          <ClientDashboard />
        </div>

        <div className="chart-container">
          <h2 className="chart-title">Pyramid Chart</h2>
          <PyramidChart3
            data={pyramidChartData}
            options={pyramidChartOptions}
            chartHeight="500px"
          />
        </div>
      </div>

      {/* Chart sections in pairs */}
      <div className="flex-wrap-container">
        <div className="chart-container">
          <h2 className="chart-title">Grouped Bar Chart</h2>
          <GroupedBarChart
            data={groupedBarChartData} // Pass data as props
            barColors={groupedBarColors} // Pass colors as props
            barSize={40}
            chartHeight={400}
          />
        </div>
        <div className="chart-container">
          <h2 className="chart-title">Horizontal Bar Chart</h2>
          <HorizontalBarChart
            data={horizontalBarData} // Pass data as props
            barSize={40}
            chartHeight={400}
          />
        </div>
      </div>

      <div className="flex-wrap-container">
        <div className="chart-container">
          <h2 className="chart-title">Horizontal Bar Chart 2</h2>
          <HorizontalBarChart2 />
        </div>
        <div className="chart-container">
          <h2 className="chart-title">Multi-Line Chart</h2>
          <MultiLineChart
            data={multiLineChartData} // Pass data as props
            lineColors={lineColors} // Pass colors as props
            xDataKey="month"
            chartHeight={400}
          />
        </div>
      </div>

      <div className="flex-wrap-container">
        <div className="chart-container">
          <h2 className="chart-title">Pie Chart</h2>
          <PieChartComponent
            data={pieChartData} // Pass data as props
            outerRadius={150}
            chartHeight={500}
            cx="50%"
            cy="50%"
          />
        </div>
        <div className="chart-container">
          <h2 className="chart-title">Pie Chart 2</h2>
          <PieChart2 />
        </div>
      </div>

      <div className="flex-wrap-container">
        <div className="chart-container">
          <h2 className="chart-title">Published Content Chart</h2>
          <PublishedContentChart
            data={publishedContentData} // Pass data from data.jsx
            barColors={barColors} // Pass colors from data.jsx
            barSize={20}
            xDataKey="name"
            chartHeight={400}
          />
        </div>

        <div className="chart-container">
          <h2 className="chart-title">Audit Dashboard</h2>
          <AuditDashboard />
        </div>
      </div>

      <div className="flex-wrap-container">
        <div className="chart-container">
          <h2 className="chart-title">Stacked Area Chart</h2>
          <StackedAreaChart
            data={stackedAreaData}
            areaColors={areaColors}
            xDataKey="month"
            chartHeight={400}
          />
        </div>
        <div className="chart-container">
          <h2 className="chart-title">Vertical Bar Chart</h2>
          <VerticalBarChart
            data={verticalBarChartData} // Pass data as props
            barSize={50}
            chartHeight={400}
          />
        </div>
      </div>

      <div className="flex-wrap-container">
        <div className="chart-container">
          <h2 className="chart-title">PyramidChart</h2>
          <PyramidChart />
        </div>
      </div>

      <div className="flex-wrap-container">
        <div className="chart-container">
          <h2 className="chart-title">Donut Chart</h2>
          <DonutChart
            data={DonutChartData} // Pass the updated data with colors
            innerRadius={80}
            outerRadius={120}
            startAngle={90}
            endAngle={450}
          />
        </div>

        <div className="chart-container">
          <h2 className="chart-title">Donut Chart 2</h2>
          <DonutChart
            data={DonutChartData2} // Pass the updated data with colors
            innerRadius={80}
            outerRadius={120}
            startAngle={90}
            endAngle={450}
          />
        </div>
      </div>

      <div className="flex-wrap-container">
        <div className="chart-container">
          <h2 className="chart-title">Balance Card</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cardData.map((card) => (
              <Card key={card.id} {...card} />
            ))}
          </div>
        </div>

        <div className="chart-container">
          <h2 className="chart-title">StackedBar Chart</h2>
          <StackedBarChart
            data={subscriptionHealthData}
            xAxisKey="date"
            bars={subscriptionBars}
            width="80%"
            height={400}
            showLegend={true}
            showGrid={true}
          />
        </div>
      </div>

      <div className="flex-wrap-container">
        <div className="chart-container">
          <h2 className="chart-title">Subscription Card</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {subscriptionData.map((data) => (
              <SubscriptionCard key={data.id} {...data} />
            ))}
          </div>
        </div>
        <div className="chart-container">
          <h2 className="chart-title">Profile Card</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {profileData.map((profile) => (
              <ProfileCard key={profile.id} {...profile} />
            ))}
          </div>
        </div>
      </div>

      <div className="flex-wrap-container">
        <div className="chart-container">
          <h2 className="chart-title">Groupbar Chart</h2>
          <GroupedBarChart
            data={groupedBarChartData2}
            barColors={groupedBarColors2}
            barSize={50}
            chartHeight={400}
            title="Monthly Sales by Type"
          />
        </div>
        <div className="chart-container">
          <h2 className="chart-title">Summary Card</h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {summaryCardData.map((data) => (
              <SummaryCard key={data.id} {...data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
