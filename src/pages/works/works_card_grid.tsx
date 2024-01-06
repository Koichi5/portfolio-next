import CardWithDialog from "@/components/card_with_dialog";
import ImageLink from "@/components/image_link";
import Grid from "@mui/material/Grid";
import { Work } from "@prisma/client";
import { useEffect, useState } from "react";

// const cards = [
//   {
//     imageSrc:
//       "https://lh3.googleusercontent.com/pw/AIL4fc9NqE87qGHvw3qNHeXrVd8AJlWQs4NuiRbvhFcPdx4Dh7msvEoAlzog0lyECoKOa9PJoPek9qUZK_DFpdoD12pJqUyRs8EbwVEC929DcbEZPVGgv7odbkVdi2Ecd8zsTEKo4F11DWzNiYw-LZLHbEtE=w500-h500-s-no?authuser=0",
//     title: "Tech Journey",
//     attribute: "個人開発",
//     firstContentTitle: "DETAIL",
//     firstContent:
//       "2025年から大学入学共通テストの必須科目に追加される「情報」に関する学習をサポートするためのクイズアプリ。自分自身がプログラミングについて学び、その楽しさに気づいたため、同じように情報やプログラミングについて面白さを感じる人を一人でも増やしたいと感じたため開発しました",
//     secondContentTitle: "POINT",
//     secondContent:
//       "FlutterとFirebaseを用いて初めて開発したアプリで、クイズを解くだけでなく、ユーザーがクイズを作成したり、苦手な問題を記録して復習したりする機能を加えるのに苦労しました",
//     thirdContentTitle: "TECH",
//     thirdContent: "Dart,  Flutter,  Firebase",
//     fourthContentTitle: "SOURCE",
//     fourthContent: [
//       <div style={{ alignItems: "center", display: "flex" }}>
//         <ImageLink
//           link_target={
//             "https://play.google.com/store/apps/details?id=com.koichi.techjourney"
//           }
//           image_source={
//             "https://lh3.googleusercontent.com/pw/AIL4fc9ULNJ10vBRXoTBM2hGcBivz80zhid7vrChx8yllEANsNR4gTZciRDYL26iWSNhe4ssqSlzIGAagPqXBup7dKdQPDd722zk_Mn7sg991XR7PtZd0PUrhF3Tmuyr52HwpYJFtmkuiFnwfZcXZot4ndpr=w512-h512-s-no?authuser=0"
//           }
//           image_altnative={"tech_journey_play_store"}
//           image_width={40}
//           image_height={40}
//         />
//         <ImageLink
//           link_target={"https://github.com/Koichi5/quiz_app"}
//           image_source={
//             "https://lh3.googleusercontent.com/pw/AIL4fc9E5vZ_Zwihi3gcZfnfc6aL4IBrMMnWsFkFuaJZAfu6eEhoyojti01jZQtV5e9ecf9E73pNsYWDOMqkFiOEtq3dxrSfGnZTZCQ8-1-cLd__fR2Pwh8IMaHlP0PGSYlYGSCK03kzuc46Zz8TlSE0gbRa=w512-h512-s-no?authuser=0"
//           }
//           image_altnative={"tech_journey_github"}
//           image_width={40}
//           image_height={40}
//         />
//         <ImageLink
//           link_target={
//             "https://www.figma.com/file/6HaR5XPLUdNgQ6NQcTos8U/Tech-Journey?node-id=51496%3A4712&t=O1VrswTKHesiZAfC-1"
//           }
//           image_source={
//             "https://lh3.googleusercontent.com/pw/AIL4fc9hCfzk7qFCGeIvgtP4gbjF4bXnqSs99YVhOCGiYnJD-fV2Y9LCtBg1Nwi8uHsSwZRN-1iAsvpm_iWAHsqJ6K-_d2iVxLoDtfWmD5E_7Jjp0lENf8YepKxUJDqeCxDEUQxlrpVlLId8m4aiQcPmg6RY=w512-h512-s-no?authuser=0"
//           }
//           image_altnative={"chathub_figma"}
//           image_width={40}
//           image_height={40}
//         />
//       </div>,
//     ],
//     fifthContent: [
//       <iframe
//         src="https://my.spline.design/untitled-72ecd9604b557f7fe4d8ba024ea61a53/"
//         frameBorder="0"
//         width="100%"
//         height="100%"
//         style={{ zoom: "1.3" }}
//       ></iframe>,
//     ],
//   },
//   {
//     imageSrc:
//       "https://lh3.googleusercontent.com/pw/AIL4fc9oiPIUTQGK1cIv5y-BHTSrK6ycid0nuaM9Ix07oi-SG1c07gQA9uuRfoXq2R21X2igFriiLbcKIXPvm7Ky_a5Y5SqmBLtvHA2ujYhYdggc5Vg-5PSD1dpkdqFbox47_DJkYynkV8yAuIr2OfnPqqS8=w500-h500-s-no?authuser=0",
//     title: "買い物ナビ",
//     attribute: "個人開発",
//     firstContentTitle: "DETAIL",
//     firstContent:
//       "自分自身が一人暮らしで買い物をする際、よく買い忘れをするため、それを防ぐためのアプリを開発しました。",
//     secondContentTitle: "POINT",
//     secondContent:
//       "Swift、SwiftUIとFirebaseを用い開発したアプリで、プッシュ通知の機能やECサイトのリンクをダイレクトに開く機能、Lottieを用いたアニメーションを実装しました。",
//     thirdContentTitle: "TECH",
//     thirdContent: "Swift,  SwiftUI,  Firebase",
//     fourthContentTitle: "SOURCE",
//     fourthContent: [
//       <div style={{ alignItems: "center", display: "flex" }}>
//         <ImageLink
//           link_target={
//             "https://apps.apple.com/jp/app/%E8%B2%B7%E3%81%84%E7%89%A9%E3%83%8A%E3%83%93/id6451027212"
//           }
//           image_source={
//             "https://lh3.googleusercontent.com/pw/AIL4fc-JV3iZY8-OrpBcXm41RKbL5wmscZm_1qg_GEKPdisFFnIaRUvVtBeqYu-oGgSjWVBJF8ZPf0tCtI8jz5uAuvPJlapTzXNi-wxcTh2aIvRFVxLuI1Fqg7aEe5hVcQgN6GZWbvB6kXPcQUNzpLe3uIsw=w512-h512-s-no?authuser=0"
//           }
//           image_altnative={"shopping_navi_apple_store"}
//           image_width={40}
//           image_height={40}
//         />
//         <ImageLink
//           link_target={"https://github.com/Koichi5/shopping_reminder"}
//           image_source={
//             "https://lh3.googleusercontent.com/pw/AIL4fc9E5vZ_Zwihi3gcZfnfc6aL4IBrMMnWsFkFuaJZAfu6eEhoyojti01jZQtV5e9ecf9E73pNsYWDOMqkFiOEtq3dxrSfGnZTZCQ8-1-cLd__fR2Pwh8IMaHlP0PGSYlYGSCK03kzuc46Zz8TlSE0gbRa=w512-h512-s-no?authuser=0"
//           }
//           image_altnative={"shopping_navi_github"}
//           image_width={40}
//           image_height={40}
//         />
//       </div>,
//     ],
//     fifthContent: [
//       <iframe
//         src="https://my.spline.design/untitled-143116279a522dbb2957787c8f99bde3/"
//         frameBorder="0"
//         width="100%"
//         height="100%"
//       ></iframe>,
//     ],
//   },
//   {
//     imageSrc:
//       "https://lh3.googleusercontent.com/pw/AIL4fc_ZcRR5bjgk34v2DkIQTlswvkvoLQCG4wNH6u7VxIDg2WkMslNXpEjwE8ENHh72He2nTSniTZEf2VQFyAA8kl8LddTD4Vy-1v5iTOOYTWWmbemIdK2mVVypn61kpIK9FUHi0ERHn5L0VnEBqXvqEJ5z=w940-h788-s-no?authuser=0",
//     title: "株式会社 Voteee Technologies",
//     attribute: "インターン",
//     firstContentTitle: "DETAIL",
//     firstContent:
//       "2022年2月から10月の8ヶ月間、株式会社 Voteee Technologiesにて、 Flutterコースのプログラミングスクール講師を務めました。",
//     secondContentTitle: "POINT",
//     secondContent:
//       "Flutterコースの責任者兼講師として教材作成と講義を担当しました。　　　　「質問の来ないくらいわかりやすい教材」を目指して、自身のFlutter の学習と同時並行で教材作成を行うことで、徹底的に初学者に寄り添った内容にするよう心がけて作成しました。また、Qiita等を活用して外部への発信活動も積極的に行いました。この経験を通して私は、他の人に技術を教えることの難しさと発信活動の大切さを学びました。この経験を活かして、人を指導する立場に立った場合は相手の視点に立って考え、相手はが何が分からないのかを考えるよう心がけようと感じました。",
//   },
//   {
//     imageSrc:
//       "https://lh3.googleusercontent.com/pw/AIL4fc-_806pvebSbxWLCDzb5Unl3bfke7nWYargwcisFkuWsLEGVYWfn3F34YhcThKnY56iv19cRfxi3Bow4kffapVqjkIGl9PawpGjd4eEiA-7bO27PN4xXWuzbHrlA-isYULS0WV9jglj9VSOrzf23zkw=w867-h739-s-no?authuser=0",
//     title: "株式会社 Wanderlust",
//     attribute: "開発インターン",
//     firstContentTitle: "DETAIL",
//     firstContent:
//       "2023年2月から5月までの3ヶ月間モバイルアプリケーションエンジニアとして、Flutterを用いて、位置情報共有アプリLocketの開発に携わりました。",
//     secondContentTitle: "POINT",
//     secondContent:
//       "主な業務内容としては、新機能の追加やバグ修正、UI修正などです。この経験を通して、非常にスピードの速い開発、ユーザーや競合他社の動向に応じて機能を変更する柔軟性のある開発、英語を用いた開発を経験することができました。",
//   },
//   {
//     imageSrc:
//       "https://lh3.googleusercontent.com/pw/AIL4fc92rp_sz3SdziwfYnM1EzN23uw9uhiSmgW7OesmAahfbbOLMMcoJcwXWuhq-EKQTsG89jeJv2wzAB2KauynOmw8soJY94s68x2xY5rwPI_qF7tYLZm_o7QF0AIiGvE76bjLrXXuQme9KZhqzSOAbO9-=w940-h788-s-no?authuser=0",
//     title: "株式会社 はんぽさき",
//     attribute: "開発インターン",
//     firstContentTitle: "DETAIL",
//     firstContent:
//       "2023年5月までのモバイルアプリケーションエンジニアとして、Flutterを用いて、地図アプリLivMapの開発に携っています。",
//     secondContentTitle: "POINT",
//     secondContent:
//       "現在継続中のインターンであり、主な業務内容としては、新機能の追加やバグ修正、UI修正などです。また、Provider から Riverpod への移行なども行いました。",
//   },
//   {
//     imageSrc:
//       "https://lh3.googleusercontent.com/pw/AIL4fc-akDhqRph2SiGD1R2ilN2sEbEs78bkpSMsDdEEW3jfpk_XgPSdQzFhmoamIDRbFmPANnZSt7tBRGu9Bu8WwjQg6xJ6FIQr_EaNwkFU8ka5NLs6_PblsmXhg-7L_gSwUOSDzrDKAWRG6skAnDXRKZw7=w1200-h667-s-no?authuser=0",
//     title: "株式会社 Sansan",
//     attribute: "サマーインターン",
//     firstContentTitle: "DETAIL",
//     firstContent:
//       "2023年8月から「Sansan Tech Internship SPARK2023」に参加しました。",
//     secondContentTitle: "POINT",
//     secondContent:
//       "座学ではプロダクト開発におけるジョブ理論の考え方やアジャイル開発、スクラム開発の基本などエンジニアとして必要な知識を身につけることができました。 \n 後半の開発期間ではFlutterを用いた開発を行い、主にフロントエンドを担当しました。\n開発では、他のメンバーと開発することでJiraを用いたタスクの管理やコードレビュー、開発に役立つTipsなど様々なことを学ぶことができました。",
//   },
//   {
//     imageSrc:
//       "https://lh3.googleusercontent.com/pw/ABLVV85BaNFtvHU4TPOC3dNZtgbasaUQJibXGNSftCriOWZDNtpHxjRsJ67QfitiIFeMcCrVVm-mcII4LWkO2TittA_4sz_88GhmPvC5uY4gRKgt4fWYeusNRMAaIKnmhq7ecwJV2ENWNTcRPzUN48gmclZb=w1280-h720-s-no-gm?authuser=0",
//     title: "株式会社 リクルート",
//     attribute: "就業型サマーインターン",
//     firstContentTitle: "DETAIL",
//     firstContent: "2023年10月から1ヶ月半ほど参加しました。",
//     secondContentTitle: "POINT",
//     secondContent:
//       "詳細については公表できませんが、今まで触れていなかった技術に触れることができました。メンターさんやメンバーの方々の支えもあり、いろいろな方のお話を伺うことができ、今後の開発の軸になるような考え方も得られ、非常に貴重な経験でした。",
//   },
// ];

const WorksCardGrid = () => {
  const [works, setWorks] = useState<Work[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchWorks = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/works");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setWorks(data);
    } catch (error) {
      console.error("Failed to fetch work:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWorks();
  }, []);

  return (
    <Grid container spacing={2}>
      {works.map((work, index) => (
        <Grid key={index} item xs={12} sm={6}>
          <CardWithDialog
            imageSrc={work.image_path}
            title={work.title}
            attribute={work.attribute}
            firstContentTitle={'DETAIL'}
            firstContent={work.detail}
            secondContentTitle={"POINT"}
            secondContent={work.point}
          />
        </Grid>
      ))}
      {/* {cards.map((card, index) => (
        <Grid key={index} item xs={12} sm={6}>
          <CardWithDialog {...card} />
        </Grid>
      ))} */}
    </Grid>
  );
};

export default WorksCardGrid;
