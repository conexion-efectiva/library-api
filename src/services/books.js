const booksModel=require('../persistensia/books')

/**
 * @type boookService
 */

 let instance = null

 class boookService{

    async get(id){
        return await booksModel.find({_id:id})
    }

    async list(){
        return await booksModel.find()
    }

    async update(book){
        await booksModel.updateOne({_id:book._id},book)
        return book
    }

    async insert(book){
        const result= await booksModel.create(book)
        return result.toObject()
    }

    async delete(id){
        return await booksModel.deleteOne({_id:id})
    }

    static getInstance() {
        if (instance == null) {
          instance = new boookService()
        }
    
        return instance
      }

 }

module.exports=boookService 