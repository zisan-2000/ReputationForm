import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import CreateLead from "./pages/CreateLead";
import CreateNewIntake from "./pages/CreateNewIntake";
import CreateProduct from "./pages/CreateProduct"; // Import the new page
import CreateTask from "./pages/CreateTask";
import Home from "./pages/Home";
import MyArticles from "./pages/MyArticles";
import MyPlan from "./pages/MyPlan";
import MyPost from "./pages/MyPost";
import Status from "./pages/Status";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <Header />
          <main className="h-[calc(100vh-4rem)] flex-1 overflow-y-auto bg-gray-100 p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create-lead" element={<CreateLead />} />
              <Route path="/create-task" element={<CreateTask />} />
              <Route path="/create-product" element={<CreateProduct />} />{" "}
              <Route path="/create-new-intake" element={<CreateNewIntake />} />{" "}
              <Route path="/my-plan" element={<MyPlan />} />
              <Route path="/my-post" element={<MyPost />} />
              <Route path="/my-articles" element={<MyArticles />} />
              <Route path="/status" element={<Status />} />
              {/* New Route */}
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
