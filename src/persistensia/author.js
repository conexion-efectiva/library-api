//authorId  name   country
const mongoose=require('mongoose')
const authorSchema=mongoose.Schema({
    name:String,
    country:String
})
const authorModel=mongoose.model('author',authorSchema)
module.exports=authorModel