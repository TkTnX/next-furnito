import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { connectToDb } from "./connectToDB";
import { User } from "./models";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { authConfig } from "./auth.config";
const login = async (credentials) => {
  try {
    connectToDb();
    const user = await User.findOne({
      username: credentials.username,
    });
    if (!user) {
      return { error: "Wrong credentials" };
    }

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!isPasswordCorrect) {
      return { error: "Wrong username or password" };
    }
    return user;
  } catch (error) {
    console.log(error);
    return { error: "Failed to Login" };
  }
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Google,
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "google") {
        connectToDb();
        try {
          const user = await User.findOne({ email: profile.email });
          if (!user) {
            const newUser = new User({
              username: profile.name,
              avatarUrl: profile.picture,
              email: profile.email,
            });

            await newUser.save();
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
      return true;
    },
    ...authConfig.callbacks,
  },
});
