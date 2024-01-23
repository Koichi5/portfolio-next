import AboutImage from "@/components/about/about_image";
import AboutSnsLink from "@/components/about/about_sns_link";
import { styled, useTheme } from "@mui/material/styles";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/LocalPhone";
import AboutHistory from "./history";
import CustomTitle from "@/components/title";
import CustomSubTitle from "@/components/sub_title";

const CustomContactEmailAndPhone = styled("div")(({ theme }) => ({
  display: "flex",
  color: theme.palette.mode === "dark" ? "#DCDCDC" : "#252529",
}));

function About() {
  const theme = useTheme();
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "50%",
            padding: "40px",
            backgroundColor:
              theme.palette.mode === "dark" ? "#18181B" : "white",
          }}
        >
          <CustomTitle text="Career Milestones: Awards, Internships, and App Development" />
          <CustomSubTitle text="Since enrolling at Kansai University in 2021, I have participated in and won several business contests and hackathons. I have gained experience in app development using Flutter, contributing to team projects at companies like Wanderlust Inc. and Hanposaki Inc., and have also embarked on personal development projects using Swift." />
          <AboutHistory />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "50%",
            paddingTop: "50px",
            backgroundColor:
              theme.palette.mode === "dark" ? "#18181B" : "white",
          }}
        >
          <AboutImage />
          <div style={{ padding: "50px" }}>
            <AboutSnsLink
              label={"Follow on X"}
              icon={<XIcon />}
              target={"https://twitter.com/koichi_mobile"}
            />
            <AboutSnsLink
              label={"Follow on GitHub"}
              icon={<GitHubIcon />}
              target={"https://github.com/Koichi5"}
            />
            <AboutSnsLink
              label={"Follow on Zenn"}
              icon={<LinkIcon />}
              target={"https://zenn.dev/koichi_51"}
            />
            <AboutSnsLink
              label={"Follow on Qiita"}
              icon={<LinkIcon />}
              target={"https://qiita.com/KKoichi51"}
            />
            <CustomContactEmailAndPhone>
              <div style={{ padding: "10px" }}>
                <EmailIcon />
              </div>
              <div style={{ padding: "10px" }}>koichi20021217@gmail.com</div>
            </CustomContactEmailAndPhone>
            <CustomContactEmailAndPhone>
              <div style={{ padding: "10px" }}>
                <PhoneIcon />
              </div>
              <div style={{ padding: "10px" }}>080-4558-9517</div>
            </CustomContactEmailAndPhone>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
