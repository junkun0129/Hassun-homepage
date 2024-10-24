import { motion, MotionValue, useTransform } from "framer-motion";
import React from "react";
import InfoContainerSVG from "../components/svg/InfoContainerSVG";
type Props = {
  scrollYProgress: MotionValue<number>;
};
const Concept = ({ scrollYProgress }: Props) => {
  const opacity = useTransform(scrollYProgress, [0, 0.1, 1], [0, 1, 0]);
  return (
    <motion.div
      style={{ opacity, color: "#FFA82F", backgroundColor: "#FFA82F" }}
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
