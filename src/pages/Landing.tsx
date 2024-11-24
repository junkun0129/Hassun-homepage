import React, { useEffect, useState } from "react";
import Spoon from "../components/svg/Spoon";
import Fork from "../components/svg/Fork";
import { Heights } from "../App";
const BASIC_STYLES = {
  TEXT_COLOR: "#fee",
  TEXT_SHADOW_COLOR: "#ff4444",
  BOXSHADOW_COLOR: "white",
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
type Props = {
  heights: Heights;
};
const Landing = ({ heights }: Props) => {
  return (
    <div
      className={`w-full  flex justify-center items-center relative`}
      style={{ height: heights.landing }}
    >
      <div className="w-full h-full absolute text-white ">
        <div className="flex h-[50%] justify-around items-center">
          <div>menu</div>
          <div>access</div>
        </div>
        <div className="flex h-[50%] justify-around items-center">
          <div>info</div>
          <div>book</div>
        </div>
      </div>
      <div
        style={{ userSelect: "none" }}
        className="w-[50%] h-[80%] flex justify-center items-center"
      >
        <div className="w-[13%] cutlery -rotate-12">
          <Spoon></Spoon>
        </div>
        <div className="w-[60%] h-[80%] -mx-6 flex flex-col justify-center items-center ">
          {/* <div
            style={{
              textShadow: SHADOW_STYLES.TEXT_NEON_SHADOW,
              boxShadow: SHADOW_STYLES.BOX_NEON_SHADOW,
              padding: "1rem",
              color: BASIC_STYLES.TEXT_COLOR,
              border: "0.8rem solid",
            }}
            className=" w-[350px] h-[350px] rounded-full text-7xl flex justify-center items-center"
          >
            H<span>a</span>ssun
          </div> */}
          <div
            style={{ boxShadow: SHADOW_STYLES.BOX_NEON_SHADOW }}
            className="bg-black text-white w-[50%] h-[50%] flex justify-center items-center rounded-full text-4xl"
          >
            <div className="w-full h-full m-1 bg-black rounded-full flex justify-center items-center">
              Hassun
            </div>
          </div>
          <div
            className="cutlery"
            style={{
              color: BASIC_STYLES.SUBTITLE_TEXT_COLOR,
              fontSize: "6rem",
              textShadow: SHADOW_STYLES.TEXT_NEON_SHADOW,
              fontWeight: 600,
              fontStyle: "italic",
            }}
          >
            Diner
          </div>
        </div>
        <div className="w-[13%] cutlery rotate-12">
          <Fork />
        </div>
      </div>
    </div>
  );
};

export default Landing;
