import { styled } from "@mui/material/styles";
import ConvertDate from "../../../lib/convert_date";

interface ArticleItemProps {
  id: number;
  path: string;
  emoji: string;
  title: string;
  published_at: string;
  article_type: string;
  liked_count: number;
}

const CustomArticleItemWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  paddingBottom: "30px"
//   justifyContent: "space-between"
}));

const CustomArticleItemTitle = styled("div")(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#DCDCDC" : "#252529",
  fontSize: "20px",
}));

const CustomArticleItemType = styled("div")(({ theme }) => ({
    color: theme.palette.mode === "dark" ? "#A1A1AA" : "#252529",
    textAlign: "left",
    fontFamily: "serif",
    fontSize: 20,
    paddingBottom: 40,
}));

function ArticleItem(props: ArticleItemProps) {
  return (
    <CustomArticleItemWrapper>
      <ConvertDate convertDate={props.published_at} />
      <div style={{paddingLeft: "25%"}}>
        <CustomArticleItemTitle>{props.emoji} {props.title}</CustomArticleItemTitle>
        <div style={{ display: "flex" }}>
          <CustomArticleItemType style={{ padding: "10px" }}>{props.article_type.toLocaleUpperCase()}</CustomArticleItemType>
          <CustomArticleItemType style={{ padding: "10px" }}>
            {props.liked_count} likes
          </CustomArticleItemType>

        </div>
      </div>
    </CustomArticleItemWrapper>
  );
}

export default ArticleItem;
