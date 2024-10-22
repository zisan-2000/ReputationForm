import { motion } from "framer-motion";

const SummaryCard = ({ label, amount, graphIcon: GraphIcon, iconColor }) => {
  return (
    <motion.div
      className="flex transform flex-col items-center space-y-2 rounded-xl bg-white p-4 shadow-xl"
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
      <motion.div
        className={`flex items-center ${iconColor}`}
        whileHover={{ rotate: 15 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        <GraphIcon className="h-8 w-8" />
      </motion.div>

      {/* Label */}
      <p className="text-sm font-medium text-gray-500">{label}</p>

      {/* Amount */}
      <motion.h1
        className="text-xl font-semibold"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        ${amount.toLocaleString()}
      </motion.h1>
    </motion.div>
  );
};

export default SummaryCard;
