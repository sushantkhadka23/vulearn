
type  NavItemProps  = {
    name: string;
    path: string;
  }
  
  const NAVITEMS: NavItemProps[] = [
    { name: "Home",  path: "/" },
    { name: "About",  path: "/about" },
    { name: "Learn",  path: "/learn" },
    { name: "Contact",  path: "/contact" },
    { name: "Signup",  path: "/signup" },
  ];

  export default NAVITEMS;