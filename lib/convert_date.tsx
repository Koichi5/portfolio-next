import { styled } from "@mui/material/styles";
import dayjs from "dayjs";

type ConvertDateProps = {
  convertDate: string | number | Date;
};

const CustomConvertDate = styled("time")(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#A1A1AA" : "#252529",
  textAlign: "left",
  fontFamily: "serif",
  fontSize: 20,
  paddingBottom: 40,
}));

export default function ConvertDate({ convertDate }: ConvertDateProps) {
  const publishedAt = dayjs(convertDate).format("YYYY/MM/DD");

  return <CustomConvertDate dateTime={convertDate.toString()}>{publishedAt}</CustomConvertDate>;
}
