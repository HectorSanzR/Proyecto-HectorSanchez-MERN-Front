import mongoose from "mongoose"
const Schema = mongoose.Schema;



//aqui esta el modelo de la base de datos
const UserSchema = new Schema(
     {
     name : {type:String},
     midde_name : {type:String},
     surname : {type:String},
     second_surname : {type:String},
     born : {type:String},
     address : {type:String},
     city : {type:String},
     country : {type:String},
     email : {type:String},
     gender : {type:String},
     contact : {type:String},
     ocupacy : {type:String},
     active : {type:String}
    },
    {collection:'users'}
    )
export default mongoose.model('UserModel',UserSchema)