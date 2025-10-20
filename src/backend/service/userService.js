import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient;

//crear usuarios
export const userService ={
    //obtener mis usuarios
    async getAllUsers(){
        try{
            return await prisma.user.findMany();
        }catch(error){
            throw error ('error al obtener usuarios' + error.message);
        }
    },
    //obtener usuario
async createUser(data){
    try{
        const{email, name} = data;
        return await prisma.user.create({
            data :{email, name}
        })
    }catch(error){
        throw error('error al crear usuario' + error.message)
    }
},
}
