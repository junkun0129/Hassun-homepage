import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import HassunBall from "./HassunBall";

const transition = {
  duration: 4,
  repeat: Infinity,
  repeatType: "reverse",
  ease: "easeInOut",
};

const AccessPath = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      className="bottom-4"
      ref={ref}
      style={{ width: "100%", height: "200px", position: "relative" }}
    >
      {isInView && (
        <div
          className="ml-36"
          style={{ width: "100%", height: "100%", position: "relative" }}
        >
          <svg
            width="100%"
            height="100%"
            // viewBox="0 0 273 132" // 元のパスの比率
            preserveAspectRatio="none" // 横幅全体に合わせる
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: "absolute", top: 0, left: 0 }}
          >
            <motion.path
              d="M215.56 2.07619C215.56 2.07619 251.812 18.0262 262.048 38.7652C275.29 65.5937 274.982 95.5097 252.046 114.721C228.391 134.534 180.644 138.793 173.252 108.834C167.777 86.6447 209.089 80.7125 203.288 58.6061C197.355 35.9972 172.747 22.6323 150.621 30.168C126.412 38.4129 145.545 71.7773 130.572 92.5103C121.087 105.645 116.183 123.175 100.165 120.736C85.7096 118.534 84.9719 103.42 77.9552 90.591C68.3151 72.9658 79.1735 52.1192 62.0072 41.6838C42.5828 29.8757 -14.9804 36.1988 6.10553 57.9087C27.1915 79.6186 34.8367 91.9557 24.8681 114.711"
              fill={"transparent"}
              stroke="#33806C"
              strokeWidth="5"
              strokeLinecap={"round"}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={transition as any}
            />
          </svg>
          <motion.div
            style={{
              position: "absolute",
              width: "50px",
              height: "50px",
              top: 0,
              left: 0,
              offsetPath:
                'path("M215.56 2.07619C215.56 2.07619 251.812 18.0262 262.048 38.7652C275.29 65.5937 274.982 95.5097 252.046 114.721C228.391 134.534 180.644 138.793 173.252 108.834C167.777 86.6447 209.089 80.7125 203.288 58.6061C197.355 35.9972 172.747 22.6323 150.621 30.168C126.412 38.4129 145.545 71.7773 130.572 92.5103C121.087 105.645 116.183 123.175 100.165 120.736C85.7096 118.534 84.9719 103.42 77.9552 90.591C68.3151 72.9658 79.1735 52.1192 62.0072 41.6838C42.5828 29.8757 -14.9804 36.1988 6.10553 57.9087C27.1915 79.6186 34.8367 91.9557 24.8681 114.711")',
              offsetRotate: "auto",
            }}
            initial={{ offsetDistance: "0%" }}
            animate={{ offsetDistance: "100%" }}
            transition={transition as any}
          >
            <HassunBall />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default AccessPath;
