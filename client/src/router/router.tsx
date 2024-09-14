import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";


  import Home from "../pages/Home";
  import About from "../pages/About";
  import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import Recovery from "../pages/auth/Recovery";
  
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home />,
      errorElement:<NotFound />
    },
    {
      path:'/contact',
      element:<Contact />,
      errorElement:<NotFound />
    },
    {
      path:'/about',
      element:<About />,
      errorElement:<NotFound />
    },
    {
      path:'/signup',
      element:<Signup />,
      errorElement:<NotFound />
    },
    {
      path:'/login',
      element:<Login />,
      errorElement:<NotFound />
    },
    {
      path:'/recovery',
      element:<Recovery />,
      errorElement:<NotFound />
    },
  ]);
  
  const AppRouter: React.FC = () => {
    return <RouterProvider router={router} />;
  };
  
  export default AppRouter;
  