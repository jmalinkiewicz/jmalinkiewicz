import { Outlet } from "react-router-dom";
import ThemeChange from "../components/ThemeChange";

function Root() {
  return (
    <div>
      <ThemeChange />
      <Outlet />
    </div>
  );
}

export default Root;
