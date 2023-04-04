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

router.get('/listado',async(req,res)=>{
  const dbhandler = new DbHandler();
  const arrUsuarios = await dbhandler.getUsuarios();
  let htmlUsuarios = '';

  arrUsuarios.forEach(el =>{
    htmlUsuarios += `<tr><td>Email: ${el.email}</td> <td>Password: ${el.password}</td></tr>`
  })

  res.send(`<h1>Lista de Usuarios</h1><table id=tablausuarios>${htmlUsuarios}</table>`)
})



//===========================POST INGRESO=================================
router.post('/usuario',async(req,res)=>{
    let mail = req.body.email;
    let pass = req.body.password;

    const dbhandler = new DbHandler();

    await dbhandler.setUsuario(mail,pass);
    console.log('Este se deberia ejecutar despues');
})

router.post('/login',async(req,res)=>{
  let mail = req.body.email;
  let pass = req.body.password;

  const dbhandler = new DbHandler();

  let usuario = await dbhandler.getUsuariobyMail(mail);
  console.log(usuario);
  if (usuario){
    let arrUsuarios = await dbhandler.getUsuarios();
    let encontrado = arrUsuarios.find(e => e.email == mail);
    let index = arrUsuarios.indexOf(encontrado);
    
    if (arrUsuarios[index].password == pass){
      res.send('<script>alert("Usuario Logueado");window.location.href="/"</script>');
    } else {
      res.send('<script>alert("Contraseña Incorrecta");window.location.href="/"</script>');
    }
  } else {
    res.send('<script>alert("Este mail no se encuentra registrado.");window.location.href="/"</script>');
  }

  
  
})




export default router;