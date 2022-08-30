import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import mongooseConnect from "../../../lib/mongooseConnect";
import User from "../../../models/user";
import { MongooseAdapter } from "@choutkamartin/mongoose-adapter";

export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    CredentialsProvider({
      name: "Signup",
      id: "signup",
      credentials: {
        name: {
          type: "text",
          placeholder: "Name...",
          label: "Name",
        },
        email: {
          type: "email",
          placeholder: "Email...",
          label: "Email",
        },
        password: {
          type: "password",
          placeholder: "Password...",
          label: "Password",
        },
      },

      async authorize({ name, email, password }, req) {
        await mongooseConnect();
        const emailExist = await User.findOne({ email });
        if (emailExist) throw new Error("Email already exists!");

        try {
          const user = new User({ name, email, password });
          await user.save();
          return user;
        } catch (error) {
          const errorMessage = Object.values(error.errors)[0].message;
          throw new Error(errorMessage);
        }
      },
    }),

    CredentialsProvider({
      name: "Signin",
      id: "signin",
      credentials: {
        email: {
          type: "email",
          placeholder: "Email...",
          label: "Email",
        },
        password: {
          type: "password",
          placeholder: "Password...",
          label: "Password",
        },
      },

      async authorize({ email, password }, req) {
        await mongooseConnect();
        const user = await User.findOne({ email });
        if (!user) throw new Error("Email not found!");

        if (user.password !== password) throw new Error("Wrong password");

        return user;
      },
    }),
  ],

  adapter: MongooseAdapter(process.env.MONGODB_URI),

  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60,
  },

  callbacks: {
    async session({ session, token, user }) {
      session.user._id = token.userId;
      session.user.username = token.username;
      return session;
    },

    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token.userId = user.id;
        token.username = user.username;
      }
      return token;
    },
  },

  pages: {
    signIn: "/auth/login",
  },
};

export default NextAuth(authOptions);
