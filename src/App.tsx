import Spoon from "./components/svg/Spoon";

function App() {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex w-[50%] h-full-[50%]">
          <div className="w-[10%] cutlery">
            <Spoon></Spoon>
          </div>
          <div className="logo">
            <div className="w-[5%] h-[10%]"></div>
            <div className="title">
              H<span>a</span>ssun
            </div>
            <div className="sub-title ">Diner</div>
          </div>
          <div className="w-[10%] cutlery">
            <Spoon></Spoon>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
