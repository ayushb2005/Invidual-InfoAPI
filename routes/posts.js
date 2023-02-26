const express = require('express')
const router = express.Router()
const Post = require('../models/Posts')

//new person
router.post('/post',async(req,res)=>{
    console.log(req.body)   
    const post = new Post({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        birthdate : {
            month : req.body.birthdate.month,
            day : req.body.birthdate.day,
            year : req.body.birthdate.year
        },
        email : req.body.email,
        password : req.body.password
    })
    try{
        const spost = await post.save()
        //res.json(spost)
        res.json(200)
    }catch(err){
        res.json({message:err})
        res.json(400)
    }
})

//all people info
router.get("/getAll", async (req, res) => {
  //   res.send("Inside the post");
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
    res.json(400)
  }
})

//info by id
router.get('/findById/:findById',async(req,res)=>{
  try{
    const getById = await Post.findById(req.params.findById)
    res.json(getById)
  }catch(err){
    res.json({message:err})
    res.json(404)
  }
})

//deleteById
router.delete('/deleteById/:deleteById',async(req,res)=>{
  try{
    const deleteById = await Post.remove({_id:req.params.deleteById})
    res.json(200)
  }catch(err){
    res.json({message:err})
    res.json(404)
  }
})

//put request
router.put('/update/:updateById',async(req,res)=>{
  try{
    const putById = await Post.findByIdAndUpdate(req.params.updateById, {firstName:req.body.firstName, lastName:req.body.lastName,birthdate:{month:req.body.birthdate.month,day:req.body.birthdate.day,year:req.body.birthdate.year},email:req.body.email,password:req.body.password})
    res.json(200)
  }catch(err){
    res.json(404)
  }
})

router.patch('/patch/:patchById',async(req,res)=>{
  try{
    const patchById = await Post.updateOne({_id:req.params.patchById},{$set:{password:req.body.password}})
    res.json(200)
  }catch(err){
    res.json(404)
  }
})



module.exports = router