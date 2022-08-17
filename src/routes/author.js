const express=require('express')
const router=express.Router()
const validateBody=require('../middleware/validateBody')
const authorController=require('../controller/author')
const {authorSchema}=require('../validator/author')


router.get('/author',(req,res)=> authorController.getInstance().getlist(req,res))

router.get('/author/:id',(req,res)=>authorController.getInstance().getOne(req,res))

router.post('/author',validateBody(authorSchema),(req,res)=> authorController.getInstance().post(req,res))


router.put('/author/:id',validateBody(authorSchema),(req,res)=>authorController.getInstance().put(req,res))


router.delete('/author/:id',(req,res)=>authorController.getInstance().delete(req,res))

module.exports=router