import { Code, Shield, Home, Mail, UserPlus } from "lucide-react";

type  NavItemProps  = {
    name: string;
    icon: React.ElementType;
    path: string;
  }
  
  const NAV_ITEMS: NavItemProps[] = [
    { name: "Home", icon: Home, path: "/" },
    { name: "About", icon: Shield, path: "/about" },
    { name: "Learn", icon: Code, path: "/learn" },
    { name: "Contact", icon: Mail, path: "/contact" },
    { name: "Signup", icon: UserPlus, path: "/signup" },
  ];

  export default NAV_ITEMS;