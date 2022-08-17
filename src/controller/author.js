const authorService=require('../services/author')

/**
 * @type authorController
 */
 let instance = null

 class authorController {

      /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */

    async getlist(req,res){
        const author= await authorService.getInstance().list()
        if (author == []) {
          res.status(404).json({ message: 'Not List' })
          return
        }
        res.json(author)
    }


        /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
     async getOne(req,res){
        const author =await authorService.getInstance().get(req.params.id)
        if (author == null) {
            res.status(404).json({ message: 'Id no encontrado' })
            return
          }
          res.json(author)
     }   




    /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */

     async put(req,res){
        const existenAuthor=await authorService.getInstance().get(req.params.id)
        if (existenAuthor == null) {
            res.status(404).json({ message: 'Not found' })
          }
          let author={...req.body,_id:req.params.id}
          author=await authorService.getInstance().update(author)
          res.json(author)
     }




            /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */
     async delete(req,res){
        const existenAuthor= await authorService.getInstance().get(req.params.id)
        if (existenAuthor == null) {
            res.status(404).json({ message: 'Not found' })
          }
          await authorService.getInstance().delete(req.params.id)
          res.json(existenAuthor)
     }


              /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */


       async post(req,res){
        const author= await authorService.getInstance().insert(req.body)
        res.json(author)

       }         

       static getInstance() {
        if (instance == null) {
          instance = new authorController()
        }
    
        return instance
      }

 }

 module.exports=authorController