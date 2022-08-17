const express=require('express')
const router=express.Router()
const validateBody=require('../middleware/validateBody')
const bookController=require('../controller/book')
const {bookSchema}=require('../validator/book')


router.get('/book',(req,res)=> bookController.getInstance().getList(req,res))

router.get('/book/:id',(req,res)=>bookController.getInstance().getOne(req,res))

router.post('/book',validateBody(bookSchema),(req,res)=> bookController.getInstance().post(req,res))


router.put('/book/:id',validateBody(bookSchema),(req,res)=>bookController.getInstance().put(req,res))


router.delete('/book/:id',(req,res)=>bookController.getInstance().delete(req,res))

module.exports=router