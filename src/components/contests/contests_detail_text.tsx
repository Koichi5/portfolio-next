import { styled } from "@mui/material/styles";

interface ContestsTextProps {
  text: string;
}

const CustomContestsDetailText = styled("div")(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#A1A1AA" : "#252529",
  textAlign: "left",
  fontFamily: "serif",
  fontSize: 20,
  paddingBottom: 40,
}));

function ContestsDetailText(props: ContestsTextProps) {
  return <CustomContestsDetailText>{props.text}</CustomContestsDetailText>;
}

export default ContestsDetailText;
