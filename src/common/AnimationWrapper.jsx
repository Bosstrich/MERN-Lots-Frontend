import React from "react";
import { motion, AnimatePresence } from "motion/react";

const AnimationWrapper = ({
  children,
  keyValue,
  initial = { opacity: 0 },
  animate = { opacity: 1 },
  exitAnim = { opacity: 0},
  transition = { duration: 0.5 },
  className,
}) => {
  return (
    <AnimatePresence>
      <motion.div
       key={keyValue}
       initial={initial}
       animate={animate}
       exit={exitAnim}
       transition={transition}
       className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default AnimationWrapper;
