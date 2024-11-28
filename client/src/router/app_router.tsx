
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages and Layouts
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Layouts from "../layouts/Layouts";
import Home from "../pages/Home";
import Learn from "../pages/Learn";
import Labs from "../pages/labs/Labs";
import Tools from "../pages/tools/Tools";
import Guide from "../pages/guides/Guide";
import Broken_Auth from "../pages/labs/Broken_Auth";
import Broken_Access_control from "../pages/labs/Broken_Access_control";
import CrypotgraphicFailure from "../pages/labs/Cryptographic_Failure";
import Injection from "../pages/labs/Injection";
import SQLInjectionPage from "../pages/labs/sql/SQLInjectionPage";
import SQLInjectionLab from "../pages/labs/sql/SQLInjectionLab";
import NoSQLInjectionPage from "../pages/labs/noSql/NoSQLInjectionPage";
import NoSQLInjectionLab from "../pages/labs/noSql/NoSQLInjectionLab";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layouts />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/learn" element={<Learn />} />
          {/* under learn */}
          <Route path="/learn/labs" element={<Labs />} />
           {/* under labs */}
           <Route path="/learn/labs/broken-auth" element={<Broken_Auth />} />
           <Route path="/learn/labs/broken-access-control" element={<Broken_Access_control />} />
           <Route path="/learn/labs/cryptographic-failure" element={<CrypotgraphicFailure />} />
           <Route path="/learn/labs/injection" element={<Injection />} />
           {/* under injection */}
           <Route path="/learn/labs/injection/sql-injection" element={<SQLInjectionPage />} />
           <Route path="/learn/labs/injection/sql-injection/lab" element={<SQLInjectionLab />} />
           <Route path="/learn/labs/injection/nosql-injection" element={<NoSQLInjectionPage />} />
           <Route path="/learn/labs/injection/nosql-injection/lab" element={<NoSQLInjectionLab />} />


          <Route path="/learn/tools" element={<Tools />} />
          <Route path="/learn/guides" element={<Guide />} />
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





