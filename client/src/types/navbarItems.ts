type NavItemProps = {
  name: string;
  path: string;
};

const NAVITEMS: NavItemProps[] = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Learn", path: "/learn" },
];

export default NAVITEMS;
