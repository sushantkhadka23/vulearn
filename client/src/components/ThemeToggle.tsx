import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState, AppDispatch } from "../states/store";
import { themeToggle } from "../states/theme/themeSlice";

export default function ThemeToggle() {
  // Use useSelector to get the current theme state
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      dispatch(themeToggle());
      document.documentElement.classList.add("dark");
    }
    // Ensure light mode is set
     else {
      document.documentElement.classList.remove("dark"); 
    }
  }, [dispatch]);

  const handleToggle = () => {
    dispatch(themeToggle());
    // Toggle the dark class on the document element
    document.documentElement.classList.toggle("dark", !isDarkMode);
    // Update localStorage with the new theme
    localStorage.setItem("theme", isDarkMode ? "light" : "dark");
  };

  return (
    <button onClick={handleToggle} className="text-lt-fore dark:text-dk-fore">
      {isDarkMode ? <Sun /> : <Moon />}
    </button>
  );
}
