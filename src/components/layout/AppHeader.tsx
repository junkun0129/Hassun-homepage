import { useEffect, useRef, useState } from "react";
import { appStyle } from "../../constants/common";
import HeaderSVG from "../svg/HeaderSVG";
import { motion } from "framer-motion";
type Props = {
  scrollYProgress: number;
};
const AppHeader = ({ scrollYProgress }: Props) => {
  const items = ["menu", "drinks", "concept", "access"];
  const refs = items.map(() => useRef<any>(null));
  const [activeNum, setactiveNum] = useState(0);

  const [activeposition, setactiveposition] = useState<{
    x: number;
    y: number;
  }>({ x: 0, y: 0 });

  useEffect(() => {
    const newactiveNum = Math.floor(scrollYProgress * 4);
    setactiveNum(newactiveNum);
  }, [scrollYProgress]);

  useEffect(() => {
    console.log(activeNum);
    if (activeNum > items.length) return;
    if (!refs[activeNum]) return;

    const rects = refs[activeNum].current?.getClientRects();
    if (!rects || !rects.length) return;
    const rect = rects[0];
    setactiveposition({ x: rect.x, y: rect.y });
  }, [activeNum]);

  return (
    <div
      style={{ height: appStyle.headerHeight, zIndex: "100" }}
      className="w-full fixed h-[100px] -top-3"
    >
      <motion.div
        style={{
          position: "absolute",

          backgroundColor: "#FFA82F",
        }}
        animate={{
          x: activeposition.x,
          y: activeposition.y,
          width: items[activeNum].length * 16,
        }}
        className=" h-[5px] bottom-10"
      ></motion.div>
      <div
        style={{ fontSize: "1.5rem", color: "#FFA82F" }}
        className="absolute w-full h-full flex justify-between top-5 px-44"
      >
        {items.map((item, i) => {
          return (
            <motion.div
              whileHover={{ scale: 1.1, cursor: "pointer" }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                window.scrollTo({ top: i * 700, behavior: "smooth" });
              }}
              ref={refs[i]}
            >
              {item}
            </motion.div>
          );
        })}
      </div>
      <HeaderSVG />
    </div>
  );
};

export default AppHeader;
