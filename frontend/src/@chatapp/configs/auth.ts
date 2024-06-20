import axios from "axios";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log("user: ", user);
      console.log("account: ", account);
      console.log("email: ", email);
      console.log("profile: ", profile);
      console.log("credentials: ", credentials);
      const resultOne = await axios(
        `http://localhost:3001/api/v1/auth/user/${user.email}`
      );

      const findUser = resultOne.data;
      console.log("if user found", findUser);
      if (!findUser) {
        const resultTwo = await axios({
          url: "http://localhost:3001/api/v1/auth/register",
          method: "POST",
          data: {
            email: user?.email,
            username: user?.name,
          },
        });

        console.log("result", resultTwo);
      }
      return true;
    },
    async session({ session, user, token }) {
      // console.log("session", session);
      // console.log("user", user);
      // console.log("token", token);
      return session;
    },
  },
});
