import { verify } from "jsonwebtoken";
import { verifyToken } from "../utils/auth.js";

export const authenticate = (req, res, next) =>{
    try{
        //verificar si tiene token
        const token = req.headers.authorization?.split("")[1];

        if (!token){
            return res.status(401).json({
                succes: false,
                mesage: "token no proporcionado"  
            });
        }
        //verificar si el token es valido
        const decoded = verifyToken(token);
        if(!decoded){
            return res.status(401).json({
                succes: false,
                message: "token invalido o expirado"
            })
        }

        req.user = decoded;
        next()
    }catch(error){
        res.status(500),json({
            succes: false,
            meesage: "error de autenticacion"
        });
    }
}