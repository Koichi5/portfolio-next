import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { IconButton } from "@mui/material";

export const ThemeModeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <IconButton
        color="inherit"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {mounted && (
          <>{theme === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}</>
        )}
      </IconButton>
    </>
  );
};
