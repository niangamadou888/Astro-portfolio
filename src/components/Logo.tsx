import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed top-6 left-6 z-50"
    >
      <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
        ABN
      </span>
    </motion.div>
  );
};