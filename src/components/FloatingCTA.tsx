import { Link } from "react-router-dom";
import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

const FloatingCTA = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
    >
      <Link to="/contact">
        <div className="gradient-bg flex items-center gap-2 px-3 py-4 rounded-l-xl text-primary-foreground text-xs font-medium writing-vertical shadow-lg hover:px-4 transition-all duration-300 cursor-pointer"
          style={{ writingMode: "vertical-lr", textOrientation: "mixed" }}
        >
          <CalendarDays size={14} />
          Book a Meeting
        </div>
      </Link>
    </motion.div>
  );
};

export default FloatingCTA;
