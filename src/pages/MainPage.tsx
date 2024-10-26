import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ReactNode, useRef, useState } from "react";
import Landing from "../sections/Landing";
import Menu from "../sections/Menu";
import Concept from "../sections/Concept";
import Info from "../sections/Info";
import big_plate_image from "/hassun-big-plate.jpg";
type Props = {
  onScrollYChange: (s: number) => void;
};
const MainPage = ({ onScrollYChange }: Props) => {
  const [height] = useState(700);

  const globalRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: globalRef,
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    onScrollYChange(latest);
  });

  const Container = ({ children }: { children: ReactNode }) => (
    <div style={{ height: `${height}px` }} className={`fixed w-full `}>
      {children}
    </div>
  );
  return (
    <div ref={globalRef} className=" relative h-full w-full overflow-y-scrol">
      {/* 背景 */}
      <div
        style={{
          backgroundImage: `url(${big_plate_image})`,
          backgroundPosition: "cover",
          backgroundSize: "contain",
          height: `${height}px`,
        }}
        className="fixed w-full"
      ></div>
      <div className="absolute w-full h-full bg-black opacity-70"></div>

      {/* 各ページ */}
      <Container>
        <Landing scrollYProgress={scrollYProgress} />
      </Container>
      <Container>
        <Menu scrollYProgress={scrollYProgress} />
      </Container>
      <Container>
        <Concept scrollYProgress={scrollYProgress} />
      </Container>
      <Container>
        <Info scrollYProgress={scrollYProgress} />
      </Container>

      {/* スクロール用レイヤー */}
      {Array(4)
        .fill("")
        .map((_, i) => {
          return (
            <motion.div
              key={i}
              style={{ height: `${height}px` }}
              className={`w-full border border-black`}
            ></motion.div>
          );
        })}
    </div>
  );
};

export default MainPage;
