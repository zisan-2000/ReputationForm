import { motion } from "framer-motion";

const SubscriptionCard = ({
  title,
  subscriptions,
  maxSubscriptions,
  icon: Icon, // Receive icon as a prop
  progressBarColor,
  subscriptionColor,
}) => {
  const progress = (subscriptions / maxSubscriptions) * 100; // Calculate progress

  return (
    <motion.div
      className="flex max-w-xs items-center justify-between rounded-lg bg-white p-4 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.3,
      }}
    >
      {/* Icon Section */}
      <div className="flex items-center">
        <motion.div
          className="rounded-full bg-gray-100 p-2"
          whileHover={{ rotate: 15 }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          <Icon className="h-6 w-6 text-gray-500" />
        </motion.div>
        <div className="ml-3">
          <p className="text-sm text-gray-500">{title}</p>
          <div className="mt-1 h-2 w-full rounded bg-gray-300">
            <motion.div
              className={`h-2 rounded ${progressBarColor}`}
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            ></motion.div>
          </div>
        </div>
      </div>

      {/* Subscription Count */}
      <motion.h1
        className={`text-2xl font-semibold ${subscriptionColor}`}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {subscriptions}
      </motion.h1>
    </motion.div>
  );
};

export default SubscriptionCard;
