import React from "react";
import { color } from "../../constants/common";
import { motion } from "framer-motion";

const DrinkImageBottomFrame = () => {
  return (
    <motion.svg
      animate={{
        y: [0, -20, 0], // 上下に浮くアニメーション
        rotate: [0, -3, 3, 0], // 左右に傾くアニメーション
      }}
      transition={{
        y: {
          duration: 7, // 上下アニメーションの1サイクル
          repeat: Infinity, // 無限ループ
          ease: "easeInOut",
          delay: 1,
        },
        rotate: {
          duration: 10, // 傾きアニメーションの1サイクル
          repeat: Infinity, // 無限ループ
          ease: "easeInOut",
          // 傾きだけ1秒遅らせて開始
        },
      }}
      width={"100%"}
      height={"100%"}
      viewBox="0 0 361 92"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.02666 26.131C6.94441 4.14689 -13.0006 -5.92122 24.0514 4.05255C203.331 68.2174 373.46 5.5814 359.935 55.8279C350.347 68.3617 347.532 99.5588 310.48 89.585C273.428 79.6113 -4.89108 48.1151 1.02666 26.131Z"
        fill={color.hassun_green}
      />
    </motion.svg>
  );
};

export default DrinkImageBottomFrame;
