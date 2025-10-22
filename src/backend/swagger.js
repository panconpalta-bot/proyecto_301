import swaggerJsdoc from "swagger-jsdoc";
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: { 
        title: "Mi API REST - proyecto piad--301", 
        version: "1.0.0" ,
        description:"documentacion de api rest con express , prisma ,postgresql",
        contact:{
            email:"1634309@senati.pe"
        }
    },
    servers: [{ 
        url: "http://localhost:3000",
        description:"servidor de desarrollo"
    }],
  },
  apis: ["./routes/*.js"],
};
export const swaggerSpec = swaggerJsdoc(swaggerOptions);
