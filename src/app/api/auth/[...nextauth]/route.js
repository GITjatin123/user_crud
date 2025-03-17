import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import bcrypt from "bcryptjs";
export const authOptions  = {
    providers: [
        CredentialsProvider({
            // name: "credentials",
            // credentials: {
            //     email: { label: "username", type: "text", placeholder: "joy" },
            //     password: { label: "Password", type: "password" },
            // },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    throw new Error("Email and password are required");
                }
                const user = await prisma.user.findUnique({
                    where: { email: credentials.email },
                });
                if (!user || !user.password) {
                    throw new Error("Invalid email or password");
                }

                const isValid = await bcrypt.compare(credentials.password, user.password);
                if (!isValid) {
                    throw new Error("incorrect password");
                }
                return {
                    id: user.id,
                };
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 60*60*2,
        updateAge:0,
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        },
        session: async function ({session, token}) {
            if (session.user) {
                session.user.id = token.id;
            }
            return session;
        },
    },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
