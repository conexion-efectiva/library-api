const joi =require('joi')


const authorSchema=joi.object({
    name:joi.string().required()
   , country:joi.string().required()

})

const bookSchema=joi.object({
    title:joi.string().required(),
    genero:joi.string().required(),
    lenguaje:joi.string().required(),
    authorName:joi.string().required(),
    author:joi.array().items(authorSchema)
})

module.exports={bookSchema}