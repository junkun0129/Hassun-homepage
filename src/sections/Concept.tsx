import { motion, MotionValue, useTransform } from "framer-motion";
import big_plate_image from "/hassun-big-plate.jpg";
import HassunBall from "../components/svg/HassunBall";
import { useDetailContext } from "../providers/DetailProvider";
type Props = {
  scrollYProgress: MotionValue<number>;
};
const Concept = ({ scrollYProgress }: Props) => {
  const y = useTransform(scrollYProgress, [0, 2 / 3, 3 / 3], [-2000, 0, -2000]);
  const zIndex = useTransform(scrollYProgress, [0, 2 / 3, 3 / 3], [0, 100, 0]);
  const { height, setheight } = useDetailContext();

  return (
    <div
      style={{ height, zIndex: zIndex.get() }}
      className="w-full h-full fixed"
    >
      <motion.div style={{ color: "#FFA82F", y }} className="w-full h-full ">
        <div className="w-full h-[50px]"></div>
        <div className="flex justify-between items-center">
          {/* right paragrah */}
          <div className="w-[30%] h-full m-10">
            <div className=" text-4xl">週替わりの8品</div>
            <div className=" text-2xl my-3">
              そこに生きる人々の構成によってパークレットは日々、年々と変わり続けます。外観、内観、メニュー、棚の品揃えも、働くスタッフ、生産者含め毎日顔を見せてくれる皆様、遠くから来ていただく皆様など、
            </div>
            <div className="w-full h-[30%] rounded"></div>
            <div
              className="w-[100%] h-60 rounded-lg"
              style={{
                backgroundImage: `url(${big_plate_image})`,
                backgroundSize: "contain",
                backgroundPosition: "contain",
              }}
            ></div>
          </div>

          {/* center ball */}
          <div className="w-[20%] h-full">
            <HassunBall />
          </div>

          {/* left paragraph */}
          <div className="w-[30%] h-full m-10">
            <div className="w-full h-[30%] rounded"></div>
            <div
              className="w-[100%] h-60 rounded-lg"
              style={{
                backgroundImage: `url(${big_plate_image})`,
                backgroundSize: "contain",
                backgroundPosition: "contain",
              }}
            ></div>
            <div className=" text-2xl my-3">
              と変わり続けます。外観、内観、メニュー、棚の品揃えも、働くスタッフ、生産者含め毎日顔を見せてくれる皆様、遠くから来ていただく皆様など、
            </div>
            <div className=" text-4xl">週替わりの8品</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Concept;
