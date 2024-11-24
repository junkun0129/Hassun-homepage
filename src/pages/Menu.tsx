import {
  motion,
  useAnimate,
  useAnimationControls,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Heights } from "../App";
import { useEffect } from "react";

type Props = {
  heights: Heights;
};
const BASIC_STYLES = {
  TEXT_COLOR: "#fee",
  TEXT_SHADOW_COLOR: "#ff4444",
  BOXSHADOW_COLOR: "#a36464",
  SUBTITLE_TEXT_COLOR: "#f00000",
};
const SHADOW_STYLES = {
  BOX_NEON_SHADOW: `0 0 0.5rem ${BASIC_STYLES.BOXSHADOW_COLOR},
        inset 0 0 0.5rem ${BASIC_STYLES.BOXSHADOW_COLOR}, 0 0 2rem ${BASIC_STYLES.BOXSHADOW_COLOR},
        inset 0 0 2rem ${BASIC_STYLES.BOXSHADOW_COLOR}, 0 0 4rem ${BASIC_STYLES.BOXSHADOW_COLOR},
        inset 0 0 4rem ${BASIC_STYLES.BOXSHADOW_COLOR}`,
  TEXT_NEON_SHADOW: `0 -40px 100px, 0 0 2px, 0 0 1em ${BASIC_STYLES.TEXT_SHADOW_COLOR},
        0 0 0.5em ${BASIC_STYLES.TEXT_SHADOW_COLOR}, 0 0 0.1em ${BASIC_STYLES.TEXT_SHADOW_COLOR},
        0 10px 3px #000`,
};
const Menu = ({ heights }: Props) => {
  const { scrollY } = useScroll();
  const [scope, animate] = useAnimate();
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log(scrollY.get());
    console.log(heights.menu);
    if (heights.menu <= scrollY.get() + 1) {
      console.log("object");
      animate("", { opacity: 0 });
    }
  });

  return (
    <div
      className={`w-full  flex justify-center items-center relative`}
      style={{ height: heights.menu }}
    >
      <div
        style={{ userSelect: "none" }}
        className="w-[50%] h-[80%] flex justify-center items-center"
      >
        <div className="w-[60%] h-[80%] -mx-6 flex flex-col justify-center items-center ">
          <motion.div
            ref={scope}
            style={{
              textShadow: SHADOW_STYLES.TEXT_NEON_SHADOW,
              padding: "1rem",
              color: BASIC_STYLES.TEXT_COLOR,
            }}
            className=" w-[350px] h-[350px] rounded-full text-7xl flex justify-center items-center"
          >
            Menu
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

//autoScroll===nullかつsctionFireが発火していないのであれば＝＝＝各セクションアニメーション発火
//autoScroll!==nullまたはsectionFire発火済みであれば＝＝＝各セクションアニメーション発火しない
