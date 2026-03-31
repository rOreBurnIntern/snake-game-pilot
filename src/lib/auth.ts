import { type NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || 'placeholder-client-id',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'placeholder-client-secret',
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/',
  },
  callbacks: {
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.sub as string;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || 'development-secret-change-in-production',
};