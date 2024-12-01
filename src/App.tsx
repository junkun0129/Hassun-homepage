import { useEffect, useRef, useState } from "react";
import image1 from "./assets/view1new.jpg";
import image2 from "./assets/view2.jpg";
import image3 from "./assets/view3.jpg";
import image4 from "./assets/view4.jpg";
import hassun from "./assets/hassun.jpg";
import cakeset from "./assets/cakeset.jpg";
import otsumami from "./assets/otsumamiset.jpg";
import kanban from "./assets/kanban.jpg";
import entrance from "./assets/entrance-super.jpg";
import HassunBall from "./components/svg/HassunBall";
import MyMap from "./components/MyMap";
import { motion } from "framer-motion";
import MailIcon from "./components/svg/MailIcon";
import InstagramIcon from "./components/svg/InstagramIcon";
import HutatsukiIcon from "./components/svg/HutatsukiIcon";
import About1Icon from "./components/svg/About1Icon";
import About2Icon from "./components/svg/About2Icon";
import { useNavigate } from "react-router-dom";
type MenuContent = {
  img: string;
  price: string;
  title: string;
  desc: string;
};
const menuArray: MenuContent[] = [
  {
    img: hassun,
    price: "（税込み２２００円）",
    title: "今週のHassun",
    desc: "旬の野菜と魚のあてに８っ種類の魚のあてを週替わりでご用意しております。　※一日８食限定のため、ご予約でのご来店をおすすめします。",
  },
  {
    img: cakeset,
    price: "（税込み５５０円）",
    title: "ケーキセット",
    desc: "シフォンケーキとコーヒーまたは紅茶ののセットをご用意しております。",
  },
  {
    img: otsumami,
    price: "（税込み５５０円）",
    title: "おつまみセット",
    desc: "特性のディップを載せたクラッカーと、チョコ、ミックスナッツ、燻製チーズを一皿に。",
  },
];

const alcoholArray: MenuContent[][] = [
  [
    {
      img: image1,
      price: "（税込み２００円）",
      title: "レモンサワー",
      desc: "旬の野菜と魚のあてに８っ種類の魚のあてを週替わりでご用意しております。",
    },
    {
      img: image2,
      price: "（税込み２００円）",
      title: "発酵レモンサワー",
      desc: "旬の野菜と魚のあてに８っ種類の魚のあてを週替わりでご用意しております。",
    },
    {
      img: image3,
      price: "（税込み２００円）",
      title: "ゆずサワー",
      desc: "旬の野菜と魚のあてに８っ種類の魚のあてを週替わりでご用意しております。",
    },
    {
      img: image3,
      price: "（税込み２００円）",
      title: "ジンリッキー",
      desc: "旬の野菜と魚のあてに８っ種類の魚のあてを週替わりでご用意しております。",
    },
  ],
  [
    {
      img: image1,
      price: "（税込み２００円）",
      title: "ハイボール",
      desc: "旬の野菜と魚のあてに８っ種類の魚のあてを週替わりでご用意しております。",
    },
    {
      img: image2,
      price: "（税込み２００円）",
      title: "アップルハイボール",
      desc: "旬の野菜と魚のあてに８っ種類の魚のあてを週替わりでご用意しております。",
    },
    {
      img: image3,
      price: "（税込み２００円）",
      title: "モヒート",
      desc: "旬の野菜と魚のあてに８っ種類の魚のあてを週替わりでご用意しております。",
    },
    {
      img: image3,
      price: "（税込み２００円）",
      title: "ソルベサワー",
      desc: "旬の野菜と魚のあてに８っ種類の魚のあてを週替わりでご用意しております。",
    },
  ],
  [
    {
      img: image1,
      price: "（税込み２００円）",
      title: "梅酒",
      desc: "旬の野菜と魚のあてに８っ種類の魚のあてを週替わりでご用意しております。",
    },
    {
      img: image2,
      price: "（税込み２００円）",
      title: "ビール",
      desc: "旬の野菜と魚のあてに８っ種類の魚のあてを週替わりでご用意しております。",
    },
    {
      img: "",
      price: "",
      title: "",
      desc: "",
    },
    {
      img: "",
      price: "",
      title: "",
      desc: "",
    },
  ],
];

const nonAlcoholArray: MenuContent[][] = [
  [
    {
      img: image1,
      price: "（税込み２００円）",
      title: "発酵レモンスカッシュ",
      desc: "旬の野菜と魚のあてに８っ種類の魚のあてを週替わりでご用意しております。",
    },
    {
      img: image2,
      price: "（税込み２００円）",
      title: "ノンアルモヒート",
      desc: "旬の野菜と魚のあてに８っ種類の魚のあてを週替わりでご用意しております。",
    },
    {
      img: image3,
      price: "（税込み２００円）",
      title: "ノンアルソルベサワー",
      desc: "旬の野菜と魚のあてに８っ種類の魚のあてを週替わりでご用意しております。",
    },
    {
      img: image3,
      price: "（税込み２００円）",
      title: "ピンクレモネード",
      desc: "旬の野菜と魚のあてに８っ種類の魚のあてを週替わりでご用意しております。",
    },
  ],
  [
    {
      img: image1,
      price: "（税込み２００円）",
      title: "ノンアルサンライズ",
      desc: "旬の野菜と魚のあてに８っ種類の魚のあてを週替わりでご用意しております。",
    },
    {
      img: "",
      price: "",
      title: "",
      desc: "",
    },
    {
      img: "",
      price: "",
      title: "",
      desc: "",
    },
    {
      img: "",
      price: "",
      title: "",
      desc: "",
    },
  ],
];

const drinkObject = {
  a: alcoholArray,
  na: nonAlcoholArray,
};

const MenuContent = ({ title, img, price, desc }: MenuContent) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0,
        duration: "0.9",
        easings: [0.17, 0.55, 0.55, 1],
      }}
      className="mt-10 mb-24 mx-5"
    >
      {/* 写真 */}
      <div
        style={{ width: "100%", height: "252px" }}
        className=" overflow-hidden rounded-lg"
      >
        <img
          src={img}
          style={{
            objectFit: "cover",
            width: "500px",
            height: "300px",
          }}
        />
      </div>
      {/* 料理名＋値段 */}
      <div className="flex my-1">
        {/* 料理名 */}
        <div className="mt-1" style={{ fontSize: "1.3rem" }}>
          {title}
        </div>
        {/* 値段 */}
        <div className="mt-2">{price}</div>
      </div>
      {/* 説明 */}
      <div>{desc}</div>
    </motion.div>
  );
};

function App() {
  const [drinktabIndex, setDrinktabIndex] = useState(0);
  const [drinkTabMode, setdrinkTabMode] = useState<"a" | "na">("a");
  const aboutRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const accessref = useRef<HTMLDivElement>(null);
  const aref = useRef(null);
  const handleClick = (num: number) => {
    if (num === 1) {
      if (drinkObject[drinkTabMode].length === drinktabIndex + 1) {
        return;
      } else {
        setDrinktabIndex((pre) => pre + 1);
      }
    } else {
      if (drinktabIndex <= 0) {
        return;
      } else {
        setDrinktabIndex((pre) => pre - 1);
      }
    }
  };

  return (
    <>
      <div
        style={{
          width: "97vw",
          height: "100vh",
        }}
        className="flex relative"
      >
        {/* main image on the left */}
        <div className="h-full w-[50%] main-images fixed z-20 overflow-hidden ">
          <img src={image1} />
          <img src={kanban} />
          <img src={kanban} />
          <img src={entrance} />
        </div>

        {/* main content */}
        <div
          className="w-[36.1%] main-content relative z-10"
          style={{ transform: "translateX(calc(50vw))" }}
        >
          {/* Hassunボール */}
          <div className=" absolute w-[80px] h-[80px] left-2 top-2">
            <HassunBall />
          </div>

          {/* ランディングページ */}
          <div className="w-[90%] h-[100vh] relative ml-4">
            {/* キャッチコピー */}
            <div className="w-[40%] flex flex-col items-start my-6 ml-auto">
              <div>for those</div>
              <div>looking for cozy place</div>
            </div>
            {/* 切り替わる画像 */}
            <div className="h-[370px] w-[90%] main-images fixed rounded-lg overflow-hidden shadow-lg">
              <img src={image4} />
              <img src={image3} />
              <img src={image2} />
              <img src={image1} />
            </div>
            {/* スクロール */}
            <div className=" w-full absolute bottom-10 flex justify-end">
              <div className="mr-2 mt-[1px] scrollallow">⇩</div>
              <div>scroll</div>
            </div>
          </div>

          {/* コンセプト */}
          <motion.div
            ref={aboutRef}
            className="w-[90%] h-[100vh] relative ml-4 flex flex-col"
          >
            {/* タイトル */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: "0.9",
                easings: [0.17, 0.55, 0.55, 1],
              }}
              style={{ fontSize: "1.5rem" }}
              className="my-10"
            >
              女性だけの空間を、
              <br />
              あなたに。
            </motion.div>

            {/* 文言１ */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.5,
                duration: "0.9",
                easings: [0.17, 0.55, 0.55, 1],
              }}
            >
              にぎやかな町の中で、
              <br />
              ほんの少し、足を休める場所。
              <br />
              今日はどんな週替わりの“あて”に出会えるだろう？
              <br />
            </motion.div>

            {/* 文言２ */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 1,
                duration: "0.9",
                easings: [0.17, 0.55, 0.55, 1],
              }}
              style={{ textAlign: "right" }}
              className="ml-auto my-20"
            >
              「Hassun」は、
              <br />
              女性が安心して立ち寄れる、
              <br />
              大皿にのった8種類の酒のあてとお酒の店。
            </motion.div>

            {/* 文言３ */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 1.5,
                duration: "0.9",
                easings: [0.17, 0.55, 0.55, 1],
              }}
            >
              気軽に訪れて、
              <br />
              心がふっと軽くなるような、
              <br />
              そんなひとときをご提供します。
            </motion.div>

            {/* svgs */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0,
                duration: "0.9",
                easings: [0.17, 0.55, 0.55, 1],
              }}
              className="absolute top-10 right-0 w-[150px] h-[150px]"
            >
              <HutatsukiIcon />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.5,
                duration: "0.9",
                easings: [0.17, 0.55, 0.55, 1],
              }}
              className="absolute -left-32 top-56 w-[300px] h-[200px]"
            >
              <About1Icon />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                delay: 1.5,
                duration: "0.9",
                easings: [0.17, 0.55, 0.55, 1],
              }}
              className="absolute -bottom-5 -right-20 w-[280px] h-[200px]"
            >
              <About2Icon />
            </motion.div>
          </motion.div>

          {/* メニュー */}
          <div ref={menuRef} className="w-[90%] relative ml-4 flex flex-col">
            <div>
              {/* コンテンツタイトル */}
              <div
                style={{ fontSize: "2rem" }}
                className="w-full flex justify-end my-5 mt-20"
              >
                Menu
              </div>

              {/* Food１（今週のHassun） */}
              {menuArray.map(({ title, desc, price, img }, i) => {
                return (
                  <MenuContent
                    key={i + title}
                    title={title}
                    desc={desc}
                    price={price}
                    img={img}
                  />
                );
              })}
            </div>
          </div>
          {/* drink */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: "0.9",
              easings: [0.17, 0.55, 0.55, 1],
            }}
            className="w-[90%] relative ml-4 flex flex-col"
          >
            <button
              onClick={() => handleClick(1)}
              className="absolute -right-4 top-[300px] rounded-full p-2 bg-gray-400 opacity-15 hover:opacity-100"
            >
              →
            </button>
            <button
              onClick={() => handleClick(-1)}
              className="absolute -left-4 top-[300px] rounded-full p-2 bg-gray-400 opacity-15 hover:opacity-100"
            >
              ←
            </button>
            <div
              style={{ fontSize: "2rem" }}
              className="w-full flex justify-end my-5"
            >
              Drink
            </div>

            {/* mode change */}
            <button
              className="flex w-[200px] justify-around py-2 px-1 rounded-lg ml-auto mb-5"
              style={{ backgroundColor: "#7a5331" }}
              onClick={() => {
                setDrinktabIndex(0);
                setdrinkTabMode((pre) => {
                  if (pre === "a") {
                    return "na";
                  } else {
                    return "a";
                  }
                });
              }}
            >
              <div
                style={{
                  color: drinkTabMode === "a" ? "#fff6e2" : "#7a5331",
                  backgroundColor: drinkTabMode === "a" ? "#7a5331" : "#fff6e2",
                }}
                className="rounded-md px-2"
              >
                alcohol
              </div>
              <div
                style={{
                  color: drinkTabMode === "a" ? "#7a5331" : "#fff6e2",
                  backgroundColor: drinkTabMode === "a" ? "#fff6e2" : "#7a5331",
                }}
                className="rounded-md px-2"
              >
                non-alcohol
              </div>
            </button>

            {/* drink display */}
            <div className="w-full flex flex-wrap justify-around">
              {drinkObject[drinkTabMode][drinktabIndex].map((element, i) => {
                return (
                  <div key={i + element.title} className="w-[35%] my-3">
                    <img
                      style={{ width: "100%", height: "150px" }}
                      src={element.img}
                    />
                    <div className="flex my-1 h-[20px]">{element.title} </div>
                    <div className="h-[50px]" style={{ fontSize: "0.8rem" }}>
                      {element.desc}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* access */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: "0.9",
              easings: [0.17, 0.55, 0.55, 1],
            }}
            ref={accessref}
            className="w-[90%] relative ml-4 flex flex-col"
          >
            <div
              style={{ fontSize: "2rem" }}
              className="w-full flex justify-end my-5 mt-20"
            >
              Access
            </div>
            <div className=" overflow-hidden rounded-lg ">
              <MyMap />
            </div>
            <div className="my-2" style={{ fontSize: "1.2rem" }}>
              Hassun
            </div>
            <div>
              〒739-1733 <br />
              広島県広島市安佐北区口田南8丁目3-1　303
            </div>
            <div className="mt-2">営業時間：17:00~23:00</div>
            <div>定休日：月曜日・火曜日・水曜日</div>
            <div>電話：082-909-9760</div>
            <button
              style={{ border: "solid 1px #7a5331", fontSize: "0.9rem" }}
              className="rounded-full py-3 mt-3 hover:bg-white"
            >
              席のご予約はこちら
            </button>
          </motion.div>

          {/* ad */}
          <div
            style={{ fontSize: "0.8rem" }}
            className="w-[90%] h-[40px] relative ml-4 flex justify-center items-center my-2 mb-10"
          >
            ©︎Hassun
          </div>
        </div>

        {/* app header */}
        <div
          style={{ color: "#33806c" }}
          className="h-full w-[15%] z-40 header fixed right-0 flex flex-col justify-around items-center"
        >
          <button
            style={{
              writingMode: "vertical-rl",
              textOrientation: "upright",
              fontSize: "2rem",
            }}
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Hassun
          </button>
          <div className="flex flex-col">
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.2 }}
              onClick={() => {
                if (!aboutRef.current) return;
                const y =
                  aboutRef.current.getBoundingClientRect().top + window.scrollY; // 修正
                window.scrollTo({
                  top: y,
                  behavior: "smooth",
                });
              }}
            >
              about
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.2 }}
              className="my-2"
              onClick={() => {
                if (!menuRef.current) return;
                const y =
                  menuRef.current.getBoundingClientRect().top + window.scrollY; // 修正
                window.scrollTo({
                  top: y,
                  behavior: "smooth",
                });
              }}
            >
              menu
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.2 }}
              onClick={() => {
                if (!accessref.current) return;
                const y =
                  accessref.current.getBoundingClientRect().top +
                  window.scrollY; // 修正
                window.scrollTo({
                  top: y,
                  behavior: "smooth",
                });
              }}
            >
              access
            </motion.button>
          </div>

          <div className="flex">
            {/* <div>
              <MailIcon />
            </div> */}
            <motion.button
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.2 }}
              className="w-[30px] h-[30px] rounded-full"
              onClick={() => {
                if (!aref.current) return;
                aref.current.click();
              }}
            >
              <InstagramIcon />
              <a
                href="https://www.instagram.com/hassun3fb?igsh=eDNmN201ZGZtMHd5"
                style={{ display: "none" }}
                ref={aref}
                target="_blank"
              />
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
