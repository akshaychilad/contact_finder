const express = require('express')

const router = express.Router();

//@route        api/users
//@Desc         users
//@access       Public
router.post('/',(req,res)=>{
    res.send('Register a user')
})

module.exports= router