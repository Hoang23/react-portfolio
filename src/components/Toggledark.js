import React from "react";

import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

const Toggledark = ({ theme, toggleTheme }) => {
  console.log(theme);

  return (
    <div onClick={toggleTheme}>
      {theme === "light" ? (
        <HiMoon fill='#303030' size={18} style={{ cursor: "pointer" }} />
      ) : (
        <CgSun size={18} style={{ cursor: "pointer" }} />
      )}
    </div>
  );
};

export default Toggledark;
