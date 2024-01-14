// theme-context.tsx
import React, { createContext, useState, useMemo, useContext, ReactNode } from "react";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

// テーマモードを切り替える関数を格納するコンテキストを作成
const ColorModeContext = createContext({ toggleColorMode: () => {} });

interface CustomThemeProviderProps {
    children: ReactNode;
  }

// カスタムテーマプロバイダーコンポーネント
export const CustomThemeProvider = ({ children }: CustomThemeProviderProps) => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  // テーマを切り替える関数
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  // テーマ設定
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode, // ここでmode変数を使用
          ...(mode === "light"
            ? {
                // ライトモードの時のスタイル
                header: {
                  color: "#555555",
                  backgroundColor: "#DCDCDC",
                  bottomLineColor:
                    "linear-gradient(90deg, #DCDCDC, #2CD4BF, #DCDCDC)",
                },
              }
            : {
                // ダークモードの時のスタイル
                header: {
                  color: "#DCDCDC",
                  backgroundColor: "#252529",
                  bottomLineColor:
                    "linear-gradient(90deg, #252529, #2CD4BF, #252529)",
                },
              }),
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ColorModeContext.Provider>
  );
};

// テーマコンテキストを使用するためのフック
export const useCustomTheme = () => useContext(ColorModeContext);
