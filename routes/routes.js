import bodyParser from 'body-parser';
import { Router } from "express";
import pool from '../bd.js';

const router = Router();


pool.query('INSERT INTO usuarios (email,password) VALUES ($1,$2) RETURNING *',['jorgito@gmail.com','1234'],(err,res)=>{
    if (err) throw err;
    else{
        console.log(res.rows);
        pool.release;
    }
})




export default router;