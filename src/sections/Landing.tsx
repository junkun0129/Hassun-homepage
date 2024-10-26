import HassunMainBack from "../components/svg/HassunMainBack";
import HassunMainText from "../components/svg/HassunMainText";
import { motion, MotionValue, useTransform } from "framer-motion";

type Props = {
  scrollYProgress: MotionValue<number>;
};
const Landing = ({ scrollYProgress }: Props) => {
  const opacity = useTransform(scrollYProgress, [1, 0.1, 0], [1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1 / 4], [0, -2000]);

  return (
    <motion.div
      // style={{ opacity }}
      className="flex w-full h-full justify-center items-center relative"
    >
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
