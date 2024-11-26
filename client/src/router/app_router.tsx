import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages and Layouts
import About from "../pages/About";
import NotFound from "../pages/NotFound";
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

        {/* Catch all for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
