import React, { useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import { LuSunMoon } from "react-icons/lu";
import useStore from "../store";

const ThemeSwitch = () => {
  const { theme, setTheme } = useStore((state) => state);
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div
      onClick={toggleTheme}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleTheme();
        }
      }}
      role="button"
      tabIndex={0}
      className="outline-none cursor-pointer inline-flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <LuSunMoon size={26} className="text-gray-500" />
      ) : (
        <IoMoonOutline size={26} className="text-gray-500" />
      )}
    </div>
  );
};

//   return (
//     <button onClick={toggleTheme} className="outline-none">
//       {isDarkMode ? (
//         <LuSunMoon size={26} className="text-gray-500" />
//       ) : (
//         <IoMoonOutline size={26} className="text-gray-500" />
//       )}
//     </button>
//   );
// };

export default ThemeSwitch;