import { DataTypes } from "sequelize"
import db from "../database/db.js"

//aqui esta el modelo de la base de datos
const UserModerl = db.define('users',{
     name : {type: DataTypes.STRING},
     midde_name : {type: DataTypes.STRING},
     surname : {type: DataTypes.STRING},
     second_surname : {type: DataTypes.STRING},
     born : {type: DataTypes.STRING},
     address : {type: DataTypes.STRING},
     city : {type: DataTypes.STRING},
     country : {type: DataTypes.STRING},
     email : {type: DataTypes.STRING},
     gender : {type: DataTypes.STRING},
     contact : {type: DataTypes.STRING},
     ocupacy : {type: DataTypes.STRING},
     active : {type: DataTypes.STRING},
    

})
export default UserModerl