import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

export async function POST(req) {
    try {
        if (!req) {
            return new Response(JSON.stringify({error: 'Invalid Request'}), {status: 400});
        }
        const {TableName, BlankFields, UniqueFields, AllDataFields} = await req.json()
        if (Array.isArray(UniqueFields) && UniqueFields.length > 0) {
            const validUniqueFields = UniqueFields.filter(key => AllDataFields[key] && AllDataFields[key].trim() !== "");
            const whereCondition = {
                OR: validUniqueFields
                    .map(key => ({[key]: AllDataFields[key]}))
            };
            const existingUser = await prisma[TableName].findFirst({
                where: whereCondition,
            });
            if (existingUser) {
                let existingKey = UniqueFields.find(key => existingUser[key] === AllDataFields[key]);
                return new Response(JSON.stringify({error: existingKey + " already exists", class: "error"}), {status: 400});
            }
        }
        console.log(AllDataFields, 'server')

        const {confirmPassword, ...filterData} = AllDataFields;
        const newUser = await prisma[TableName].create({
            data: {...filterData},
        });
        return new Response(JSON.stringify({message: "User registered successfully", user: newUser, class: "success"}));
    } catch (error) {
        return new Response(JSON.stringify({error: "Something went wrong " + error, class: "error"}), {status: 500});
    }
}
