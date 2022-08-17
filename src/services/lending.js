const lendingModel=require('../persistensia/lending')

/**
 * @type lendingService
 */

 let instance = null
class lendingService{

    async get(id){
        return await lendingModel.find({_id:id})
    }


    async list(){
        return await lendingModel.find()
    }

    async update(lending){
        await lendingModel.updateOne({_id:lending._id},lending)
        return lending
    }

    async insert(lending){
        const result=await lendingModel.create(lending)
        return result.toObject()
    }

    async delete(id){
        return await lendingModel.deleteOne({_id:id})
    }


    static getInstance() {
        if (instance == null) {
          instance = new lendingService()
        }
    
        return instance
      }
}

module.exports=lendingService