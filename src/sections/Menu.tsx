import {
  motion,
  MotionValue,
  useMotionValueEvent,
  useTransform,
} from "framer-motion";
import bid_plate_image from "/hassun-big-plate.jpg";
import { Card, Container, GreenContainer } from "../components/util";
import HassunBall from "../components/svg/HassunBall";
import { useDetailContext } from "../providers/DetailProvider";
type Props = {
  scrollYProgress: MotionValue<number>;
};
const Menu = ({ scrollYProgress }: Props) => {
  // const opacity = useTransform(scrollYProgress, [1, 0.1, 0], [1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1 / 3, 2 / 3], [-2000, 0, -2000]);
  const zIndex = useTransform(scrollYProgress, [0, 1 / 3, 2 / 3], [0, 100, 0]);
  useMotionValueEvent(zIndex, "change", (latest) => {
    console.log("MENUUUU: ", latest);
  });
  const { height, setheight } = useDetailContext();
  const alcoholicDrinks = [
    "レモンサワー",
    "発酵レモンサワー",
    "ゆずサワー",
    "ジンリッキー",
    "ハイボール",
    "アップルハイボール",
    "モヒート",
    "ソルベサワー",
    "梅酒",
    "ビール",
  ];

  const nonAlcoholicDrinks = [
    "発酵レモンスカッシュ",
    "ノンアルモヒート",
    "ノンアルソルベサワー",
    "ピンクレモネード",
    "ノンアルサンライズ",
  ];

  return (
    <div
      style={{ height, zIndex: zIndex.get() }}
      className="w-full h-full fixed"
    >
      <motion.div style={{ y }} className="w-full h-full relative">
        <div className="w-full h-[10%]"></div>
        <div className="flex w-[100%] h-[90%] items-center ">
          <Container
            content={
              <div className="p-4">
                <div className=" text-3xl">FOOD</div>
                <Card
                  label={"今週のHassun"}
                  desc={
                    "旬の魚と野菜をあてに８っ種類の魚のあてを週替わりでご用意しております。"
                  }
                  imageurl={bid_plate_image}
                />
                <Card
                  label={"今週のHassun"}
                  desc={
                    "旬の魚と野菜をあてに８っ種類の魚のあてを週替わりでご用意しております。"
                  }
                  imageurl={bid_plate_image}
                />
                <Card
                  label={"今週のHassun"}
                  desc={
                    "旬の魚と野菜をあてに８っ種類の魚のあてを週替わりでご用意しております。"
                  }
                  imageurl={bid_plate_image}
                />
              </div>
            }
          />
          <Container
            content={
              <div className="p-4">
                <div className=" text-3xl">DRINK</div>
                <GreenContainer>
                  <div className=" text-3xl">
                    <div>
                      <div>アルコール</div>
                      <div className=" flex flex-wrap text-lg ml-4 mt-2">
                        {alcoholicDrinks.map((item) => {
                          return (
                            <div className="w-[50%] py-0.5" key={item}>
                              {item}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className="mt-4">
                      <div>ノンアルコール</div>
                      <div className=" flex flex-wrap text-lg ml-4 mt-2">
                        {nonAlcoholicDrinks.map((item, i) => (
                          <div className="w-[50%] py-1" key={item + i}>
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </GreenContainer>
              </div>
            }
          />
        </div>
        <div className="absolute w-[50%] h-[50%] top-0 -right-72">
          <HassunBall />
        </div>
      </motion.div>
    </div>
  );
};

export default Menu;
