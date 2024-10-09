import SidebarData from "@/Data/SidebarData";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/Reputation_Prime_Logo.png";
import CollapsedLogo from "../assets/images/logo.jpeg";

const Sidebar = () => {
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (isLargeScreen) {
      setIsCollapsed(false);
    } else {
      setIsCollapsed(true);
    }
  }, [isLargeScreen]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`flex h-screen flex-col bg-gray-800 text-white ${
        isCollapsed ? "w-16" : "w-64"
      } transition-all duration-300`}
    >
      {/* Sidebar Header */}
      <div className="sticky top-0 z-10 flex items-center justify-between bg-gray-700 p-4 shadow-lg">
        <div className="rounded-full bg-yellow-100">
          <img
            src={isCollapsed ? CollapsedLogo : Logo}
            alt="Logo"
            className={`h-8`}
          />
        </div>
        <button onClick={toggleSidebar} className="text-2xl">
          {isCollapsed ? <FaBars /> : <FaTimes />}
        </button>
      </div>

      {/* Sidebar Middle (scrollable section) */}
      <div className="flex-1 overflow-y-auto">
        <nav>
          <ul className="space-y-2">
            {SidebarData.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `group flex items-center px-4 py-2 ${
                      isActive ? "bg-gray-600" : ""
                    }`
                  }
                >
                  {item.icon}
                  <span
                    className={`${
                      isCollapsed
                        ? "absolute left-20 hidden rounded-lg bg-gray-800 p-2 group-hover:block"
                        : "ml-4"
                    }`}
                  >
                    {item.title}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Sidebar Footer */}
      <div className="sticky bottom-0 bg-gray-800 p-4">
        <p className={`text-sm ${isCollapsed ? "hidden" : "block"}`}>
          &copy; 2024 Reputation Prime
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
