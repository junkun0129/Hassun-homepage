import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import Menu1SVG from "../components/svg/Menu1SVG";
import Menu2SVG from "../components/svg/Menu2SVG";
import Menu3SVG from "../components/svg/Menu3SVG";
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
          <Label label="今週のHassun" price="（税込み２２００円）" />
          <Menu1SVG />
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
