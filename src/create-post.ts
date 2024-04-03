import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();
async function  main() {
    await prisma.post.create({
        data : {
            title : "React",
            content : "this is a react post",
            // author :{
            //     connect : {
            //         id : 1
            //     }
            // },
            authorId : 1 // this will also work
        }
    })
}

main()