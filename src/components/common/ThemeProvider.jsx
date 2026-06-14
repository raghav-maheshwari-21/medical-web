import { useEffect } from "react";

import { getTheme } from "../../utils/getTheme";

const ThemeProvider = ({ children }) => {
  useEffect(() => {
    const theme = getTheme();

    Object.entries(theme).forEach(([key, value]) => {
      const cssVariableName = key.replace(
        /[A-Z]/g,
        (match) => `-${match.toLowerCase()}`
      );

      document.documentElement.style.setProperty(
        `--color-${cssVariableName}`,
        value
      );
    });
  });

  return children;
};

export default ThemeProvider;