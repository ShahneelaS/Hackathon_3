import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: Token required" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "My$Super$Secret1234Token!@#");
    console.log("Decoded JWT:", decoded); 
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
}
