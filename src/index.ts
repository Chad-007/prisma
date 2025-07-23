import { PrismaClient } from './generated/prisma';

const client = new PrismaClient();

async function createUser() {
  try {
    const user = await client.user.findFirstOrThrow({
     where:{
        id :2
     },
     include:{
        todos:true
     }
    });
    console.log(user);
  } catch (error) {
    console.error(error);
  }
}

createUser();
