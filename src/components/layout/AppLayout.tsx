import React, { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
import { useMotionValueEvent, useScroll } from "framer-motion";

const AppLayout = () => {
  return (
    <div className="w-full h-full relative">
      <AppHeader />
      <Outlet />
    </div>
  );
};

export default AppLayout;
