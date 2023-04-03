import express from "express";
const app = express();
import rutas from "./routes/routes.js";

app.use(rutas);

app.listen(3000,()=>{
    console.log('Conexión establecida en puerto 3000');
})