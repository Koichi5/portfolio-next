import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    try {
      const skillOtherProficiencies =
        await prisma.skillOtherProficiency.findMany();
      res.status(200).json(skillOtherProficiencies);
    } catch (e) {
      res.status(500).json({ error: "Internak Server Error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

prisma.contactEmailAndPhone