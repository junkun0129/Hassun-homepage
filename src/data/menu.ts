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

//   const alcoholArray: MenuContent[][] = [
//     [
//       {
//         img: image1,
//         price: "（税込み２００円）",
//         title: "レモンサワー",
//         desc: "旬の野菜と魚のあてに８っ種類の魚のあてを週替わりでご用意しております。",
//       },
//       {
//         img: image2,
//         price: "（税込み２００円）",
//         title: "発酵レモンサワー",
//         desc: "旬の野菜と魚のあてに８っ種類の魚のあてを週替わりでご用意しております。",
//       },
//       {
//         img: image3,
//         price: "（税込み２００円）",
//         title: "ゆずサワー",
//         desc: "旬の野菜と魚のあてに８っ種類の魚のあてを週替わりでご用意しております。",
//       },
//       {
//         img: image3,
//         price: "（税込み２００円）",
//         title: "ジンリッキー",
//         desc: "旬の野菜と魚のあてに８っ種類の魚のあてを週替わりでご用意しております。",
//       },
//     ],
//     [
//       {
//         img: image1,
//         price: "（税込み２００円）",
//         title: "ハイボール",
//         desc: "旬の野菜と魚のあてに８っ種類の魚のあてを週替わりでご用意しております。",
//       },
//       {
//         img: image2,
//         price: "（税込み２００円）",
//         title: "アップルハイボール",
//         desc: "旬の野菜と魚のあてに８っ種類の魚のあてを週替わりでご用意しております。",
//       },
//       {
//         img: image3,
//         price: "（税込み２００円）",
//         title: "モヒート",
//         desc: "旬の野菜と魚のあてに８っ種類の魚のあてを週替わりでご用意しております。",
//       },
//       {
//         img: image3,
//         price: "（税込み２００円）",
//         title: "ソルベサワー",
//         desc: "旬の野菜と魚のあてに８っ種類の魚のあてを週替わりでご用意しております。",
//       },
//     ],
//     [
//       {
//         img: image1,
//         price: "（税込み２００円）",
//         title: "梅酒",
//         desc: "旬の野菜と魚のあてに８っ種類の魚のあてを週替わりでご用意しております。",
//       },
//       {
//         img: image2,
//         price: "（税込み２００円）",
//         title: "ビール",
//         desc: "旬の野菜と魚のあてに８っ種類の魚のあてを週替わりでご用意しております。",
//       },
//       {
//         img: "",
//         price: "",
//         title: "",
//         desc: "",
//       },
//       {
//         img: "",
//         price: "",
//         title: "",
//         desc: "",
//       },
//     ],
//   ];

//   export const nonAlcoholArray: MenuContent[][] = [
//     [
//       {
//         img: image1,
//         price: "（税込み２００円）",
//         title: "発酵レモンスカッシュ",
//         desc: "旬の野菜と魚のあてに８っ種類の魚のあてを週替わりでご用意しております。",
//       },
//       {
//         img: image2,
//         price: "（税込み２００円）",
//         title: "ノンアルモヒート",
//         desc: "旬の野菜と魚のあてに８っ種類の魚のあてを週替わりでご用意しております。",
//       },
//       {
//         img: image3,
//         price: "（税込み２００円）",
//         title: "ノンアルソルベサワー",
//         desc: "旬の野菜と魚のあてに８っ種類の魚のあてを週替わりでご用意しております。",
//       },
//       {
//         img: image3,
//         price: "（税込み２００円）",
//         title: "ピンクレモネード",
//         desc: "旬の野菜と魚のあてに８っ種類の魚のあてを週替わりでご用意しております。",
//       },
//     ],
//     [
//       {
//         img: image1,
//         price: "（税込み２００円）",
//         title: "ノンアルサンライズ",
//         desc: "旬の野菜と魚のあてに８っ種類の魚のあてを週替わりでご用意しております。",
//       },
//       {
//         img: "",
//         price: "",
//         title: "",
//         desc: "",
//       },
//       {
//         img: "",
//         price: "",
//         title: "",
//         desc: "",
//       },
//       {
//         img: "",
//         price: "",
//         title: "",
//         desc: "",
//       },
//     ],
//   ];
