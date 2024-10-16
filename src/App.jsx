import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AuditDashboard from "./components/AuditDashboard";
import GroupedBarChart from "./components/Charts/GroupedBarChart";
import HorizontalBarChart from "./components/Charts/HorizontalBarChart";
import HorizontalBarChart2 from "./components/Charts/HorizontalBarChart2";
import MultiLineChart from "./components/Charts/MultiLineChart";
import PieChartComponent from "./components/Charts/PieChart";
import PieChart2 from "./components/Charts/PieChart2";
import PublishedContentChart from "./components/Charts/PublishedContentChart";
import PyramidChart from "./components/Charts/PyramidChart";
import PyramidChart3 from "./components/Charts/PyramidChart3";
import StackedAreaChart from "./components/Charts/StackedAreaChart";
import VerticalBarChart from "./components/Charts/VerticalBarChart";
import ClientDashboard2 from "./components/ClientDashboard";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import BrandAssetsForm from "./pages/BrandAssetsForm";
import CreateContactForm from "./pages/CreateContactForm";
import CreateLead from "./pages/CreateLead";
import CreateNewIntake from "./pages/CreateNewIntake";
import CreateProduct from "./pages/CreateProduct"; // Import the new page
import CreateTask from "./pages/CreateTask";
import DashboardPage from "./pages/DashboardPage";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Header />
          <main className="h-[calc(100vh-4rem)] flex-1 overflow-y-auto bg-pink-100 p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create-lead" element={<CreateLead />} />
              <Route path="/create-task" element={<CreateTask />} />
              <Route path="/create-product" element={<CreateProduct />} />{" "}
              <Route path="/create-new-intake" element={<CreateNewIntake />} />{" "}
              <Route path="/ContactForm" element={<CreateContactForm />} />
              <Route path="/BrandAssets" element={<BrandAssetsForm />} />
              <Route
                path="/PublishedContentChart"
                element={<PublishedContentChart />}
              />
              <Route path="/StackedAreaChart" element={<StackedAreaChart />} />
              <Route
                path="/HorizontalBarChart"
                element={<HorizontalBarChart />}
              />
              <Route path="/PyramidChart" element={<PyramidChart />} />
              <Route path="/PyramidChart3" element={<PyramidChart3 />} />
              <Route path="/MultiLineChart" element={<MultiLineChart />} />
              <Route path="/piechart" element={<PieChartComponent />} />
              <Route
                path="/HorizontalBarChart2"
                element={<HorizontalBarChart2 />}
              />
              <Route path="/VerticalBarChart" element={<VerticalBarChart />} />
              <Route path="/GroupedBarChart" element={<GroupedBarChart />} />
              <Route path="/PieChart2" element={<PieChart2 />} />
              <Route path="/ClientDashboard2" element={<ClientDashboard2 />} />
              <Route path="/AuditDashboard" element={<AuditDashboard />} />
              <Route path="/DashboardPage" element={<DashboardPage />} />
              {/* New Route */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
