import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import ArticleItemCard from "@/components/articles/article_item_card";
import CustomTitle from "@/components/title";
import CustomSubTitle from "@/components/sub_title";

interface Article {
  id: number;
  path: string;
  emoji: string;
  title: string;
  published_at: string;
  article_type: string;
  liked_count: number;
}

const Articles = () => {
  const theme = useTheme();
  const [articles, setArticles] = useState<Article[]>([]);

  const fetchArticles = async () => {
    try {
      const response = await fetch("/api/articles");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data.articles && Array.isArray(data.articles)) {
        setArticles(data.articles.slice(0, 10));
      } else {
        throw new Error("Data is not an array");
      }
    } catch (error) {
      console.error("Failed to fetch articles:", error);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div
      style={{
        backgroundColor: theme.palette.mode === "dark" ? "#18181B" : "white",
        padding: "40px",
      }}
    >
      <CustomTitle text={"Mobile developer working primarily with Flutter"} />
      <CustomSubTitle
        text={
          "I am a software engineering student from Japan, primarily focused on mobile app development. This portfolio compiles my experiences from internships and contests I have participated in."
        }
      />
      <Grid container spacing={2}>
        {articles.map((article, index) => (
          <Grid key={article.id} item xs={12} sm={6}>
            <ArticleItemCard
              id={0}
              path={article.path}
              emoji={article.emoji}
              title={article.title}
              published_at={article.published_at}
              liked_count={article.liked_count}
            />
          </Grid>
        ))}
      </Grid>
      {/* {articles.map((article) => (
        <ArticleItem
          key={article.id}
          id={article.id}
          path={article.path}
          emoji={article.emoji}
          title={article.title}
          published_at={article.published_at}
          article_type={article.article_type}
          liked_count={article.liked_count}
        />
      ))} */}
    </div>
  );
};

export default Articles;
