
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages and Layouts
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Layouts from "../layouts/Layouts";
import Home from "../pages/Home";
import Learn from "../pages/Learn";
import Labs from "../pages/labs/Labs";
import Guide from "../pages/guides/Guide";
import Broken_Access_control from "../pages/labs/Broken_Access_control";
import CrypotgraphicFailure from "../pages/labs/Cryptographic_Failure";
import Injection from "../pages/labs/Injection";
import SQLInjectionPage from "../pages/labs/sql/SQLInjectionPage";
import SQLInjectionLab from "../pages/labs/sql/SQLInjectionLab";
import NoSQLInjectionPage from "../pages/labs/noSql/NoSQLInjectionPage";
import NoSQLInjectionLab from "../pages/labs/noSql/NoSQLInjectionLab";
import CommandInjectionPage from "../pages/labs/command/CommandInjectionPage";
import CommandInjectionLabPage from "../pages/labs/command/CommandInjectionLab";
import XSSInjectionPage from "../pages/labs/xss/XSSInjectionPage";
import XSSInjectionLab from "../pages/labs/xss/XssInjectionLab";
import Tools from "../pages/tools/Tools";
import IDORLab from "../pages/labs/idor/IdorLab";
import IDORPage from "../pages/labs/idor/IdorPage";
import BruteForce from "../pages/labs/broken auth acces/BruteForce";
import BruteForceLab from "../pages/labs/broken auth acces/BruteForceLab";
import BrokenAuth from "../pages/labs/Broken_Auth";
import SSRF from "../pages/labs/SSRF";
import SSRFPage from "../pages/labs/ssrf/SSRFPage";
import BasicSSRFLab from "../pages/labs/ssrf/BasicSSRFLab";


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
           <Route path="/learn/labs/broken-auth" element={<BrokenAuth />} />
           <Route path="/learn/labs/broken-auth/brute-force" element={<BruteForce />} />
           <Route path="/learn/labs/broken-auth/brute-force/lab" element={<BruteForceLab />} />


           <Route path="/learn/labs/broken-access-control" element={<Broken_Access_control />} />
           {/* under broken access control */}
           <Route path="/learn/labs/broken-access-control/idor" element={<IDORPage />} />
           <Route path="/learn/labs/broken-access-control/idor/lab" element={<IDORLab />} />
           
           <Route path="/learn/labs/cryptographic-failure" element={<CrypotgraphicFailure />} />
           <Route path="/learn/labs/ssrf" element={<SSRF />} />
           {/* under ssrf */}
           <Route path="/learn/labs/ssrf/topic/lab" element={<BasicSSRFLab />} />
           <Route path="/learn/labs/ssrf/topic" element={<SSRFPage />} />
           <Route path="/learn/labs/injection" element={<Injection />} />
           {/* under injection */}
           <Route path="/learn/labs/injection/sql-injection" element={<SQLInjectionPage />} />
           <Route path="/learn/labs/injection/sql-injection/lab" element={<SQLInjectionLab />} />
           <Route path="/learn/labs/injection/nosql-injection" element={<NoSQLInjectionPage />} />
           <Route path="/learn/labs/injection/nosql-injection/lab" element={<NoSQLInjectionLab />} />
           <Route path="/learn/labs/injection/xss-injection" element={<XSSInjectionPage />} />
           <Route path="/learn/labs/injection/xss-injection/lab" element={<XSSInjectionLab />} />
           <Route path="/learn/labs/injection/command-injection" element={<CommandInjectionPage />} />
           <Route path="/learn/labs/injection/command-injection/lab" element={<CommandInjectionLabPage />} />

          



          <Route path="/learn/tools" element={<Tools />} />
          <Route path="/learn/guides" element={<Guide />} />
          </Route>

        {/* Catch all for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}






