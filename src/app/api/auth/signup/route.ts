import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password are required." }, { status: 400 });
  }

  // Here we can add logic to create a user in the database
  return NextResponse.json({ message: "Sign up successful" }, { status: 200 });
}
