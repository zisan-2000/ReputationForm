import { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Spinner from "./components/Spinner";

// Import datasets
import Card from "./components/ReuseableComp/Card";
import { cardData } from "./Data/CardsData";

// Lazily import components
const Header = lazy(() => import("./components/Header & Sidebar/Header"));
const Sidebar = lazy(() => import("./components/Header & Sidebar/Sidebar"));

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
              <Route
                path="/BalanceCard"
                element={
                  <Card
                    balance={cardData.balance}
                    currency={cardData.currency}
                    icon={cardData.icon}
                    progressBarColor={cardData.progressBarColor}
                    iconColor={cardData.iconColor}
                    cardBackground={cardData.cardBackground}
                    textColor={cardData.textColor}
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
