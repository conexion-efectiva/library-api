const authorModel=require('../persistensia/author')
/**
 * @type authorService
 */
 let instance = null

 class authorService{
    async get(id){
        return await authorModel.find({_id:id})
  }

  async list(){
    return await authorModel.find()
  }

  async insert(author){
    const result=await authorModel.create(author)
    return result.toObject()
  }

  async update(author){
    await authorModel.updateOne({_id:author._id},author)
    return author
  }

  async delete(id){
    return await authorModel.deleteOne({_id:id})
  }

  static getInstance() {
    if (instance == null) {
      instance = new authorService()
    }

    return instance
  }
 }

 module.exports=authorService