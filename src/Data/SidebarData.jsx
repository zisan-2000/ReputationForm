import {
  FaBox,
  FaChartArea,
  FaChartBar,
  FaChartPie,
  FaEnvelope,
  FaFileArchive,
  FaImage,
  FaTasks,
  FaUserPlus,
} from "react-icons/fa";

import { BsBarChartLineFill, BsBarChartSteps } from "react-icons/bs";
import { FcAreaChart, FcPieChart } from "react-icons/fc";
import { LuBarChartHorizontal } from "react-icons/lu";
import {
  MdDashboard,
  MdDashboardCustomize,
  MdOutlineDashboardCustomize,
} from "react-icons/md";
import { RiBarChartGroupedFill } from "react-icons/ri";
import { TbChartArrows } from "react-icons/tb";

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
    title: "ContactForm",
    path: "/ContactForm",
    icon: <FaEnvelope size={iconSize} />, // Envelope icon representing contact
  },

  {
    title: "Brand Assets",
    path: "/BrandAssets",
    icon: <FaImage size={iconSize} />, // Image icon representing media or branding
  },

  {
    title: "Pyramid Chart",
    path: "/PyramidChart",
    icon: <FcAreaChart size={iconSize} />, // Apply the related icon for client management
  },

  {
    title: "Pyramid Chart3",
    path: "/PyramidChart3",
    icon: <FcAreaChart size={iconSize} />, // Apply the related icon for client management
  },

  {
    title: "Published Content Chart",
    path: "/PublishedContentChart",
    icon: <FaChartBar size={iconSize} />, // Apply the related icon for content charts
  },

  {
    title: "Stacked Area Chart",
    path: "/StackedAreaChart",
    icon: <FaChartArea size={iconSize} />, // Apply the related icon for client management
  },
  {
    title: "Horizontal BarChart",
    path: "/HorizontalBarChart",
    icon: <LuBarChartHorizontal size={iconSize} />, // Apply the related icon for client management
  },

  {
    title: "MultiLine Chart",
    path: "/MultiLineChart",
    icon: <TbChartArrows size={iconSize} />, // Apply the related icon for client management
  },

  {
    title: "Pie Chart",
    path: "/piechart",
    icon: <FcPieChart size={iconSize} />, // Apply the related icon for client management
  },

  {
    title: "Horizontal BarChart2",
    path: "/HorizontalBarChart2",
    icon: <BsBarChartSteps size={iconSize} />, // Apply the related icon for client management
  },

  {
    title: "VerticalBarChart",
    path: "/VerticalBarChart",
    icon: <BsBarChartLineFill size={iconSize} />, // Apply the related icon for client management
  },

  {
    title: "Grouped BarChart",
    path: "/GroupedBarChart",
    icon: <RiBarChartGroupedFill size={iconSize} />, // Apply the related icon for client management
  },

  {
    title: "PieChart2",
    path: "/PieChart2",
    icon: <FaChartPie size={iconSize} />, // Apply the related icon for client management
  },

  {
    title: "ClientDashboard2",
    path: "/ClientDashboard2",
    icon: <MdDashboard size={iconSize} />, // Apply the related icon for client management
  },
  {
    title: "AuditDashboard",
    path: "/AuditDashboard",
    icon: <MdDashboardCustomize size={iconSize} />, // Apply the related icon for client management
  },

  {
    title: "DashboardPage ",
    path: "/DashboardPage ",
    icon: <MdOutlineDashboardCustomize size={iconSize} />, // Apply the related icon for client management
  },
];

export default SidebarData;
