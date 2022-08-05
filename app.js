import express from "express";
import cors  from 'cors';
import db from "./database/db.js"
import userRoutes from "./routes/Routes.js"

const app = express()

app.use(cors())
app.use(express.json())
app.use('/home',userRoutes)

try {
    await db.authenticate()
    console.log('DB is ok')
} catch (error) {
    console.log(`Error: ${error}`)
}

app.get('/',(req,res)=>{
    res.send('Hola a todos')
})

// aqui esta corriendo el puerto 8000
app.listen(8000,()=>{console.log('Server UP running in http://localhost:8000/')})













