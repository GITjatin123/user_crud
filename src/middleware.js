import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
    const url = req.nextUrl;
    if (token && url.pathname === "/login") {
        const lastVisited = req.cookies.get("lastVisited")?.value || "/dashboard";
        return NextResponse.redirect(new URL(lastVisited, req.url));
    }
    if (!token && url.pathname !== "/login") {
        return NextResponse.redirect(new URL("/login", req.url));
    }
    const res = NextResponse.next();
    res.cookies.set("lastVisited", url.pathname, { path: "/" });
    return res;
}

export const config = {
    matcher: ["/dashboard", "/profile", "/login"],
};
