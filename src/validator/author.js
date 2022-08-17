const joi=require('joi')

const authorSchema=joi.object({
    name:joi.string().required()
   , country:joi.string().required()

})

module.exports={authorSchema}