import { color } from "../../constants/common";
import { motion } from "framer-motion";

const DrinkImageUpperFrame = () => {
  return (
    <motion.svg
      animate={{
        y: [0, -10, 0], // 上下に浮くアニメーション
        rotate: [0, 3, -3, 0], // 左右に傾くアニメーション
      }}
      transition={{
        y: {
          duration: 6, // 上下アニメーションの1サイクル
          repeat: Infinity, // 無限ループ
          ease: "easeInOut",
        },
        rotate: {
          duration: 10, // 傾きアニメーションの1サイクル
          repeat: Infinity, // 無限ループ
          ease: "easeInOut",
          delay: 1, // 傾きだけ1秒遅らせて開始
        },
      }}
      width={"100%"}
      height={"100%"}
      viewBox="0 0 330 79"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M324.437 16.185C324.437 34.2319 344.037 37.8289 309.658 37.8289C139.611 25.654 7.01081 108.652 7.01082 67.4046C12.3868 55.8352 -17.5959 0.0591841 16.7825 0.0591841C51.1608 0.0591841 324.437 -1.86183 324.437 16.185Z"
        fill={color.hassun_green}
      />
    </motion.svg>
  );
};

export default DrinkImageUpperFrame;
