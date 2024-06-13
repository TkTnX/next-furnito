export const authConfig = {
  pages: {
    signIn: "/login",
  },
  providers: [],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        (token.id = user.id), (token.isAdmin = user.isAdmin);
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
    authorized({ auth, request }) {
      const user = auth?.user;
      const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
      const isOnRegisterPage =
        request.nextUrl?.pathname.startsWith("/register");
      const isOnFavPage = request.nextUrl?.pathname.startsWith("/favorite");
      const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");

      // ONLY FOR ADMINS

      if (isOnAdminPanel && !user?.isAdmin) {
        return false;
      }

      // ONLY FOR AUTH PEOPLE
      if (isOnRegisterPage && user) {
        return false;
      }
      if (isOnFavPage && !user) {
        return false;
      }
      if (isOnLoginPage && user) {
        return Response.redirect(new URL("/", request.nextUrl));
      }

      return true;
    },
  },
};
