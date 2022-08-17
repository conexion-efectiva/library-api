const mongoose=require('mongoose')
const bookSchema=mongoose.Schema({
    title:String,    
    authorName:String
   

})
const lendingSchema=mongoose.Schema({
    startDate:String,
    endDate:String,
    book:[bookSchema]
    
})
const lendingModel=mongoose.model('lending',lendingSchema)

module.exports=lendingModel