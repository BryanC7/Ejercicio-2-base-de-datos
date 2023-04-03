import express from "express";
import rutas from "./routes/routes.js";

const app = express();

app.use(rutas);

app.listen(3000,()=>{
    console.log('Conexión establecida en puerto 3000');
})