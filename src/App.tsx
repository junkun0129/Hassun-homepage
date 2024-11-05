import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/layout/AppLayout";
import MainPage from "./pages/MainPage";
import DetailProvider from "./providers/DetailProvider";
import { APIProvider } from "@vis.gl/react-google-maps";

function App() {
  const [scrollYProgress, setscrollYProgress] = useState(0);
  return (
    <>
      <DetailProvider>
        <APIProvider apiKey={"AIzaSyCLMvo_s8JFciYhn2XIBjYADYPn6Vzk_Yw"}>
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
        </APIProvider>
      </DetailProvider>
    </>
  );
}

export default App;
