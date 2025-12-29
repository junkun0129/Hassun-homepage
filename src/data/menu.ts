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
    price: "（税込み２５００円）",
    title: "今週のHassun",
    desc: "旬の野菜と魚を中心に８種類の酒のあてを週替わりでご用意しております。　※今週のHassunは予約必須（前日まで）",
    comment: "",
  },
  {
    img: cakeset,
    price: "（税込み５５０円）",
    title: "ケーキセット",
    desc: "シフォンケーキとコーヒーまたは紅茶のセットをご用意しております。（今週のHassunを注文した場合にのみ注文可）",
    comment:
      "※今週のHassunのご注文かつドリンク２杯以上の注文にて無料で提供させていただきます。",
  },
  {
    img: otsumami,
    price: "（税込み６００円）",
    title: "おつまみセット",
    desc: "特性のディップを載せたクラッカーと、チョコ、ミックスナッツ、燻製チーズを一皿に。",
    comment:
      "※今週のHassunをご注文されない方はチャージ料としてこちらをご注文願います",
  },
];
