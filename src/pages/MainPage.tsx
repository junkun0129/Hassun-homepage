import { motion, useScroll } from "framer-motion";
import React, { useRef, useState } from "react";
import Landing from "../sections/Landing";
import Menu from "../sections/Menu";
import Concept from "../sections/Concept";

const MainPage = () => {
  const [height, setheight] = useState("700");
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const { scrollYProgress: progressY1 } = useScroll({ target: ref1 });
  const { scrollYProgress: progressY2 } = useScroll({ target: ref2 });
  const { scrollYProgress: progressY3 } = useScroll({ target: ref3 });
  const { scrollYProgress: progressY4 } = useScroll({ target: ref4 });

  return (
    <div className="relative w-full h-full">
      <div style={{ height: `${height}px` }} className={`fixed w-full `}>
        <Landing scrollYProgress={progressY1} />
      </div>
      <div style={{ height: `${height}px` }} className={`fixed w-full `}>
        <Menu scrollYProgress={progressY2} />
      </div>

      <div style={{ height: `${height}px` }} className={`fixed w-full `}>
        <Concept scrollYProgress={progressY3} />
      </div>
      <div style={{ height: `${height}px` }} className={`fixed w-full `}>
        {/* <Landing scrollYProgress={progressY4} /> */}
      </div>
      <motion.div
        style={{ height: `${height}px` }}
        ref={ref1}
        className={`w-full`}
      ></motion.div>
      <motion.div
        style={{ height: `${height}px` }}
        ref={ref2}
        className={`w-full`}
      ></motion.div>
      <motion.div
        style={{ height: `${height}px` }}
        ref={ref3}
        className={`w-full`}
      ></motion.div>
      <motion.div
        style={{ height: `${height}px` }}
        ref={ref4}
        className={`w-full`}
      ></motion.div>
    </div>
  );
};

export default MainPage;
