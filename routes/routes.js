import bodyParser from 'body-parser';
import { Router } from "express";
import {join,dirname} from 'path';
import {fileURLToPath} from "url";
import { DbHandler } from '../utils/class/DbHandler.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const router = Router();

router.use(bodyParser.json());       // to support JSON-encoded bodies
router.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 



//===========================GET INDEX=================================
router.get('/',(req,res)=>{
    res.sendFile(join(__dirname,'../index.html'))
})


//===========================POST INGRESO=================================
router.post('/usuario',async(req,res)=>{
    let mail = req.body.email;
    let pass = req.body.password;

    const bdhandler = new DbHandler();

    await bdhandler.setUsuario(mail,pass);
    console.log('Este se deberia ejecutar despues');
})




export default router;