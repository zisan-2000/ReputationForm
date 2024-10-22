import {
  FaBell,
  FaCloud,
  FaHeartbeat,
  FaShieldAlt,
  FaShoppingCart,
  FaSyncAlt,
  FaTasks,
  FaUserAlt,
} from "react-icons/fa"; // Additional icons

export const subscriptionData = [
  {
    id: 1,
    title: "Active Subscriptions",
    subscriptions: 168,
    maxSubscriptions: 200,
    icon: FaSyncAlt,
    progressBarColor: "bg-orange-500",
    subscriptionColor: "text-orange-500",
  },
  {
    id: 2,
    title: "Users Registered",
    subscriptions: 450,
    maxSubscriptions: 500,
    icon: FaUserAlt,
    progressBarColor: "bg-green-500",
    subscriptionColor: "text-green-500",
  },
  {
    id: 3,
    title: "Notifications Sent",
    subscriptions: 75,
    maxSubscriptions: 100,
    icon: FaBell,
    progressBarColor: "bg-blue-500",
    subscriptionColor: "text-blue-500",
  },
  {
    id: 4,
    title: "Cloud Storage Usage",
    subscriptions: 85,
    maxSubscriptions: 120,
    icon: FaCloud,
    progressBarColor: "bg-purple-500",
    subscriptionColor: "text-purple-500",
  },
  {
    id: 5,
    title: "Pending Orders",
    subscriptions: 30,
    maxSubscriptions: 50,
    icon: FaShoppingCart,
    progressBarColor: "bg-red-500",
    subscriptionColor: "text-red-500",
  },
  {
    id: 6,
    title: "Health Monitoring Alerts",
    subscriptions: 190,
    maxSubscriptions: 250,
    icon: FaHeartbeat,
    progressBarColor: "bg-pink-500",
    subscriptionColor: "text-pink-500",
  },
  {
    id: 7,
    title: "Security Incidents Resolved",
    subscriptions: 125,
    maxSubscriptions: 150,
    icon: FaShieldAlt,
    progressBarColor: "bg-gray-600",
    subscriptionColor: "text-gray-600",
  },
  {
    id: 8,
    title: "Tasks Completed",
    subscriptions: 320,
    maxSubscriptions: 400,
    icon: FaTasks,
    progressBarColor: "bg-teal-500",
    subscriptionColor: "text-teal-500",
  },
  {
    id: 9,
    title: "API Calls Made",
    subscriptions: 20000,
    maxSubscriptions: 25000,
    icon: FaSyncAlt,
    progressBarColor: "bg-indigo-500",
    subscriptionColor: "text-indigo-500",
  },
  {
    id: 10,
    title: "Monthly Reports Generated",
    subscriptions: 90,
    maxSubscriptions: 100,
    icon: FaBell,
    progressBarColor: "bg-yellow-500",
    subscriptionColor: "text-yellow-500",
  },
];