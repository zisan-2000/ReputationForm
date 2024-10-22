// Import necessary packages
import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Spinner from "./components/Spinner";
import { DonutChartData } from "./Data/DonutChartData";
import {
  groupedBarChartData,
  groupedBarColors,
} from "./Data/groupedBarChartData";
import {
  horizontalBarData,
  horizontalBarData2,
} from "./Data/horizontalBarData";
import { lineColors, multiLineChartData } from "./Data/multiLineChartData";
import { pieChartData, pieChartData2 } from "./Data/pieChartData";
import { barColors, publishedContentData } from "./Data/publishedContentData";
import { pyramidChartData, pyramidChartOptions } from "./Data/pyramidChartData";
import { areaColors, stackedAreaData } from "./Data/stackedAreaData";
import { verticalBarChartData } from "./Data/verticalBarChartData";

// Lazy loading components
const Header = lazy(() => import("./components/Header & Sidebar/Header"));
const Sidebar = lazy(() => import("./components/Header & Sidebar/Sidebar"));
const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const AuditDashboard = lazy(() => import("./components/AuditDashboard"));
const ClientDashboard2 = lazy(() => import("./components/ClientDashboard"));
const CreateLead = lazy(() => import("./pages/CreateLead"));
const CreateTask = lazy(() => import("./pages/CreateTask"));
const CreateProduct = lazy(() => import("./pages/CreateProduct"));
const CreateNewIntake = lazy(() => import("./pages/CreateNewIntake"));
const CreateContactForm = lazy(() => import("./pages/CreateContactForm"));
const BrandAssetsForm = lazy(() => import("./pages/BrandAssetsForm"));
const BusinessDetailsForm = lazy(() => import("./pages/BusinessDetailsForm"));

// Lazy loading charts
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

// Define routes
const routes = [
  { path: "/", element: <DashboardPage /> },
  { path: "/AuditDashboard", element: <AuditDashboard /> },
  { path: "/ClientDashboard2", element: <ClientDashboard2 /> },
  { path: "/create-lead", element: <CreateLead /> },
  { path: "/create-task", element: <CreateTask /> },
  { path: "/create-product", element: <CreateProduct /> },
  { path: "/create-new-intake", element: <CreateNewIntake /> },
  { path: "/ContactForm", element: <CreateContactForm /> },
  { path: "/BrandAssets", element: <BrandAssetsForm /> },
  { path: "/BusinessDetailsForm", element: <BusinessDetailsForm /> },
  {
    path: "/GroupedBarChart",
    element: (
      <GroupedBarChart
        data={groupedBarChartData}
        barColors={groupedBarColors}
        barSize={40}
        chartHeight={400}
      />
    ),
  },
  {
    path: "/HorizontalBarChart",
    element: (
      <HorizontalBarChart
        data={horizontalBarData}
        barSize={40}
        chartHeight={400}
      />
    ),
  },
  {
    path: "/HorizontalBarChart2",
    element: (
      <HorizontalBarChart2
        data={horizontalBarData2}
        barSize={40}
        chartHeight={400}
      />
    ),
  },
  {
    path: "/VerticalBarChart",
    element: (
      <VerticalBarChart
        data={verticalBarChartData}
        barSize={50}
        chartHeight={400}
      />
    ),
  },
  {
    path: "/PublishedContentChart",
    element: (
      <PublishedContentChart
        data={publishedContentData}
        barColors={barColors}
        barSize={20}
        xDataKey="name"
        chartHeight={400}
      />
    ),
  },
  {
    path: "/StackedAreaChart",
    element: (
      <StackedAreaChart
        data={stackedAreaData}
        areaColors={areaColors}
        xDataKey="month"
        chartHeight={400}
      />
    ),
  },
  {
    path: "/MultiLineChart",
    element: (
      <MultiLineChart
        data={multiLineChartData}
        lineColors={lineColors}
        xDataKey="month"
        chartHeight={400}
      />
    ),
  },
  { path: "/PyramidChart", element: <PyramidChart /> },
  {
    path: "/PyramidChart3",
    element: (
      <PyramidChart3
        data={pyramidChartData}
        options={pyramidChartOptions}
        chartHeight="500px"
      />
    ),
  },
  {
    path: "/piechart",
    element: (
      <PieChartComponent
        data={pieChartData}
        outerRadius={150}
        chartHeight={400}
        cx="50%"
        cy="50%"
      />
    ),
  },
  {
    path: "/PieChart2",
    element: (
      <PieChartComponent
        data={pieChartData2}
        outerRadius={150}
        chartHeight={400}
        cx="50%"
        cy="50%"
      />
    ),
  },
  {
    path: "/DonutChart",
    element: (
      <DonutChart
        data={DonutChartData}
        innerRadius={80}
        outerRadius={120}
        startAngle={90}
        endAngle={450}
      />
    ),
  },
];

const router = createBrowserRouter(routes);

const App = () => (
  <Suspense fallback={<Spinner />}>
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Header />
        <main className="h-[calc(100vh-4rem)] flex-1 overflow-y-auto bg-pink-100 p-6">
          <RouterProvider router={router} />
        </main>
      </div>
    </div>
  </Suspense>
);

export default App;
