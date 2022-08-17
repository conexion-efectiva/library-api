const mongoose=require('mongoose')


const authorSchema=mongoose.Schema({
    name:String,
    country:String
})
const bookSchema=mongoose.Schema({
     title:String,
     genero:String,
     lenguaje:String,
     authorName:String,
    author:[authorSchema]

})

const bookModel=mongoose.model('book',bookSchema)
module.exports=bookModel