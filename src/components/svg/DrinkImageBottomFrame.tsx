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
        d="M0.502129 80.4965C6.41987 58.5124 -8.27063 -8.9225 28.7814 1.05127C208.061 65.2161 378.19 2.58009 364.665 52.8266C355.077 65.3604 363.052 111.473 326 101.5C288.948 91.5259 -5.41562 102.481 0.502129 80.4965Z"
        fill={color.hassun_green}
      />
    </motion.svg>
  );
};

export default DrinkImageBottomFrame;
