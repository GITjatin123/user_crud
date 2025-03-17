import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";

export async function GET() {
    const session = await getServerSession(authOptions);

    if (!session) {
        return Response.json({ error: "Not authenticated" }, { status: 401 });
    }
    const user = await prisma.user.findUnique({
        where: { id: session.user.id },
    });
    if (!user) {
        return Response.json({ error: "User not found" }, { status: 404 });
    }
    return Response.json(user);
}
