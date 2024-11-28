import { Outlet } from "react-router-dom";
import Guide from "../pages/guides/Guide";



export default function GuideLayout() {
  return (
    <>
    <Guide />
    <Outlet />
    </>
  );
}
