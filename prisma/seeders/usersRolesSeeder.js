import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient()
import {Constant} from "../../src/commonConstants/constants.js";
export async function seedUserRoles() {
    await prisma.UserRole.createMany({
        data: [
            { name: Constant.ADMIN },
            { name: Constant.MANAGER },
            { name: Constant.EMPLOYEE },
        ],
        skipDuplicates: true,
    });
}
