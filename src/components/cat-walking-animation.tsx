import { motion } from "framer-motion";
import cat from "../assets/cat.gif";

const CatWalkingAnimation = () => {
  return (
    <motion.div
      animate={{ x: [-100, window.innerWidth] }}
      transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      className="h-full"
    >
      <img src={cat} className="h-full" />
    </motion.div>
  );
};

export default CatWalkingAnimation;
