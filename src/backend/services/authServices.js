import {PrismaClient} from "@prisma/client";
import { hashPassword, comparePassword, generateToken } from "../utils/auth.js";

const prisma = new PrismaClient;

export const authServices = {
    //Registrar usuario
    async registerUser(data){
        try{
            const {email, name, password} = data;
            const hashedPassword = await hashPassword(password);
            const user = await prisma.user.create({
                data :{ email, name, password: hashedPassword },
            });

            //enviar token
         const token = generateToken(user.id, user.email);

         //enviar usuario  sin password
         const {password: _, ...userWithoutPassword } = user;
         return{
            user: userWithoutPassword,
            token,
         }
        }catch(error){
            throw new Error ("Error al registro de usuario" + error);
        }
    },

};