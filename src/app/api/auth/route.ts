import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    // Validate credentials (example logic)
    if (email === "shahnilas188@gmail.com" && password === "password123") {
      // Generate JWT Token
      const token = jwt.sign(
        { email }, // Payload
        process.env.JWT_SECRET || "My$Super$Secret1234Token!@#", // Secret key
        { expiresIn: "1h" } // Token expiration
      );

      // Return success response with the token
      return NextResponse.json({ token, message: "Login successful" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
