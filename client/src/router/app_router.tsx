
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages and Layouts
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Layouts from "../layouts/Layouts";
import Home from "../pages/Home";
import Learn from "../pages/Learn";
import LabLayout from "../layouts/LabLayout";
import Guide from "../pages/guides/Guide";
import Tools from "../pages/tools/Tools";
import Broken_Access_control from "../pages/labs/Broken_Access_control";
import Broken_Auth from "../pages/labs/Broken_Auth";
import CrypotgraphicFailure from "../pages/labs/Cryptographic_Failure";
import Injection from "../pages/labs/Injection";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/learn" element={<Learn />} />
          {/* under learn */}
          <Route path="/learn/labs" element={<LabLayout />} />
          {/* under labs */}
          <Route path="/learn/labs/broken-access-control" element={<Broken_Access_control />} />
          <Route path="/learn/labs/broken-auth" element={<Broken_Auth />} />
          <Route path="/learn/labs/cryptographic-failure" element={<CrypotgraphicFailure />} />
          <Route path="/learn/labs/injection" element={<Injection />} />

          <Route path="/learn/guide" element={<Guide />} />
          <Route path="/learn/tools" element={<Tools />} />
        </Route>

        {/* Catch all for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}


// /*
// //main layout
// main header
// outlet (home,learn,about)pages
// main footer

// //inside learn page
// main header
// learn (tools,guides,lab)
// main footer

// //clicking on labs page
// learning header
// outlet(lab1,lab2,lab3)
// learning footer

// //clicking tools
// learning header
// outlet(tools1,tools2,tools3)
// learning footer

// //clicking on  guides page
// learnig header
// outlet(guide1,guide2,guide3)
// learning footer



//  */



