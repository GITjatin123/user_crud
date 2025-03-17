import {PrismaClient} from "@prisma/client";
import {NextResponse} from "next/server";
const prisma = new PrismaClient();
export async function POST(req, res) {
    const body = await req.json();
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method Not Allowed" });
    }
    try {
        const { tables, filters } = body;
        let responseData = {};

        if (!tables || !Array.isArray(tables)) {
            return res.status(400).json({ error: "Invalid tables request" });
        }
        // **1. Fetch User Roles**
        if (tables.includes("userRole")) {
            responseData["userRole"] = await prisma.userRole.findMany();
        }

        // **2. Fetch Countries**
        if (tables.includes("country")) {
            responseData["country"] = await prisma.country.findMany();
        }

        // **3. Fetch States for a selected Country**
        if (tables.includes("state") && filters?.countryId) {
            responseData["state"] = await prisma.state.findMany({
                where: { countryId: Number(filters.countryId) },
            });
        }

        // **4. Fetch Cities for a selected State**
        if (tables.includes("city") && filters?.stateId) {
            responseData["city"] = await prisma.city.findMany({
                where: { stateId: Number(filters.stateId) },
            });
        }

        // if (tables.includes("user") && filters?.setUsername) {
        // const checkUsername = await prisma.user.findMany({
        //         where: { username: filters.setUsername },
        //     });
        //     console.log(checkUsername)
        // // if (checkUsername){
        // //     responseData["user"]
        // // }
        //
        // }
        return NextResponse.json(responseData);
    } catch (error) {
        return NextResponse.json({ status:500,error: "Internal Server Error" });
    }
}
