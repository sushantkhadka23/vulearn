import { useDispatch, useSelector } from "react-redux";
import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";

import { AppDispatch, RootState } from "../states/store"; 
import { getKey, setKey } from "../utils/localStorage";

export default function ThemeToggle() {
  // Use Redux selector to get the current theme state (isDarkMode)
  const isDarkMode:boolean = useSelector((state: RootState) => state.theme.isDarkMode);
  const dispatch: AppDispatch = useDispatch(); // Get the dispatch function from Redux

  // Load the theme from localStorage on the initial render
  useEffect(() => {
    // Use getKey to retrieve the saved theme from localStorage
    const savedTheme = getKey("theme");
    // If the saved theme is "dark", update the Redux state and add the dark class to the document
    if (savedTheme === "dark") {
      dispatch(toggleTheme()); // Dispatch the action to toggle the theme to dark
      document.documentElement.classList.add("dark"); // Add the "dark" class to the root element
    }
  }, [dispatch]);

  // Function to handle the toggle button click
  const handleToggle = () => {
    // Dispatch the toggleTheme action to update the theme state in Redux
    dispatch(toggleTheme());
    // Determine the new theme state after dispatching the action
    const newIsDarkMode = !isDarkMode; // If it was dark, set it to light and vice versa
    // Toggle the "dark" class on the document element based on the new theme state
    document.documentElement.classList.toggle("dark", newIsDarkMode);
    // Update localStorage with the new theme value ("dark" or "light")
    setKey("theme", newIsDarkMode ? "dark" : "light");
  };

  // Render the button to toggle the theme
  return (
    <button onClick={handleToggle} className="text-2xl p-2 mr-2">
      {/* Display the Sun icon if in dark mode, otherwise display the Moon icon */}
      {isDarkMode ? <Sun /> : <Moon />}
    </button>
  );
}
function toggleTheme(): any {
  throw new Error("Function not implemented.");
}

