import {
  FaBox,
  FaChartLine,
  FaClipboardList,
  FaEdit,
  FaFileAlt,
  FaFileArchive,
  FaTasks,
  FaUserPlus,
} from "react-icons/fa";

const iconSize = 28; // Set the size of the icons here

const SidebarData = [
  {
    title: "Create Lead",
    path: "/create-lead",
    icon: <FaUserPlus size={iconSize} />, // Apply the size prop here
  },
  {
    title: "Create Task",
    path: "/create-task",
    icon: <FaTasks size={iconSize} />, // Apply the size prop here
  },
  {
    title: "Create Product",
    path: "/create-product",
    icon: <FaBox size={iconSize} />, // Apply the size prop here
  },
  {
    title: "Create New Intake",
    path: "/create-new-intake",
    icon: <FaFileArchive size={iconSize} />, // Apply the size prop here
  },

  {
    title: "My Plan",
    path: "/my-plan",
    icon: <FaClipboardList size={iconSize} />, // Apply the size prop here
  },
  {
    title: "My Post",
    path: "/my-post",
    icon: <FaEdit size={iconSize} />, // Apply the size prop here
  },
  {
    title: "My Articles",
    path: "/my-articles",
    icon: <FaFileAlt size={iconSize} />, // Apply the size prop here
  },
  {
    title: "Status",
    path: "/status",
    icon: <FaChartLine size={iconSize} />, // Apply the size prop here
  },
];

export default SidebarData;
