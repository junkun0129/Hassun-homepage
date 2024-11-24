import { useEffect, useRef, useState } from "react";
import Landing from "./pages/Landing";
import Menu from "./pages/Menu";
import { awaitScrollTo } from "./utils";
export type Heights = {
  landing: number;
  info: number;
  access: number;
  book: number;
  menu: number;
};

export type Flag = "1" | "0";

export type SectionFired = {
  info: Flag;
  access: Flag;
  book: Flag;
  menu: Flag;
};

function App() {
  const [heights, setheights] = useState<Heights>({
    landing: 0,
    info: 0,
    access: 0,
    book: 0,
    menu: 0,
  });
  const [sctionFired, setsctionFired] = useState<SectionFired>({
    info: "0",
    access: "0",
    book: "0",
    menu: "0",
  });
  const [autoScroll, setautoScroll] = useState<number | null>(null);

  useEffect(() => {
    const height = window.innerHeight;
    setheights({
      landing: height,
      info: height,
      access: height,
      book: height,
      menu: height,
    });
  }, []);

  useEffect(() => {
    if (autoScroll === null) return;
    runAutoScroll(autoScroll);
  }, [autoScroll]);

  const runAutoScroll = async (scrollTo: number) => {
    await awaitScrollTo(scrollTo);
    setautoScroll(null);
  };

  const handleClick = () => {
    setautoScroll(0);
  };
  return (
    <>
      <div className="h-full w-full relative">
        <Landing heights={heights} />
        <Menu heights={heights} />
        <button
          onClick={() => handleClick()}
          className="fixed right-0 bottom-0 text-white border border-white p-3 m-10"
        >
          ページトップへ
        </button>
      </div>
    </>
  );
}

export default App;
