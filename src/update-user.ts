import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // await prisma.user.update({
    //     where : {
    //         id : 1
    //     },
    //     data : {
    //         name : 'Bipin'
    //     }
    // })

    await prisma.post.update({
        where : {
            id : 1
        },
        data : {
            published : true
        }
    })
}

main()