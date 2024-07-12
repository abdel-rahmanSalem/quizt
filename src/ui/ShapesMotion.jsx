import { motion } from "framer-motion";
import { shapes } from "../constants/shapes";
function ShapesMotion() {
  return (
    <>
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`${shape.size} ${shape.color} ${shape.style} absolute`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{
            duration: 1,
            delay: shape.delay,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 60 + 20}%`,
          }}
        />
      ))}
    </>
  );
}

export default ShapesMotion;
