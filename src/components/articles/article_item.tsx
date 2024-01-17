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

const CustomArticleItemWrapper = styled("div")(() => ({
  display: "flex",
  paddingBottom: "30px",
}));

const CustomArticleItemTitle = styled("div")(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#DCDCDC" : "#252529",
  fontSize: "20px",
}));

const CustomArticleItemType = styled("div")(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#A1A1AA" : "#252529",
  textAlign: "left",
  fontSize: 20,
  paddingBottom: 40,
}));

const CustomArticleItemLikeCount = styled("div")(({ theme }) => ({
  color: theme.palette.mode === "dark" ? "#A1A1AA" : "#252529",
  textAlign: "left",
  fontSize: 15,
  paddingBottom: 40,
}));

const CustomArticleReadMore = styled("a")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  fontSize: 20,
  color: "#2CD4BF", // 通常状態の色
  textDecoration: "none",
  "&:link": {
    color: "#2CD4BF", // 未訪問リンクの色
  },
  "&:visited": {
    color: "#2CD4BF", // 訪問済みリンクの色
  },
  "&:hover": {
    color: "#2CD4BF",
  },
  "&:active": {
    color: "#2CD4BF",
  },
}));

function ArticleItem(props: ArticleItemProps) {
  return (
    <CustomArticleItemWrapper>
      <ConvertDate convertDate={props.published_at} />
      <div style={{ paddingLeft: "25%" }}>
        <CustomArticleItemTitle>
          {props.emoji} {props.title}
        </CustomArticleItemTitle>
        <div style={{ display: "flex" }}>
          <CustomArticleItemType style={{ padding: "10px" }}>
            {props.article_type.toLocaleUpperCase()}
          </CustomArticleItemType>
          <CustomArticleItemLikeCount style={{ padding: "10px" }}>
            <span style={{ fontSize: "20px" }}>{props.liked_count}</span> likes
          </CustomArticleItemLikeCount>
          <CustomArticleReadMore
            href={`https://zenn.dev/${props.path}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: "10px 40px" }}
          >
            <div>Read More &nbsp; &gt;</div>
          </CustomArticleReadMore>
        </div>
      </div>
    </CustomArticleItemWrapper>
  );
}

export default ArticleItem;
