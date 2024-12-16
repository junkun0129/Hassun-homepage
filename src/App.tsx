import { useRef, useState } from "react";
import image1 from "./assets/view1new.jpg";
import image2 from "./assets/view2.jpg";
import image3 from "./assets/view3.jpg";
import image4 from "./assets/view4.jpg";

import kanban from "./assets/kanban.jpg";
import entrance from "./assets/entrance-super.jpg";
import HassunBall from "./components/svg/HassunBall";
import { motion } from "framer-motion";
import InstagramIcon from "./components/svg/InstagramIcon";

import About1Icon from "./components/svg/About1Icon";
import About2Icon from "./components/svg/About2Icon";

import DrinkImageUpperFrame from "./components/svg/DrinkImageUpperFrame";
import DrinkImageBottomFrame from "./components/svg/DrinkImageBottomFrame";
import drinkmain from "./assets/drink-main.png";

import { sendEmailApi } from "./api/mail.api";
import { color } from "./constants/common";
import { useMediaQuery } from "react-responsive";
import { menuArray } from "./data/menu";
import HamburgerMenu from "./components/utils/HamburgerMenu";
import Section from "./components/utils/Section";
import MenuContent from "./components/utils/MenuContent";
import MyMap from "./components/utils/MyMap";

import FlexDrinkMenuHolder from "./components/svg/FlexDrinkMenuHolder";
import AccessPath from "./components/svg/AccessPath";
import ConceptDrinkLogo from "./components/svg/ConceptDrinkLogo";

function App() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const accessref = useRef<HTMLDivElement>(null);
  const contactref = useRef<HTMLDivElement>(null);

  const resObject = {
    about: aboutRef,
    menu: menuRef,
    access: accessref,
    contact: contactref,
  };

  const scrollRef = useRef<HTMLDivElement>(null);

  // Contact
  const emailRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [isEmailHassun, setisEmailHassun] = useState(false);
  const [isTexthassun, setisTexthassun] = useState(false);

  const [isAlc, setisAlc] = useState(true);
  const [emailButtonText, setemailButtonText] = useState("送信");
  const [isMobileMenuOpen, setisMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 640 });
  const aref = useRef<HTMLAnchorElement>(null);

  const wait = (num: number): Promise<void> =>
    new Promise((resolve, _) => {
      setTimeout(() => {
        resolve();
      }, num);
    });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setemailButtonText("・・・・送信中・・・・");
    const data = new FormData(event.target as any);
    const email = data.get("email");
    const text = data.get("text");

    if (!email || !text) return;
    try {
      await sendEmailApi({
        mailtext: text as string,
        from: email as string,
      });
      setemailButtonText("メールが送信されました");
      await wait(3000);
      setemailButtonText("送信");
      setisTexthassun(false);
      setisEmailHassun(false);
      if (textAreaRef.current) {
        textAreaRef.current.value = "";
      }
      if (emailRef.current) {
        emailRef.current.value = "";
      }
    } catch (error) {
      console.log(error);
      setemailButtonText("メールの送信に失敗しました");
      await wait(1000);
      setemailButtonText("送信");
    }
  };
  return (
    <>
      {isMobileMenuOpen && (
        <div
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
          className="z-40 fixed w-full h-full"
        ></div>
      )}
      {/* mobile menu bar */}
      {isMobile && (
        <div className="fixed top-3 right-10 z-50">
          <HamburgerMenu
            isOpen={isMobileMenuOpen}
            setIsOpen={(e) => setisMobileMenuOpen(e)}
            setisMobileMenuOpen={setisMobileMenuOpen}
            resObject={resObject}
          />
        </div>
      )}

      <div
        ref={scrollRef}
        style={
          isMobile
            ? {
                width: "100vw",
                height: "100vh",
                marginLeft: "15px",
              }
            : {
                width: "100vw",
                height: "100vh",
              }
        }
        className="flex relative overflow-auto"
      >
        {/* Main image on the left */}
        <div
          style={isMobile ? { display: "none" } : { display: "flex" }}
          className="h-full w-[50%] main-images fixed z-20 overflow-hidden "
        >
          <img src={image1} />
          <img src={kanban} />
          <img src={kanban} />
          <img src={entrance} />
        </div>

        {/* main content */}
        <div
          className="main-content relative z-10"
          style={
            isMobile
              ? { width: "100%" }
              : {
                  transform: "translateX(calc(51vw))",
                  width: "35.1%",
                }
          }
        >
          {/* Hassunボール */}
          <div
            style={
              isMobile ? { left: "2px", top: "10px" } : { display: "flex" }
            }
            className=" absolute w-[80px] h-[80px] top-2"
          >
            <HassunBall />
          </div>

          {/* ランディングページ */}
          <div className="w-[90%] h-[100vh] relative ">
            {/* キャッチコピー */}
            <div className="w-[40%] flex flex-col items-start my-6 ml-auto">
              <div>for those</div>
              <div>looking for cozy place</div>
            </div>
            {/* 切り替わる画像 */}
            <div className="h-[370px] w-[100%] main-images absolute rounded-lg overflow-hidden shadow-lg">
              <img src={image4} />
              <img src={image3} />
              <img src={image2} />
              <img src={image1} />
            </div>
            {/* スクロール */}
            <div className=" w-full absolute bottom-10 flex justify-end">
              <div className=" mt-[1px] scrollallow">⇩</div>
              <div>scroll</div>
            </div>
          </div>

          <div
            ref={accessref}
            style={{ fontSize: "2rem" }}
            className="w-full flex justify-center mt-20"
            onClick={() => {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }}
          >
            Access
          </div>
          {/* コンセプト */}
          <motion.div
            ref={aboutRef}
            className="w-[100%] h-[100vh] relative right-5  flex flex-col overflow-hidden"
          >
            <Section className="w-[120px] h-[120px] absolute top-10 right-10">
              <ConceptDrinkLogo />
            </Section>

            {/* タイトル */}

            <Section style={{ fontSize: "1.5rem" }} className="my-10 ml-5">
              女性だけの空間を、
              <br />
              あなたに。
            </Section>

            {/* 文言１ */}
            <Section className=" ml-5">
              にぎやかな町の中で、
              <br />
              ほんの少し、足を休める場所。
              <br />
              今日はどんな週替わりの“あて”に出会えるだろう？
              <br />
            </Section>

            {/* 文言２ */}
            <Section
              style={{ textAlign: "right" }}
              className="ml-auto my-20 mr-4"
            >
              「Hassun」は、
              <br />
              女性が安心して立ち寄れる、
              <br />
              大皿にのった8種類の酒のあてとお酒の店。
            </Section>

            {/* 文言３ */}
            <Section className="  ml-5">
              気軽に訪れて、
              <br />
              心がふっと軽くなるような、
              <br />
              そんなひとときをご提供します。
            </Section>

            {/* svgs */}
            {/* <Section className="absolute top-10 right-0 w-[150px] h-[150px]">
              <HutatsukiIcon />
            </Section> */}

            <Section className="absolute -left-32 top-56 w-[80%] h-[30%]">
              <About1Icon />
            </Section>

            <Section className="absolute -bottom-10 -right-20 w-[60%] h-[50%]">
              <About2Icon />
            </Section>
          </motion.div>

          {/* メニュー */}
          <div ref={menuRef} className="w-[90%] relative  flex flex-col">
            <div>
              {/* コンテンツタイトル */}
              <div
                style={{ fontSize: "2rem" }}
                className="w-full flex justify-center my-5 mt-20"
              >
                Menu
              </div>

              {/* Food１（今週のHassun） */}
              {menuArray.map(({ title, desc, price, img, comment }, i) => {
                return (
                  <MenuContent
                    key={i + title}
                    title={title}
                    desc={desc}
                    price={price}
                    img={img}
                    isMobile={isMobile}
                    comment={comment}
                  />
                );
              })}
            </div>
          </div>

          {/* drink */}
          <Section className="w-[100%] relative flex flex-col right-5">
            {/* コンテンツタイトル */}
            <div
              style={{ fontSize: "2rem" }}
              className="w-full flex justify-center my-5 mt-0 mb-10"
              ref={contactref}
            >
              Drink
            </div>

            <div
              className="-my-5 px-10"
              style={{
                color: color.hassun_orange,
                zIndex: 10,
              }}
            >
              試行錯誤を重ねて生まれた、550円の特別な一杯。
              <br />
              冷凍フルーツが溶けゆくノンアルコールドリンクは、最後のひとくちまで爽やかさを届けます。
              <br />
              ぜひ味わいにいらしてください。
            </div>

            {/* drink-main-image */}
            <div className="flex flex-col justify-between items-center relative">
              <div className="w-[130%] absolute -top-10">
                <DrinkImageUpperFrame />
              </div>
              <img className="-z-20 w-[100%] " src={drinkmain} />
              <div className="w-[150%] absolute -bottom-24">
                <DrinkImageBottomFrame />
              </div>
            </div>

            <div className=" h-[100px] z-0"></div>

            {!!isAlc && (
              <motion.div
                initial={{ y: 50, opacity: 0, rotate: -10 }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { y: { delay: 1.2 }, opacity: { delay: 1.2 } },
                }}
                className="absolute w-[100px] h-[100px] top-[67%] right-[30%]"
              >
                <HassunBall />
              </motion.div>
            )}
            {!!isAlc && (
              <div className="absolute top-[60%] left-7 z-50">
                <Section>
                  発酵レモンスカッシュ
                  <br />
                  ノンアルモヒート <br />
                  ノンアルソルベサワー
                  <br /> ピンクレモネード <br />
                  ノンアルサンライズ
                </Section>
              </div>
            )}

            <div
              style={{ color: color.hassun_green }}
              className="absolute top-[63%] left-[10%] z-50"
            >
              {!isAlc && (
                <Section className="w-full z-50">
                  レモンサワー
                  <br />
                  発酵レモンサワー <br />
                  ゆずサワー
                  <br /> ジンリッキー <br />
                  ハイボール
                </Section>
              )}
            </div>
            <div
              style={{ color: color.hassun_green }}
              className="absolute top-[68%] left-[40%] z-50"
            >
              {!isAlc && (
                <Section className="w-full">
                  ビール
                  <br />
                  モヒート <br />
                  ソルベサワー
                  <br /> 梅酒 <br />
                  アップルハイボール
                </Section>
              )}
            </div>

            <div
              style={{
                color: isAlc ? color.hassun_orange : color.hassun_green,
              }}
              className="flex flex-col w-full items-end z-50 pr-5"
            >
              <div
                style={{ fontSize: "0.7rem" }}
                className="flex flex-col items-center scrollallow"
              >
                <div>クリック</div>
                <div className="">⇩</div>
              </div>
              <button
                onClick={() => {
                  setisAlc((pre) => !pre);
                }}
                style={{ fontSize: "1.2rem" }}
              >
                {isAlc ? "alcohol" : "non-alcohol"}
              </button>
            </div>

            {/* bottom green space */}
            <div className="flex flex-col justify-between items-center relative z-10">
              <div className="w-[130%] relative">
                <FlexDrinkMenuHolder isAlc={isAlc} />
              </div>
            </div>
          </Section>

          {/* access */}
          <Section className="w-[90%] relative  flex flex-col">
            <div
              ref={accessref}
              style={{ fontSize: "2rem" }}
              className="w-full flex justify-center my-5 mt-0"
            >
              Access
            </div>
            <motion.div
              whileTap={{ scale: 0.9 }}
              className=" overflow-hidden rounded-lg "
            >
              <MyMap />
            </motion.div>
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
            <div className="w-[100%] h-[100%]">
              <AccessPath />
            </div>
          </Section>

          {/* contact */}
          <Section className="w-[90%] relative  flex flex-col">
            {/* コンテンツタイトル */}
            <div
              style={{ fontSize: "2rem" }}
              className="w-full flex justify-center my-5 mt-0"
              ref={contactref}
            >
              Contact
            </div>
            <form
              className="w-full flex flex-col justify-between items-center"
              onSubmit={handleSubmit}
            >
              <div
                style={{ backgroundColor: color.hassun_green }}
                className="w-full relative flex flex-col justify-between"
              >
                <input
                  className="w-full rounded-md p-2"
                  required
                  ref={emailRef}
                  onBlur={() => {
                    if (!emailRef.current) return;
                    if (emailRef.current.value) {
                      setisEmailHassun(true);
                    }
                  }}
                  name="email"
                  placeholder="email@example.com"
                />

                <textarea
                  required
                  ref={textAreaRef}
                  className="mt-5 w-full rounded-md p-2"
                  name="text"
                  onBlur={() => {
                    if (!textAreaRef.current) return;
                    if (textAreaRef.current.value) {
                      setisTexthassun(true);
                    }
                  }}
                  placeholder="こちらにお問い合わせ内容を記載し、”送信”ボタンを押してください。"
                />
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={isEmailHassun ? { y: 0, opacity: 1 } : {}}
                  className="absolute -top-14 left-5 -z-10 w-[100px] h-[100px]"
                >
                  <HassunBall />
                </motion.div>

                <motion.div
                  initial={{ y: -50, opacity: 0, rotate: 180 }}
                  animate={isTexthassun ? { y: 0, opacity: 1 } : {}}
                  className="absolute -bottom-14 right-5 -z-10 w-[100px] h-[100px]"
                >
                  <HassunBall />
                </motion.div>
              </div>
              <motion.button
                whileTap={{ scale: 0.9 }}
                style={{ border: `${color.hassun_orange} solid 1px` }}
                whileHover={{
                  boxShadow:
                    "0px 2px 2px 0px rgba(0, 0, 0, 0.5), inset 0px -3px 6px -2px",
                }}
                className="w-full py-3 rounded-md mt-10"
                type="submit"
                disabled={emailButtonText !== "送信"}
              >
                {emailButtonText}
              </motion.button>
            </form>
          </Section>

          {/* ad */}
          <div
            style={{ fontSize: "0.8rem" }}
            className="w-[90%] h-[40px] relative  flex justify-center items-center my-2 mb-10"
          >
            ©︎Hassun
          </div>
        </div>

        {/* app header */}
        <div
          style={
            isMobile
              ? { display: "none" }
              : { display: "flex", color: color.hassun_green }
          }
          className="h-full w-[15%] header fixed right-[16px] flex flex-col justify-around items-center"
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
            {Object.entries(resObject).map(([key, value]) => (
              <motion.button
                whileTap={{ scale: 0.8 }}
                whileHover={{ scale: 1.2 }}
                className="mb-2"
                onClick={() => {
                  if (!value.current) return;

                  const y =
                    value.current.getBoundingClientRect().top + window.scrollY; // 修正
                  if (!scrollRef.current) return;
                  scrollRef.current.scrollTo({ top: y, behavior: "smooth" });
                }}
              >
                {key}
              </motion.button>
            ))}
          </div>

          <div className="flex">
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
