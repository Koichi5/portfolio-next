import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "GET") {
    try {
      const contactEmailAndPhones =
        await prisma.contactEmailAndPhone.findMany();
      res.status(200).json(contactEmailAndPhones);
    } catch (e) {
      res.status(500).json({ error: "Internak Server Error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
