import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();
import {seedUserRoles} from "./seeders/usersRolesSeeder.js";
import {seedCountries} from "./seeders/countriesSeeder.js";
import {seedStates} from "./seeders/statesSeeder.js";
import {seedCities} from "./seeders/citiesSeeder.js";
import {seedUsers} from "./seeders/usersSeeder.js";
async function main() {
    await seedUserRoles();
    await seedCountries();
    await seedStates();
    await seedCities();
    await seedUsers();
}

main().then(async () => {
    await prisma.$disconnect();
}).catch((e) => {
    console.log(e,'seederError')
    process.exit(1);

})
;
