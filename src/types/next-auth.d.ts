
import { User as NextAuthUser } from "next-auth";

// Extending the `User` interface to add custom properties
declare module "next-auth" {
  interface User extends NextAuthUser {
    token: string;
  }
  interface Session {
    user: {
      id: string;
      email: string;
      token: string;
    } & DefaultSession["user"];
  }

  interface JWT {
    id: string;
    email: string;
    jwt: string;
  }
}
