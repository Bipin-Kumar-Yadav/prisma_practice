import { PrismaClient } from "@prisma/client";

const prisma =  new PrismaClient();

async function  main() {
   await prisma.user.create(
    {
        data : {
            email : "abc@gmail.com",
            name : "Bipin Kumar Yadav",
        }
    }
   )
}

main();