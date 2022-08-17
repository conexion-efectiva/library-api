const ledingService=require('../services/lending')

/**
 * @type ledingController
 */

 let instance = null

 class ledingController{

      /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */


    async getList(req,res){
        const leding= await ledingService.getInstance().list()
        res.json(leding)
    }


        /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */

        async getOne(req,res){
            const leding= await ledingService.getInstance().get(req.params.id)
            if (leding == null) {
                res.status(404).json({ message: 'ID no encontrado' })
                return
              }
              res.json(leding)
        }



          /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */

        async put(req,res){
            const existLeding= await ledingService.getInstance().get(req.params.id)
            if (existLeding == null) {
                res.status(404).json({ message: 'Not found' })
                return
              }

              let leding= {...req.body,_id:req.params.id}
              leding =await ledingService.getInstance().update(leding)
              res.json(leding)

        }

            /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
        async delete(req,res){
            const existLeding=await ledingService.getInstance().get(req.params.id)
            if (existLeding == null) {
                res.status(404).json({ message: 'Not Found' })
                return
              }
              await ledingService.getInstance().delete(req.params.id)
              res.json(existLeding)
        }


              /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */

      async post(req,res){
        const leding=await ledingService.getInstance().insert(req.body)
        res.json(leding)



      }  

      static getInstance() {
        if (instance == null) {
          instance = new ledingController()
        }
    
        return instance
      }

 }
 module.exports=ledingController