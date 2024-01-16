"use client";
import Welcome from "@/pages/welcome/welcome";
import About from "@/pages/about/about";
import Skills from "@/pages/skills/skills";
import Contact from "@/pages/contact/contact";
import Works from "@/pages/works/works";
import Contests from "@/pages/contest/contest";
import Header from "@/pages/header/header";
import { createTheme, ThemeProvider, useTheme } from "@mui/material/styles";
import { Suspense } from "react";
import Loading from "@/app/loading";
import { PaletteMode } from "@mui/material";
import { CustomThemeProvider } from "@/components/theme_context";
import Articles from "@/pages/articles/articles";

// ダークモードかライトモードかを決定する値をここで設定します
// const mode: PaletteMode = 'light'; // 'light' または 'dark'

// const theme = createTheme({
//   palette: {
//     mode: mode, // ここでmode変数を使用
//     ...(mode === "light"
//       ? {
//           // ライトモードの時のスタイル
//           header: {
//             color: "#555555",
//             backgroundColor: "#DCDCDC",
//             bottomLineColor: "linear-gradient(90deg, #DCDCDC, #2CD4BF, #DCDCDC)",
//           },
//         }
//       : {
//           // ダークモードの時のスタイル
//           header: {
//             color: "#DCDCDC",
//             backgroundColor: "#252529",
//             bottomLineColor: "linear-gradient(90deg, #252529, #2CD4BF, #252529)",
//           },
//         }),
//   },
// });

function Home() {
  const theme = useTheme();

  return (
    <CustomThemeProvider>
      <Header />
      <Welcome />
      <Articles />
      <Suspense fallback={<Loading />}>
        <About />
        <Skills />
        <Works />
        <Contests />
        <Contact />
      </Suspense>
    </CustomThemeProvider>
  );
}

export default Home;
