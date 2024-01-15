import { styled } from "@mui/material/styles";

interface AboutSnsLinkProps {
  label: string;
  icon: React.ReactNode;
  target: string;
}

const CustomAboutSnsLink = styled("div")(({ theme }) => ({
  display: "flex",
  color: theme.palette.mode === "dark" ? "#DCDCDC" : "#252529",
}));



const AboutSnsLink = (props: AboutSnsLinkProps) => {
  return (
    <CustomAboutSnsLink>
      <div>{props.icon}</div>
      <a href={props.target} target="_blank" color="#000000">
        {props.label}
      </a>
    </CustomAboutSnsLink>
  );
};

export default AboutSnsLink;
