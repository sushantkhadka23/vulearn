


import { Outlet } from "react-router-dom";
import Labs from "../pages/labs/Labs";

export default function LabLayout() {
  return (
    <>
    <Labs />
    <Outlet />
    </>
  );
}
