import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages and Layouts
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import Recovery from "../pages/auth/Recovery";
import Layouts from "../layouts/Layouts";
import Home from "../pages/Home";
import Learn from "../pages/Learn";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/learn" element={<Learn />} />
        </Route>
        {/* account interact pages */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login/recovery" element={<Recovery />} />

        {/* Catch all for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
