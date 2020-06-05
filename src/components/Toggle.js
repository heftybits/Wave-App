import React from "react";
import { func, string } from "prop-types";

const Switch = ({ theme, toggleTheme }) => {
  const themeButton = theme === "dark" ? "☀️ Light" : "🔦 Dark";

  return (
    <div className="switch">
      <button onClick={toggleTheme}>{themeButton}</button>
    </div>
  );
};

Switch.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired
};

export default Switch;
