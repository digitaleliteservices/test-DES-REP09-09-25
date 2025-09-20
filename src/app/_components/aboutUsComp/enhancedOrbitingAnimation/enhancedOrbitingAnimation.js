"use client";

import { motion } from "framer-motion";

const EnhancedOrbitingAnimation = ({
  className = "",
  flowerSrc = "/assets/aboutrocket.png",
  size = 200,
}) => {
  return (
    <div
      className={`w-full flex justify-center mt-16 md:mt-20 md:mb-15 relative z-10 ${className}`}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="relative"
          style={{ width: size, height: size }}
          animate={{ rotate: 360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        >
          {/* single orbiting element */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2">
              <div
                style={{ width: 20, height: 20 }}
                className="rounded-full shadow-lg"
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "9999px",
                    background: "linear-gradient(90deg,#60a5fa,#8b5cf6)",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.img
        src={flowerSrc}
        alt="Decorative rocket"
        className="relative w-24 sm:w-28 md:w-32 h-auto z-40"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </div>
  );
};

export default EnhancedOrbitingAnimation;
