import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// import { withAccelerate } from '@prisma/extension-accelerate'
// const prisma = new PrismaClient().$extends(withAccelerate())
// const prisma = new PrismaClient({
//     datasourceUrl: process.env.PRISMA_ACCELERATE_URL,
// });

export default prisma;