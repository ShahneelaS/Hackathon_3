import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextRequest, NextResponse } from "next/server";
import { generateToken } from "@/lib/auth"; 

const users = [
  { id: "1", email: "test@example.com", password: "password123" },
];

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        const user = users.find(
          (user) =>
            user.email === credentials.email &&
            user.password === credentials.password
        );

        if (!user) {
          throw new Error("Invalid email or password");
        }

        const token = generateToken(user);
        return { ...user, token };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        (token as any).jwt = (user as any).token;
      }
      return token;
    },

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        (session.user as any).token = (token as any).jwt;
      }
      return session;
    },
  },
  secret: process.env.JWT_SECRET_KEY,
  session: {
    strategy: "jwt",
  },
};

// ✅ Correct export for Next.js 14+ App Router
const handler = NextAuth(authOptions);

export function GET(req: NextRequest) {
  return handler(req as any, new NextResponse());
}

export function POST(req: NextRequest) {
  return handler(req as any, new NextResponse());
}
