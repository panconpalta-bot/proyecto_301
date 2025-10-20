import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 300;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res) => {
    res.json({
        message:'api corriendo correctamente'
    });

});

//rutas qie deseo usar
app.use('api/users',userRoutes);

app.listen(PORT,()=>{
    console.log("servidor corriendo exitosamente ;)")
})