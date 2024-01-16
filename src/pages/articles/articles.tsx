import Link from "@mui/material/Link";
import ConvertDate from "../../../lib/convert_date";
import { useEffect, useState } from "react";

interface Article {
  id: number;
  path: string;
  emoji: string;
  title: string;
  published_at: string;
}

const Articles = () => {
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
    <>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link href={`https://zenn.dev/${article.path}`} target="blank">
              <span>{article.emoji}</span>
              <p>{article.title}</p>
              <p>
                <ConvertDate convertDate={article.published_at} />
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Articles;
