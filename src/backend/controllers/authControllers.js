import { authServices } from "../services/authServices.js";

export const authControllers = {
    //registro tradicional
    async register(req,res){
        try{
            const {email, name, password} = req.body;
            const result =  await authServices. register({email, name, password});

            res.status(201).json({
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
    },


    //google callback
    async googleCallBack(){
        try{
            const user = req.user;
            const token = generateToken (user.id, user.email);
            res.redirect(`http://localhost:5173/login-success?token=${token}`);//aqui url de frontend
        }catch(error){
            res.redirect(`http://localhost:5173/login-error?message=${error.message}`);//vista de frontend si falla
        }
     
    }

};