import { json } from "express";
import { userService } from "../service/userService.js"

export const userController = {
    async getUsers(req, res){
        try{
            const users = await userService.getAllUsers();
            res.status(200),json({
                succes: true,
                data:users
            })
        }catch(error){
            res.status(500).json({
                succes:false,
                message: error.message
            })
        }
    },

    async createUser (req,res){
        try{
            const {email, name}= req.body;
            //validacion basica
            if(!email || !name)
                return res.status(400),json({
                    succes:false,
                    message:'Email y nombnres obligatiors'
            });

            const newUser = await userService.createUser({email,name});
            res.status(201).json({
                succes:true,
                data:newUser,
                message: 'usuario creado correctamente'
            })
        }catch(error){
            res.status(500).json({
                succes:false,
                message: error.message
            })
        }
    }

}