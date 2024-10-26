import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import Menu1SVG from "../components/svg/Menu1SVG";
import Menu2SVG from "../components/svg/Menu2SVG";
import Menu3SVG from "../components/svg/Menu3SVG";
import big_plate_image from "/hassun-big-plate.jpg";

type Props = {
  scrollYProgress: MotionValue<number>;
};
const Menu = ({ scrollYProgress }: Props) => {
  // const opacity = useTransform(scrollYProgress, [1, 0.1, 0], [1, 1, 0]);

  const y = useTransform(
    scrollYProgress,
    [0, 1 / 3.1, 2 / 3],
    [-2000, 0, -2000]
  );
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("MENUUUU: ", latest);
  });
  return (
    <motion.div style={{ color: "#FFA82F", y }} className=" w-full h-full flex">
      <div className="relative w-[60%]">
        <div className="absolute top-24 left-5 w-[90%]">
          <div className="relative w-full h-full">
            <Label label="今週のHassun" price="（税込み２２００円）" />
            <Menu1SVG />
            <div
              style={{ fontSize: "1.5rem" }}
              className="absolute top-24 w-[60%] left-10"
            >
              旬の魚と野菜をあてに８っ種類の魚のあてを週替わりでご用意しております。
            </div>
            <div className="absolute top-44 w-[50%] left-10">
              ※今週のHassunを注文されない方は、チャージ料としてこちらを注文願います。
            </div>
            <div
              style={{
                backgroundImage: `url(${big_plate_image})`,
                backgroundSize: "cover",
              }}
              className="border border-black absolute bottom-10 left-16 w-[30%] h-[26%]"
            ></div>
          </div>
        </div>
        <div className="absolute bottom-24 right-0 w-[55%]">
          <Label label="ケーキセット" price="（税込み５５０円）" />
          <Menu2SVG />
        </div>
      </div>
      <div className="relative w-[40%]">
        <div className="absolute w-[90%] top-20 right-7">
          <Label label="おつまみセット" price="（税込み５５０円）" />
          <Menu3SVG />
        </div>
      </div>
    </motion.div>
  );
};

export default Menu;

const Label = ({ label, price }: { label: string; price: string }) => (
  <div className="flex items-end mx-5 w-full">
    <div style={{ fontSize: "2.5rem" }}>{label}</div>
    <div className=" mb-2" style={{ fontSize: "1.3rem" }}>
      {price}
    </div>
  </div>
);
