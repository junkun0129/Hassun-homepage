import { motion, MotionValue, useTransform } from "framer-motion";
import Info1SVG from "../components/svg/Info1SVG";
import Info2SVG from "../components/svg/Info2SVG";
type Props = {
  scrollYProgress: MotionValue<number>;
};
const Info = ({ scrollYProgress }: Props) => {
  const opacity = useTransform(scrollYProgress, [1, 0.1, 0], [1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.9], [-2000, 0]);
  return (
    <motion.div style={{ opacity, y }} className="flex w-full h-full">
      <div className=" flex mt-20 ml-3">
        <div className="w-[50%] f-hull">
          <Info1SVG />
        </div>
        <div className="w-[50%] f-hull">
          <Info2SVG />
        </div>
      </div>
    </motion.div>
  );
};

export default Info;
