import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    try {
      const skillFrameWorkProficiencies =
        await prisma.skillFrameworkProficiency.findMany();
      res.status(200).json(skillFrameWorkProficiencies);
    } catch (e) {
      res.status(500).json({ error: "Internak Server Error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}