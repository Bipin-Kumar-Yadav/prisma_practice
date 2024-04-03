import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// select * from questions offset 0 limit 10
// select * from questions offset 10 limit 10
// select * from questions offset 20 limit 10
async function main() {
    let res = await prisma.post.findMany({
        take : 1,
        skip : 0
    })
    console.log(res)
}
main();