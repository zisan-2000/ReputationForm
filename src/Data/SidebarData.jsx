// SidebarData.jsx
import {
  FaBox,
  FaChartLine,
  FaClipboardList,
  FaEdit,
  FaFileAlt,
  FaTasks,
  FaUserPlus,
} from "react-icons/fa";

const SidebarData = [
  {
    title: "My Plan",
    path: "/my-plan",
    icon: <FaClipboardList />,
  },
  {
    title: "My Post",
    path: "/my-post",
    icon: <FaEdit />,
  },
  {
    title: "My Articles",
    path: "/my-articles",
    icon: <FaFileAlt />,
  },
  {
    title: "Status",
    path: "/status",
    icon: <FaChartLine />,
  },
  {
    title: "Create Lead",
    path: "/create-lead",
    icon: <FaUserPlus />,
  },
  {
    title: "Create Task",
    path: "/create-task",
    icon: <FaTasks />,
  },
  {
    title: "Create Product",
    path: "/create-product",
    icon: <FaBox />,
  },
];

export default SidebarData;
