"use client";

import AboutHistoryCard from "@/components/about/about_history_card";
import SubTitle from "@/components/sub_title";
import TableItem from "@/components/table_item";
import { Grid } from "@mui/material";
import { AboutMyHistory } from "@prisma/client";
import { useEffect, useState } from "react";

const aboutHistories = [
  {
    id: 1,
    date: "2021. 4",
    value: "関西大学入学",
  },
  {
    id: 2,
    date: "2021. 11",
    value: "プログラミング（Web制作）を本格的に学習開始",
  },
  {
    id: 3,
    date: "2021. 12",
    value: "ビジネスコンテスト「ミライノピッチ」で企業賞複数受賞",
  },
  {
    id: 4,
    date: "2021. 12",
    value: "丸井グループ最年少アクセラレーター選出",
  },
  {
    id: 5,
    date: "2022. 2 - 2022. 10",
    value:
      "株式会社Voteee Technologies にて Flutter 講師としてインターンを経験",
  },
  {
    id: 6,
    date: "2022. 3",
    value: "起業家甲子園近畿地方代表、企業賞複数受賞",
  },
  {
    id: 7,
    date: "2022. 8 - 2023. 3",
    value: "関西大学の社会課題解決プログラム「山岡塾」に参加",
  },
  {
    id: 8,
    date: "2023. 2",
    value: "関西ビギナーズハッカソンにて優良賞受賞",
  },
  {
    id: 9,
    date: "2023. 2 - 2023. 4",
    value: "株式会社Wanderlust にて Flutter エンジニアとしてチーム開発を経験",
  },
  {
    id: 10,
    date: "2023. 4",
    value:
      "Flutter を用いた個人開発で情報科目学習サポートアプリ「Tech Journey」をリリース",
  },
  {
    id: 11,
    date: "2023. 5 -",
    value: "株式会社はんぽさき にて Flutter エンジニアとしてチーム開発を経験",
  },
  {
    id: 12,
    date: "2023. 7",
    value:
      "Swift を用いた個人開発で買い物サポートアプリ「買い物ナビ」をリリース",
  },
  {
    id: 13,
    date: "2023. 8",
    value:
      "株式会社 Sansan の 「Sansan Tech Internship SPARK2023」に参加",
  },
  {
    id: 14,
    date: "2023. 10",
    value: "株式会社 リクルート の長期就業型サマーインターンに参加",
  },
];

const AboutHistory = () => {
  // const [aboutMyHistories, setAboutMyHistories] = useState<AboutMyHistory[]>([]);
  // const [loading, setLoading] = useState(false);

  // const fetchAboutMyHistories = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await fetch("/api/aboutMyHistories");
  //     if (!response.ok) {
  //       throw new Error("Network response was not ok");
  //     }
  //     const data = await response.json();
  //     setAboutMyHistories(data);
  //   } catch (error) {
  //     console.error("Failed to fetch about my histories:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchAboutMyHistories();
  // }, []);

  return (
    <Grid container spacing={2}>
      {aboutHistories.map((history, index) => (
        <Grid key={history.id} item xs={12} sm={12}>
          <AboutHistoryCard date={history.date} value={history.value} />
        </Grid>
      ))}
    </Grid>
    // <div style={{ paddingBottom: 40 }}>
    //   <SubTitle text={"My History"} />
    //   <table
    //     style={{ alignSelf: "left", alignContent: "left", alignItems: "left" }}
    //   >
    //     {aboutMyHistories.map((myHistory) => (
    //       <div key={myHistory.id}>
    //       <TableItem
    //         keyValue={myHistory.date}
    //         Value={myHistory.value}
    //         paddingBetween={230}
    //       />
    //       </div>
    //     ))}
    //   </table>
    // </div>
  );
};

export default AboutHistory;
