const express = require('express')

const router = express.Router();

//@route        api/auth
//@Desc         GET logged in user
//@access       private
router.get('/',(req,res)=>{
    res.send('Register a user')
})

//@route        api/auth
//@Desc         Auth user and get Token
//@access       Public
router.post('/',(req,res)=>{
    res.send('Login User')
})

module.exports= router