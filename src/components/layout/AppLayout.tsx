import { Outlet } from "react-router-dom";
import AppHeader from "./AppHeader";
type Props = {
  scrollYProgress: number;
};
const AppLayout = ({ scrollYProgress }: Props) => {
  return (
    <div className="w-full h-full relative">
      <AppHeader scrollYProgress={scrollYProgress} />
      <Outlet />
    </div>
  );
};

export default AppLayout;
