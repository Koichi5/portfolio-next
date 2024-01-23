import { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Grid } from "@mui/material";
import ArticleItemCard from "@/components/articles/article_item_card";
import CustomTitle from "@/components/title";
import CustomSubTitle from "@/components/sub_title";
import ArticleItemSkeltonCard from "@/components/articles/article_item_skelton_card";

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
  const [loading, setLoading] = useState(false);
  const [articles, setArticles] = useState<Article[]>([]);

  const fetchArticles = async () => {
    setLoading(true);
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
    } finally {
      setLoading(false);
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
      <div style={{ width: "60%" }}>
        <CustomTitle
          text={
            "Writing on Mobile Application Development, Web Application Development and more "
          }
        />
        <CustomSubTitle
          text={
            "Here are some of the articles I've written, arranged in the order of their newest first. The main technical topics are mobile app development, along with others related to web development. Please feel free to check out more details on Zenn."
          }
        />
      </div>
      {loading ? (
        <Grid container spacing={2}>
          {Array.from({ length: 10 }).map((_, index) => (
            <Grid key={index} item xs={12} sm={6}>
              <ArticleItemSkeltonCard />
            </Grid>
          ))}
        </Grid>
      ) : (
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
      )}
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
