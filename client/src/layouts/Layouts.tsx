import { Outlet } from "react-router-dom";
//head and tails
import Footer from "./Footer";
import Header from "./Header";

export default function Layouts() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}
