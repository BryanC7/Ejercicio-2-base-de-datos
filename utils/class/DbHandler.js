import pool from '../../bd.js'

export class DbHandler{
    #email;
    #password;
    constructor(){
        this.#email,
        this.#password
    }

    async setUsuario(correo,pass){
        try{
            const res = await pool.query('INSERT INTO usuarios (email, password) VALUES ($1,$2) RETURNING *',[correo,pass])
            console.log(`Email ${res.rows[0].email} registrado con éxito.`);
        }
        catch(e){
            throw e;
        }
    }
}