import mongoosse from 'mongoose'

//TODO:
//esta es la url donde apunta el proyecto//
const url = 'mongodb+srv://user_node_cafe:9c7eoZKfgPfIbADo@cluster0.upig8.mongodb.net/mern'
mongoosse.connect(url)

const db = mongoosse.connection
db.on('open',()=>{console.log('MONGODB is OK!')})
db.on('error',()=>{console.log('DB is do not work!')})

export default db;