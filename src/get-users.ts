import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const user = await prisma.user.findMany({});
    console.log(user)
    const singleUser = await prisma.user.findUnique({
        where : {
            id : 1
        },
        include : {
            posts: true
        }
    })
    console.log(singleUser)
}

main()