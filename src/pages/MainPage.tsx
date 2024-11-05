import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ReactNode, useEffect, useRef } from "react";
import Landing from "../sections/Landing";
import Menu from "../sections/Menu";
import Concept from "../sections/Concept";
import Info from "../sections/Info";
import { useDetailContext } from "../providers/DetailProvider";
import HassunBackGround from "../components/svg/HassunBackGround";
type Props = {
  onScrollYChange: (s: number) => void;
};
const MainPage = ({ onScrollYChange }: Props) => {
  const { height, setheight } = useDetailContext();
  const globalRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: globalRef,
  });
  useEffect(() => {
    const newHeight = window.innerHeight;
    setheight(newHeight);
  }, []);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    onScrollYChange(latest);
  });

  const Container = ({ children }: { children: ReactNode }) => (
    <div style={{ height: `${height}px` }} className={`fixed w-full `}>
      {children}
    </div>
  );
  return (
    <div
      ref={globalRef}
      style={{ backgroundColor: "#438372" }}
      className=" relative h-full w-full overflow-y-scrol"
    >
      {/* 背景 */}
      <div className="fixed">
        <HassunBackGround />
      </div>

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
