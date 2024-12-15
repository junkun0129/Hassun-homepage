import React from "react";
import { MenuContents } from "../../data/menu";
import Section from "./Section";
type Props = MenuContents & {
  isMobile: boolean;
};
const MenuContent = ({ title, img, price, desc, comment, isMobile }: Props) => {
  return (
    <Section className="mt-10 mb-24 mx-5">
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
      <div
        style={isMobile ? { flexDirection: "column" } : {}}
        className="flex my-1"
      >
        {/* 料理名 */}
        <div className="mt-1" style={{ fontSize: "1.3rem" }}>
          {title}
        </div>
        {/* 値段 */}
        <div className="mt-2">{price}</div>
      </div>
      {/* 説明 */}
      <div>{desc}</div>
      {/* コメント */}
      <div className="mt-1" style={{ fontSize: "0.8rem" }}>
        {comment}
      </div>
    </Section>
  );
};

export default MenuContent;
