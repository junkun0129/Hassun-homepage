import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const HassunBall = () => {
  const eyeControls = useAnimation();
  const mouthControls = useAnimation();

  useEffect(() => {
    const blinkAndSmile = async () => {
      while (true) {
        // 瞬き
        await eyeControls.start({ scaleY: 0.1, transition: { duration: 0.1 } });
        await eyeControls.start({ scaleY: 1, transition: { duration: 0.1 } });

        // 笑顔
        await mouthControls.start({
          d: "M60 150 Q 120.5 200, 183 150", // 笑顔の形
          transition: { duration: 0.2 },
        });
        await new Promise((resolve) => setTimeout(resolve, 500)); // 笑顔の持続時間
        await mouthControls.start({
          d: "M60 180 Q 101.5 150, 183 180", // 通常の口の形
          transition: { duration: 0.2 },
        });

        // 次の瞬きまでのランダムな待ち時間
        await new Promise((resolve) =>
          setTimeout(resolve, 2000 + Math.random() * 3000)
        );
      }
    };
    blinkAndSmile();
  }, [eyeControls, mouthControls]);

  return (
    <motion.svg
      whileHover={{ rotate: 180 }}
      width={"100%"}
      height={"100%"}
      viewBox="0 0 243 243"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 本体 */}
      <motion.circle
        transition={{ type: "spring" }}
        cx="121.5"
        cy="121.5"
        r="121.5"
        fill="black"
      />

      {/* 瞳 */}
      <motion.circle
        cx="91.5"
        cy="101.5"
        r="15"
        fill="white"
        animate={eyeControls}
      />
      <motion.circle
        cx="151.5"
        cy="101.5"
        r="15"
        fill="white"
        animate={eyeControls}
      />

      {/* "Hassun" を口に見立てた歯として表示 */}
      <motion.path
        id="mouthPath"
        d="M80 190 Q 121.5 150, 163 160" // 口の初期形状
        strokeWidth="5"
        fill="none"
        animate={mouthControls}
      />
      <motion.text
        fontSize="35" // サイズを大きく調整
        fill="white"
        fontWeight="bold"
      >
        <textPath
          href="#mouthPath"
          startOffset="50%"
          textAnchor="middle"
          dominantBaseline="central" // 下線を消すために使用
        >
          HASSUN
        </textPath>
      </motion.text>

      <defs>
        <filter
          id="filter0_d_3082_16312"
          x="61.0332"
          y="114.564"
          width="126.941"
          height="32.9648"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_3082_16312"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_3082_16312"
            result="shape"
          />
        </filter>
      </defs>
    </motion.svg>
  );
};

export default HassunBall;
