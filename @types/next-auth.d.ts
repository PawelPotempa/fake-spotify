import { JWT } from "next-auth/jwt";
import { SessionOptions } from "next-auth";

declare module "next-auth/jwt" {
  interface JWT {
    idToken?: string;
    accessTokenExpires: number;
    accessToken: string;
    refreshToken: string;
    username: string;
  }
}

declare module "next-auth" {
  interface Session extends SessionOptions {
    user: {
      accessToken: string;
      refreshToken: string;
      username: string;
      name: string;
      email: string;
      image: string;
    };
  }
}
