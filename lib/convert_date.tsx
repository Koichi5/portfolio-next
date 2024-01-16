import dayjs from "dayjs";

type ConvertDateProps = {
    convertDate: string | number | Date;
  };

  export default function ConvertDate({ convertDate }: ConvertDateProps) {
    const publishedAt = dayjs(convertDate).format("YYYY/MM/DD/");

    return <time dateTime={convertDate.toString()}>{publishedAt}</time>;
  }
