import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";




export default function Layouts() {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}
