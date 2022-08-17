const express=require('express')
const router=express.Router()
const validateBody=require('../middleware/validateBody')
const ledingController=require('../controller/leding')
const {lendingSchema}=require('../validator/leding')


router.get('/leding',(req,res)=> ledingController.getInstance().getList(req,res))

router.get('/leding/:id',(req,res)=>ledingController.getInstance().getOne(req,res))

router.post('/leding',validateBody(lendingSchema),(req,res)=> ledingController.getInstance().post(req,res))


router.put('/leding/:id',validateBody(lendingSchema),(req,res)=>ledingController.getInstance().put(req,res))


router.delete('/leding/:id',(req,res)=>ledingController.getInstance().delete(req,res))

module.exports=router