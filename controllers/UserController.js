import UserModerl from "../models/UserModel.js";


//crud


//mostrar datos
    export const getAllusers = async (req,res) =>{
        try{
            const users = await UserModerl.findAll()
            res.json(users)
        }catch(error){
            res.json({ message:error.message })
        }
    }

// mostrar dato
export const getUser = async (req,res) =>{
    try{
        const user = await UserModerl.findAll({
            where:{id:req.params.id}
        })
        res.json(user)
    }catch(error){
        res.json({ message:error.message })
    }
}

//crear un registro

export const createUser = async (req,res) =>{
    try{
        await UserModerl.create(req.body)
        res.json({
            "message":"User created"
        })
    }catch(error){
            res.json({ message:error.message })
    }
}

// actualizar
export const updateUser = async (req,res) =>{
    try {
        UserModerl.update(req.body,{
            where:{id: req.params.id}
        })
        res.json({
            "message":"The user has been updated"
        })
        
    } catch (error) {
        res.json({ message:error.message })
    }
}

//eliminar

export const deleteUser = async(req,res) =>{
    try {
        UserModerl.destroy({
            where:{id:req.params.id}
        })
        res.json({
            "message":"The user has been deleted"
        })
    } catch (error) {
        res.json({ message:error.message })
    }
}
