import React from "react";
import { appStyle, color } from "../../constants/common";
import { useNavigate } from "react-router-dom";
import HeaderSVG from "../svg/HeaderSVG";

const AppHeader = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{ height: appStyle.headerHeight, zIndex: "100" }}
      className="w-full fixed h-[100px] -top-3"
    >
      <HeaderSVG />
    </div>
  );
};

export default AppHeader;
