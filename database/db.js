import { Sequelize } from "sequelize";

//TODO:
//estos son los datos de la base de datos  Nombre=database_app Ususario = root y contrase;a = 1234
const db = new Sequelize('database_app','root','1234',{
    host:'localhost',
    dialect: 'mysql'    
})

export default db