import { Outlet } from "react-router-dom";
import Tools from "../pages/tools/Tools";




export default function ToolsLayout() {
  return (
    <> 
    <Tools />
    <Outlet />
    </>
  );
}
