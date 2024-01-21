"use client";
import Welcome from "@/pages/welcome";
import Skills from "@/pages/skills";
import Works from "@/pages/works";
import Contests from "@/pages/contests";
import { useTheme } from "@mui/material/styles";
import { Suspense } from "react";
import Loading from "@/app/loading";
import { CustomThemeProvider } from "@/components/theme_context";
import Articles from "@/pages/articles";
import Footer from "@/pages/footer";
import Link from "next/link";
import Header from "@/pages/header";
import About from "@/pages/about";

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
      {/* <Welcome />
      <Articles />
      <Suspense fallback={<Loading />}>
        <About />
        <Skills />
        <Works />
        <Contests />
      </Suspense> */}
      <Footer />
    </CustomThemeProvider>
  );
}

export default Home;
