import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser (username:string, password:string, firstName:string, lastName:string){
    await prisma.user.create({
        data : {
            username,
            password,
            firstName,
            lastName
        }
    })
}

// insertUser('vishal@gmail.com','1232','vishal','yadav')

async function getUsers() {
    const users = await prisma.user.findMany()
    console.log(users)
    const user = await prisma.user.findUnique({
        where :{
            username : 'bipin@gmail.com'
        }
    })
    console.log(user)
}

// getUsers();

async function insertTodo(title:string, description:string, done:boolean, userId:number) {
    await prisma.todo.create({
        data:{
            title,
            description,
            done,
            userId
        }
    })

}

// insertTodo('Learn hono','Learn it today',true,2)

//get users who's username contains@gmail.com and have some done todo's and also print their done todos
async function getUserWithSpecificRequirements() {
    const result = await prisma.user.findMany({
        where:{
            username : {
                endsWith : "@gmail.com"
            },
            todos:{
                some:{
                    done:true,
                }
            }
        },
        include: {
            todos:{
                where:{
                    done:true
                }
            }
        }
    })
    console.log(result)
}
// getUserWithSpecificRequirements()


async function updateUser(id:number,username:string) {
    const result = await prisma.user.update({
        where :{
            id,
        },
        data :{
            username
        }
    })
    console.log(result)
}
// updateUser(1,'abc@gmail.com')


// how to do pagination 
// select * from ques OFFSET 0 limit 10 -> gives first 10 ques
// select * from ques OFFSET 10 limit 10 -> gives 11-20 ques 
// select * from ques OFFSET 20 limit 10 -> gives 21-30 ques


async function  paginationQuery(limit : number, offset:number) {
    const res = await prisma.todo.findMany({
        take : limit,
        skip : offset
    })
    console.log(res)
}
console.log("Getting first 2 todo's")
paginationQuery(2,0)
console.log("Getting next two todo's")
paginationQuery(2,2)