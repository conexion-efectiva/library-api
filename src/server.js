const express=require('express')
const app = express()
const port=process.env.PORT|| 8080

app.use(express.json())

const bookRoutes=require('./routes/book')
const authorRoutes=require('./routes/author')
const ledingRoutes =require('./routes/leding')

const mongoose=require('mongoose')
require('dotenv').config()

    main()
    .then(()=> console.log('Base datos Conectada'))
    .catch((err)=> console.log(err))

    async function main(){
     await mongoose.connect(process.env.DB_MONGO)        
    }
    
     app.use('/api',bookRoutes)
     app.use('/api',authorRoutes)
     app.use('/api',ledingRoutes)
    app.listen(port,()=>{
        console.log('app listening on port',port)
    })