import UserModerl from "../models/UserModel.js";


//crud


//mostrar datos
    export const getAllusers = async (req,res) =>{
        try{
            const users = await UserModerl.find()
            res.status(200).json(users)
        }catch(error){
            res.json({ message:error.message })
        }
    }

// mostrar dato
export const getUser = async (req,res) =>{
    try{
        const id = req.params.id
         await UserModerl.findById({_id:id}).then((user)=>{
            res.status(200).json(user)

        })
    }catch(error){
        res.json({ message:error.message })
    }
}

//crear un registro

export const createUser = async (req,res) =>{
    try{
        await UserModerl.create(req.body)   
        res.status(200).json({
            "message":"User created"
        })
    }catch(error){
            res.json({ message:error.message })
    }
}

// actualizar
export const updateUser = async (req,res) =>{
    try {
        const id = req.params.id
        await UserModerl.updateOne({_id:id},req.body).then(res =>{
            console.log(res)
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
        const id = req.params.id
        UserModerl.deleteOne({_id:id}).then(res=>{
            console.log(res)
        })
        res.json({
            "message":"The user has been deleted"
        })
    } catch (error) {
        res.json({ message:error.message })
    }
}
