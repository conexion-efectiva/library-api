
const bookService=require('../services/books')

/**
 * @type bookController
 */

 let instance = null

 class bookController{

      /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */

    async getList(req,res){
        const book=await bookService.getInstance().list()
    
        res.json(book)
    }





        /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */

    async getOne(req,res){
        const book=  await bookService.getInstance().get(req.params.id)
        if (book == null) {
            res.status(404).json({ message: 'ID no encontrado' })
            return
          }
          res.json(book)


    }




          /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */

      async put(req,res){
        const existBook= await bookService.getInstance().get(req.params.id)

        if (existBook == null) {
            res.status(404).json({ message: 'ID no encontrado' })
            return
          }

          let book = {...req.body,_id:req.params.id}
          book=await bookService.getInstance().update(book)
          res.json(book)
      }  



            /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */

      async delete(req,res){
        const existBook=await bookService.getInstance().get(req.params.id)
        if (existBook == null) {
            res.status(404).json({ message: 'Not found' })
          }

       await bookService.getInstance().delete(req.params.id)   
          res.json(existBook)
      }



              /**
   *
   * @param {import('express').Request} req
   * @param {import('express').Response} res
   */

      async post(req,res){
        const book=await bookService.getInstance().insert(req.body)
        res.json(book)
    
    }

    static getInstance() {
        if (instance == null) {
          instance = new bookController()
        }
    
        return instance
      }

 }

 module.exports= bookController