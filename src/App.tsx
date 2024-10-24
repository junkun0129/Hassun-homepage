import { ReactNode, useEffect, useRef, useState } from "react";
import MainContent from "./components/layout/AppContent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import { color } from "./constants/common";
import Landing from "./sections/Landing";
import { useScroll } from "framer-motion";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<MainPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
