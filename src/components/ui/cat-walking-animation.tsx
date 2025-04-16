import React from "react";
import { motion } from "framer-motion";
import cat from "../../assets/cat.gif";

interface CatWalkingAnimationProps {
  startX?: number;
  duration?: number;
  flip?: boolean;
}

const CatWalkingAnimation: React.FC<CatWalkingAnimationProps> = ({
  startX = -100,
  duration = 20,
  flip = false,
}) => {
  return (
    <motion.div
      animate={{
        x: flip ? [window.innerWidth, startX] : [startX, window.innerWidth],
      }}
      transition={{ repeat: Infinity, duration, ease: "linear" }}
      className="h-[100px] "
    >
      <img
        src={cat}
        className="h-full"
        style={{ transform: flip ? "scaleX(-1)" : "scaleX(1)" }}
      />
    </motion.div>
  );
};

export default CatWalkingAnimation;
