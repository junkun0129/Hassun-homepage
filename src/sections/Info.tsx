import { motion, MotionValue, useTransform } from "framer-motion";
import { Container, GreenContainer } from "../components/util";
import { Map } from "@vis.gl/react-google-maps";
import HassunBall from "../components/svg/HassunBall";
import { useCallback } from "react";
import { useDetailContext } from "../providers/DetailProvider";
type Props = {
  scrollYProgress: MotionValue<number>;
};
const Info = ({ scrollYProgress }: Props) => {
  const y = useTransform(scrollYProgress, [0, 1], [-2000, 0]);
  const zIndex = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const { height, setheight } = useDetailContext();
  const MyMap = useCallback(() => {
    return (
      <Map
        style={{ width: "100%", height: "300px" }}
        defaultCenter={{ lat: 34.466588023874145, lng: 132.50721884578442 }}
        defaultZoom={17}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      />
    );
  }, []);

  const Section = ({ label, desc }: { label: string; desc: string }) => {
    return (
      <div className="mt-4">
        <div className="text-2xl">{label}</div>
        <div className="text-lg">{desc}</div>
      </div>
    );
  };
  return (
    <div
      style={{ height, zIndex: zIndex.get() }}
      className="w-full h-full fixed"
    >
      <motion.div style={{ y }} className=" w-full h-full relative">
        <div className="w-full h-[90px]"></div>
        <div className="flex justify-around w-full h-[90%]">
          <Container
            content={
              <div className="p-4">
                <div className=" text-3xl">INFO</div>
                <GreenContainer>
                  <div className=" text-3xl">
                    <Section label="営業時間" desc="平日8：00～10：00" />
                    <Section
                      label="住所"
                      desc="広島県広島市口田南四丁目40-23"
                    />
                    <Section label="電話番号" desc="090-739-1733" />
                  </div>
                </GreenContainer>
              </div>
            }
          />
          <Container
            content={
              <div className="p-4">
                <div className=" text-3xl">Access</div>
                <GreenContainer>
                  <div className=" text-3xl w-full h-full">
                    <div className="text-2xl my-4">
                      マックスバリュ口田店から徒歩５分！
                    </div>
                    <MyMap />
                  </div>
                </GreenContainer>
              </div>
            }
          />
        </div>
        <div className="absolute w-[50%] h-[50%] top-72 left-44">
          <HassunBall />
        </div>
      </motion.div>
    </div>
  );
};

export default Info;
