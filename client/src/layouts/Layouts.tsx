import { Outlet } from "react-router-dom";
//head and tails
import Footer from "./main/Footer";
import Header from "./main/Header";

export default function Layouts() {
  return (
    <>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
    </>
  )
}
