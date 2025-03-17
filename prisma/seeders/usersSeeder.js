import {PrismaClient} from '@prisma/client';
import bcrypt from "bcryptjs";
const prisma = new PrismaClient();
export async function seedUsers(){
   const data = [
        {
            id:1,
            refNo: 100001,
            name: 'Jatin',
            email:'jatinyadav.1999@gmail.com',
            countryId:99,
            stateId:1621,
            cityId:18385,
            phone:'9356772122',
            password: await bcrypt.hash('12345',10),
            img: null,
            userRoleId:1,
            addedById: null,
            updatedById: null,
        }
    ]
    await prisma.user.createMany(
        {data: data,skipDuplicates:true}
    )
}