const joi=require('joi')

const bookSchema=joi.object({
    title:joi.string().required(),    
    authorName:joi.string().required()
    
})


const lendingSchema=joi.object({
    startDate:joi.string().required(),
    endDate:joi.string().required(),
    book:joi.array().items(bookSchema)
})

module.exports={lendingSchema}