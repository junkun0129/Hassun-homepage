import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { color } from "../../constants/common";

type Props = {
  isAlc: boolean;
};

const FlexDrinkMenuHolder = ({ isAlc }: Props) => {
  const alcPathD =
    "M356.477 5.43309C271.457 -20.5205 45.6507 59.7907 13.2718 36.6976C-18.09 43.2182 18.3015 47.3478 21.0579 60.605C23.8143 73.8622 311.245 67.1266 342.607 60.6059C373.969 54.0852 369.703 22.3797 356.477 5.43309Z";
  const nonAlcPathD =
    "M341.16 67.4844C330.209 -8.01562 33.6602 70.4844 17.6602 0.484375C-13.7017 7.00505 5.90333 147.954 8.65973 161.211C11.4161 174.468 298.847 167.732 330.209 161.212C361.571 154.691 354.386 84.431 341.16 67.4844Z";

  // 常に下部の位置が固定されるviewBox
  const viewBox = "0 0 353 169";

  return (
    <motion.svg
      width={"100%"}
      height={"100%"}
      animate={{ translateY: isAlc ? 0 : -160 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className={"overflow-hidden"}
      viewBox={viewBox}
      preserveAspectRatio="xMidYMin slice" // 上方向に伸びる設定
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <motion.path
        d={isAlc ? alcPathD : nonAlcPathD}
        fill={color.hassun_orange}
        animate={{
          d: isAlc ? alcPathD : nonAlcPathD,
        }}
        initial={{ d: isAlc ? nonAlcPathD : alcPathD }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      />
    </motion.svg>
  );
};

export default FlexDrinkMenuHolder;
