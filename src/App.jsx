import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Spinner from "./components/Spinner"; // Keep the Spinner eagerly loaded

// Lazily import components
const StackedBarChart = lazy(
  () => import("./components/Charts/StackedBarChart"),
);
const Card = lazy(() => import("./components/ReuseableComp/Card"));
const ProfileCard = lazy(
  () => import("./components/ReuseableComp/ProfileCard"),
);
const SubscriptionCard = lazy(
  () => import("./components/ReuseableComp/SubscriptionCard"),
);
const SummaryCard = lazy(
  () => import("./components/ReuseableComp/SummaryCard"),
);

// Lazily import charts
const GroupedBarChart = lazy(
  () => import("./components/Charts/GroupedBarChart"),
);
const HorizontalBarChart = lazy(
  () => import("./components/Charts/HorizontalBarChart"),
);
const HorizontalBarChart2 = lazy(
  () => import("./components/Charts/HorizontalBarChart2"),
);
const MultiLineChart = lazy(() => import("./components/Charts/MultiLineChart"));
const PieChartComponent = lazy(() => import("./components/Charts/PieChart"));
const PublishedContentChart = lazy(
  () => import("./components/Charts/PublishedContentChart"),
);
const PyramidChart = lazy(() => import("./components/Charts/PyramidChart"));
const PyramidChart3 = lazy(() => import("./components/Charts/PyramidChart3"));
const StackedAreaChart = lazy(
  () => import("./components/Charts/StackedAreaChart"),
);
const VerticalBarChart = lazy(
  () => import("./components/Charts/VerticalBarChart"),
);
const DonutChart = lazy(() => import("./components/Charts/DonutChart"));

// Lazily import pages and forms
const Header = lazy(() => import("./components/Header & Sidebar/Header"));
const Sidebar = lazy(() => import("./components/Header & Sidebar/Sidebar"));
const AuditDashboard = lazy(() => import("./components/AuditDashboard"));
const ClientDashboard2 = lazy(() => import("./components/ClientDashboard"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const BrandAssetsForm = lazy(() => import("./pages/BrandAssetsForm"));
const BusinessDetailsForm = lazy(() => import("./pages/BusinessDetailsForm"));
const CreateContactForm = lazy(() => import("./pages/CreateContactForm"));
const CreateLead = lazy(() => import("./pages/CreateLead"));
const CreateNewIntake = lazy(() => import("./pages/CreateNewIntake"));
const CreateProduct = lazy(() => import("./pages/CreateProduct"));
const CreateTask = lazy(() => import("./pages/CreateTask"));

// Direct import datasets (no lazy loading required)
import { cardData } from "./Data/CardsData";
import { DonutChartData, DonutChartData2 } from "./Data/DonutChartData";
import {
  groupedBarChartData,
  groupedBarChartData2,
  groupedBarColors,
  groupedBarColors2,
} from "./Data/groupedBarChartData";
import {
  horizontalBarData,
  horizontalBarData2,
} from "./Data/horizontalBarData";
import { lineColors, multiLineChartData } from "./Data/multiLineChartData";
import { pieChartData, pieChartData2 } from "./Data/pieChartData";
import { profileData } from "./Data/ProfileData";
import { barColors, publishedContentData } from "./Data/publishedContentData";
import { pyramidChartData, pyramidChartOptions } from "./Data/pyramidChartData";
import { areaColors, stackedAreaData } from "./Data/stackedAreaData";
import { subscriptionData } from "./Data/subscriptionData";
import {
  subscriptionBars,
  subscriptionHealthData,
} from "./Data/subscriptionHealthData";
import { summaryCardData } from "./Data/summaryCardData";
import { verticalBarChartData } from "./Data/verticalBarChartData";

const App = () => (
  <Router>
    <div className="flex h-screen">
      <Suspense fallback={<Spinner />}>
        <Sidebar />
      </Suspense>
      <div className="flex flex-1 flex-col">
        <Suspense fallback={<Spinner />}>
          <Header />
        </Suspense>
        <main className="h-[calc(100vh-4rem)] flex-1 overflow-y-auto bg-pink-100 p-6">
          <Suspense fallback={<Spinner />}>
            <Routes>
              {/* Dashboard and Pages */}
              <Route path="/" element={<DashboardPage />} />
              <Route path="/DashboardPage" element={<DashboardPage />} />
              <Route path="/AuditDashboard" element={<AuditDashboard />} />
              <Route path="/ClientDashboard2" element={<ClientDashboard2 />} />
              <Route path="/create-lead" element={<CreateLead />} />
              <Route path="/create-task" element={<CreateTask />} />
              <Route path="/create-product" element={<CreateProduct />} />
              <Route path="/create-new-intake" element={<CreateNewIntake />} />
              <Route path="/ContactForm" element={<CreateContactForm />} />
              <Route path="/BrandAssets" element={<BrandAssetsForm />} />
              <Route
                path="/BusinessDetailsForm"
                element={<BusinessDetailsForm />}
              />

              {/* Charts */}
              <Route
                path="/GroupedBarChart"
                element={
                  <GroupedBarChart
                    data={groupedBarChartData}
                    barColors={groupedBarColors}
                    barSize={40}
                    chartHeight={400}
                  />
                }
              />
              <Route
                path="/HorizontalBarChart"
                element={
                  <HorizontalBarChart
                    data={horizontalBarData}
                    barSize={40}
                    chartHeight={400}
                  />
                }
              />
              <Route
                path="/HorizontalBarChart2"
                element={
                  <HorizontalBarChart2
                    data={horizontalBarData2}
                    barSize={40}
                    chartHeight={400}
                  />
                }
              />
              <Route
                path="/VerticalBarChart"
                element={
                  <VerticalBarChart
                    data={verticalBarChartData}
                    barSize={50}
                    chartHeight={400}
                  />
                }
              />
              <Route
                path="/PublishedContentChart"
                element={
                  <PublishedContentChart
                    data={publishedContentData}
                    barColors={barColors}
                    barSize={20}
                    xDataKey="name"
                    chartHeight={400}
                  />
                }
              />
              <Route
                path="/StackedAreaChart"
                element={
                  <StackedAreaChart
                    data={stackedAreaData}
                    areaColors={areaColors}
                    xDataKey="month"
                    chartHeight={400}
                  />
                }
              />
              <Route
                path="/MultiLineChart"
                element={
                  <MultiLineChart
                    data={multiLineChartData}
                    lineColors={lineColors}
                    xDataKey="month"
                    chartHeight={400}
                  />
                }
              />
              <Route path="/PyramidChart" element={<PyramidChart />} />
              <Route
                path="/PyramidChart3"
                element={
                  <PyramidChart3
                    data={pyramidChartData}
                    options={pyramidChartOptions}
                    chartHeight="500px"
                  />
                }
              />
              <Route
                path="/piechart"
                element={
                  <PieChartComponent
                    data={pieChartData}
                    outerRadius={150}
                    chartHeight={400}
                    cx="50%"
                    cy="50%"
                  />
                }
              />
              <Route
                path="/PieChart2"
                element={
                  <PieChartComponent
                    data={pieChartData2}
                    outerRadius={150}
                    chartHeight={400}
                    cx="50%"
                    cy="50%"
                  />
                }
              />
              <Route
                path="/DonutChart"
                element={
                  <DonutChart
                    data={DonutChartData}
                    innerRadius={80}
                    outerRadius={120}
                    startAngle={90}
                    endAngle={450}
                  />
                }
              />

              <Route
                path="/BalanceCard"
                element={
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {cardData.map((card) => (
                      <Card key={card.id} {...card} />
                    ))}
                  </div>
                }
              />

              <Route
                path="/SummaryCard"
                element={
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {summaryCardData.map((data) => (
                      <SummaryCard key={data.id} {...data} />
                    ))}
                  </div>
                }
              />

              <Route
                path="/SubscriptionCard"
                element={
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {subscriptionData.map((data) => (
                      <SubscriptionCard key={data.id} {...data} />
                    ))}
                  </div>
                }
              />

              <Route
                path="/ProfileCard"
                element={
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {profileData.map((profile) => (
                      <ProfileCard key={profile.id} {...profile} />
                    ))}
                  </div>
                }
              />

              <Route
                path="/GroupedBarChart2"
                element={
                  <GroupedBarChart
                    data={groupedBarChartData2}
                    barColors={groupedBarColors2}
                    barSize={50}
                    chartHeight={400}
                    title="Monthly Sales by Type"
                  />
                }
              />

              <Route
                path="/DonutChart2"
                element={
                  <DonutChart
                    data={DonutChartData2}
                    innerRadius={80}
                    outerRadius={120}
                    startAngle={90}
                    endAngle={450}
                  />
                }
              />

              <Route
                path="/StackedBarChart"
                element={
                  <StackedBarChart
                    data={subscriptionHealthData}
                    xAxisKey="date"
                    bars={subscriptionBars}
                    width="80%"
                    height={400}
                    showLegend={true}
                    showGrid={true}
                  />
                }
              />
            </Routes>
          </Suspense>
        </main>
      </div>
    </div>
  </Router>
);

export default App;
