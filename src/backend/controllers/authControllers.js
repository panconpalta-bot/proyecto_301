import { authServices } from "../services/authServices.js";

export const authControllers = {
    //registro
    async register(req,res){
        try{
            const {email, name, passowrd} = req.body;
            const result =  await authServices. register({email, name, passowrd});

            res.status(201),json({
                succes: true,
                mesage: "Usuario registrado correctamente",
                data: result
            })
        }catch(error){
            res.status(500).json({
                succes: false,
                message: error.message
            })

        }
    }
}