import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import client from "@/util/mongo"
import Credentials from "next-auth/providers/credentials"
import User from "@/models/User";
import bcrypt from "bcryptjs";
import dbConnect from "@/util/dbConnect"

dbConnect();

export default NextAuth({
  //adapter: MongoDBAdapter(client),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: { params: { scope: "read:user user:email" } },
      allowDangerousEmailAccountLinking: true,
    }),
    Credentials({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await User.findOne({ email: credentials.email });
        if (user) {
          const isMatch = await bcrypt.compare(credentials.password, user.password);
          if (isMatch) {
            console.log("user", user);
            return user;
          }
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  database: process.env.MONGODB_URI,
  debug: process.env.NODE_ENV === "development",
  secret: process.env.NEXTAUTH_SECRET,
  events: {
    async signIn(message) {
      console.log("[NextAuth] signIn event", {
        userId: message?.user?.id,
        provider: message?.account?.provider,
      });
    },
    async createUser(message) {
      console.log("[NextAuth] createUser", { userId: message?.user?.id });
    },
    async linkAccount(message) {
      console.log("[NextAuth] linkAccount", {
        providerAccountId: message?.account?.providerAccountId,
      });
    },
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (!user?.email) {
        console.warn("[NextAuth] Missing email on GitHub profile; check scope/user email visibility.");
      }
      return true;
    },
    async session({ session, user }) {
      if (user) {
        session.user = user;
      }
      return session;
    },
  },
});
