import React from "react";
import HassunMainBack from "../components/svg/HassunMainBack";
import HassunMainText from "../components/svg/HassunMainText";
import big_plate_image from "/hassun-big-plate.jpg";
import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";

type Props = {
  scrollYProgress: MotionValue<number>;
};
const Landing = ({ scrollYProgress }: Props) => {
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page landing: ", latest);
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -2000]);

  return (
    <motion.div
      style={{ opacity }}
      className="flex w-full h-full justify-center items-center relative"
    >
      <div
        style={{
          backgroundImage: `url(${big_plate_image})`,
          backgroundPosition: "cover",
          backgroundSize: "contain",
        }}
        className="absolute w-full h-full"
      ></div>
      <div className="absolute w-full h-full bg-black opacity-70"></div>
      <motion.div
        style={{ y }}
        className=" relative flex items-center justify-center"
      >
        <div className=" absolute">
          <HassunMainBack />
        </div>
        <div className=" absolute">
          <HassunMainText />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Landing;
