import { styled } from "@mui/material/styles";

interface WorksTextProps {
  text: string;
}

const CustomWorksDetailText = styled("div")(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#A1A1AA" : "#252529",
  textAlign: "left",
  fontFamily: "serif",
  fontSize: 20,
  paddingBottom: 40,
}));

function WorksDetailText(props: WorksTextProps) {
  return <CustomWorksDetailText>{props.text}</CustomWorksDetailText>;
}

export default WorksDetailText;
