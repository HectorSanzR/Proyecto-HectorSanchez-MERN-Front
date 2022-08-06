import express from "express";
import cors  from 'cors';
import db from "./database/db.js"
import userRoutes from "./routes/Routes.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/home',userRoutes)



// aqui esta corriendo el puerto 8000
app.listen(8000,()=>{console.log('Server UP running in http://localhost:8000/')})













