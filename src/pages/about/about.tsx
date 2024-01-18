import AboutDetailText from "@/components/about/about_detail_text";
import AboutImage from "@/components/about/about_image";
import AboutSnsLink from "@/components/about/about_sns_link";
import AboutTitle from "@/components/about/about_title";
import { styled, useTheme } from "@mui/material/styles";
import XIcon from "@mui/icons-material/X";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkIcon from "@mui/icons-material/Link";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/LocalPhone';

const CustomContactEmailAndPhone = styled("div")(({ theme }) => ({
  display: "flex",
  color: theme.palette.mode === "dark" ? "#DCDCDC" : "#252529",
}));

function About() {
  const theme = useTheme();

  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: "50%",
          padding: "40px",
          backgroundColor: theme.palette.mode === "dark" ? "#18181B" : "white",
        }}
      >
        <AboutTitle text="Mobile developer working primarily with Flutter" />
        <AboutDetailText text="I am a software engineering student from Japan, primarily focused on mobile app development. This portfolio compiles my experiences from internships and contests I have participated in. I am a software engineering student from Japan, primarily focused on mobile app development. This portfolio compiles my experiences from internships and contests I have participated in. I am a software engineering student from Japan, primarily focused on mobile app development. This portfolio compiles my experiences from internships and contests I have participated in. I am a software engineering student from Japan, primarily focused on mobile app development. This portfolio compiles my experiences from internships and contests I have participated in. I am a software engineering student from Japan, primarily focused on mobile app development. This portfolio compiles my experiences from internships and contests I have participated in. I am a software engineering student from Japan, primarily focused on mobile app development. This portfolio compiles my experiences from internships and contests I have participated in. I am a software engineering student from Japan, primarily focused on mobile app development. This portfolio compiles my experiences from internships and contests I have participated in." />
      </div>
      <div
        style={{
          width: "50%",
          padding: "50px",
          backgroundColor: theme.palette.mode === "dark" ? "#18181B" : "white",
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
            <div style={{ padding: "10px" }}><EmailIcon /></div>
            <div style={{ padding: "10px" }}>koichi20021217@gmail.com</div>
          </CustomContactEmailAndPhone>
          <CustomContactEmailAndPhone>
            <div style={{ padding: "10px" }}><PhoneIcon /></div>
            <div style={{ padding: "10px" }}>080-4558-9517</div>
          </CustomContactEmailAndPhone>
        </div>
      </div>
    </div>
  );
}

export default About;
