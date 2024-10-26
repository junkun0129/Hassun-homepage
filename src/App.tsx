import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import MainPage from "./pages/MainPage";

function App() {
  const [scrollYProgress, setscrollYProgress] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout scrollYProgress={scrollYProgress} />}>
            <Route
              path="/"
              element={
                <MainPage
                  onScrollYChange={(scrollY) => setscrollYProgress(scrollY)}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
