const express = require('express')

const router = express.Router();

//@route        GET  api/contacts
//@Desc         GET all users contacts
//@access       Private
router.post('/',(req,res)=>{
    res.send('Get A Contact')
})

//@route        POST api/contacts
//@Desc         Add new Contacts
//@access       Private
router.get('/',(req,res)=>{
    res.send('Add a contact')
})

//@route        PUT api/contacts/:id
//@Desc         Update contact
//@access       Private
router.put('/:id',(req,res)=>{
    res.send('Update Contact')
})

//@route        DELETE api/contacts/:id
//@Desc         Delete contacts
//@access       Private
router.delete('/:id',(req,res)=>{
    res.send('Delete Contact')
})




module.exports= router