import { motion } from "framer-motion";

const Card = ({
  balance,
  currency,
  icon: Icon,
  progressBarColor,
  iconColor,
  cardBackground,
  textColor,
}) => {
  return (
    <motion.div
      className={`h-auto max-w-sm p-6 ${cardBackground} transform rounded-xl shadow-xl`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05, rotate: 1 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        duration: 0.3,
      }}
    >
      <div className="flex items-center space-x-4">
        <div className={`rounded-full bg-white p-3 ${iconColor} shadow-lg`}>
          <Icon className="h-8 w-8" />
        </div>
        <div>
          <h1 className={`text-3xl font-semibold ${textColor}`}>
            ${balance.toLocaleString()}
          </h1>
          <p className={`mt-1 text-sm font-medium ${textColor} opacity-75`}>
            {currency} Balance
          </p>
        </div>
      </div>
      <div className="mt-4">
        <div className="h-2 w-full rounded bg-white bg-opacity-30">
          <motion.div
            className={`h-2 rounded ${progressBarColor}`}
            style={{ width: "70%" }}
            initial={{ width: "0%" }}
            animate={{ width: "70%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
