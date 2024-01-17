import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userID = "koichi_51";
  if (req.method === "GET") {
    try {
      const response = await fetch(
        `https://zenn.dev/api/articles?username=${userID}&order=latest`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch articles from Zenn API");
      }
      const articlesData = await response.json(); // ここで.json()メソッドを呼び出す
      res.status(200).json(articlesData); // 正しいデータを返す
    } catch (e) {
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
