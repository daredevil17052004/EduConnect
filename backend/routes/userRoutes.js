import express from 'express'
import User from '../models/user.js'

const router = express.Router();

//creating a new user
router.post('/user',async(req,res)=>{
    try{
        const user = await User.create(req.body);
        res.status(201).json(user);
    }catch(error){
        res.status(500).json({error:error.message});
    }
})

//get all users
router.get('/users',async(req,res)=>{
    try{
        const users = await User.findAll();
        res.status(200).json(users);
        console.log(users)
    }catch(error){
        res.status(500).json({error});
    }
})

export default router;