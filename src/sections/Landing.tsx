import HassunBall from "../components/svg/HassunBall";
import { motion, MotionValue, useTransform } from "framer-motion";
import { useDetailContext } from "../providers/DetailProvider";

type Props = {
  scrollYProgress: MotionValue<number>;
};
const Landing = ({ scrollYProgress }: Props) => {
  const y = useTransform(scrollYProgress, [0, 1 / 4], [0, -2000]);
  const zIndex = useTransform(scrollYProgress, [0, 1 / 4], [1, 0]);
  const { height, setheight } = useDetailContext();
  return (
    <div
      style={{ height, zIndex: zIndex.get() }}
      className="w-full h-full fixed"
    >
      <motion.div className="flex w-full h-full justify-center items-center relative">
        <motion.div
          style={{ y }}
          className=" relative w-full h-full flex items-center justify-center"
        >
          <div className=" absolute">
            <HassunBall />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Landing;
