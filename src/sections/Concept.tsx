import { motion, MotionValue, useTransform } from "framer-motion";
import InfoContainerSVG from "../components/svg/InfoContainerSVG";
type Props = {
  scrollYProgress: MotionValue<number>;
};
const Concept = ({ scrollYProgress }: Props) => {
  const y = useTransform(
    scrollYProgress,
    [0, 2 / 3.1, 3 / 3],
    [-2000, 0, -2000]
  );
  return (
    <motion.div
      style={{ color: "#FFA82F", y }}
      className="w-full h-full flex items-center justify-center"
    >
      <div className="w-[93%] h-[100%]  relative">
        <div className="absolute p-44 w-full h-full flex">
          <div className="w-[50%] px-5">
            <div style={{ fontSize: "2rem" }}>週替わりの８品</div>
            <div>
              そこに生きる人々の構成によってパークレットは日々、年々と変わり続けます。外観、内観、メニュー、棚の品揃えも、働くスタッフ、生産者含め毎日顔を見せてくれる皆様、遠くから来ていただく皆様など、
            </div>
          </div>
          <div className="w-[50%] px-5">
            <div>
              そこに生きる人々の構成によってパークレットは日々、年々と変わり続けます。外観、内観、メニュー、棚の品揃えも、
            </div>
            <div style={{ fontSize: "2rem" }}>女性だけの空間</div>
          </div>
        </div>
        <InfoContainerSVG />
      </div>
    </motion.div>
  );
};

export default Concept;
