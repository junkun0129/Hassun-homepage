import hassun from "../assets/hassun.jpg";
import cakeset from "../assets/cakeset.jpg";
import otsumami from "../assets/otsumamiset.jpg";
export type MenuContents = {
  img: string;
  price: string;
  title: string;
  desc: string;
  comment: string;
};
export const menuArray: MenuContents[] = [
  {
    img: hassun,
    price: "（税込み２２００円）",
    title: "今週のHassun",
    desc: "旬の野菜と魚のあてを中心に８種類の酒のあてを週替わりでご用意しております。　※一日８食限定のため、ご予約でのご来店をおすすめします。",
    comment: "",
  },
  {
    img: cakeset,
    price: "（税込み５５０円）",
    title: "ケーキセット",
    desc: "シフォンケーキとコーヒーまたは紅茶ののセットをご用意しております。",
    comment:
      "※今週のHassunにプラスでご注文いただけます。単品ではご注文いただけません",
  },
  {
    img: otsumami,
    price: "（税込み５５０円）",
    title: "おつまみセット",
    desc: "特性のディップを載せたクラッカーと、チョコ、ミックスナッツ、燻製チーズを一皿に。",
    comment:
      "※今週のHassunをご注文されない方はチャージ量としてこちらをご注文願います",
  },
];
