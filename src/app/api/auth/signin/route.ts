import { NextResponse } from "next/server";

// Handle POST requests for Sign-In
export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Simulate user authentication (replace with actual DB logic)
    if (email === "user@example.com" && password === "password123") {
      return NextResponse.json({ message: "Sign-In successful" });
    } else {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json({ error: "Failed to sign in" }, { status: 500 });
  }
}
