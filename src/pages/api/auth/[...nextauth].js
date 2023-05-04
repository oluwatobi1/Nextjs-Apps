import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.NEXTAUTH_URL,
            clientSecret: process.env.NEXTAUTH_URL
        })
        // ...add more providers here
    ],
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({ token, user, account }) {
            // Persist the OAuth access_token to the token right after signin

            if (account) {
                token.id_token = account.id_token;
            }
            console.log("TOKEN", token);
            return token;
        },
        async session({ session, token }) {
            // Send properties to the client, like an access_token from a provider.
            session.id_token = token.id_token;
            return session;
        },
    },
}
export default NextAuth(authOptions)