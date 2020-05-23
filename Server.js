const express = require('express')

const app = express()
const PORT = process.env.PORT || 5000


app.get('/',(req,res)=>{
    res.json({ msg:'Hello World!' })
})

// Define Routes
app.use('/api/users',require('./routes/Users'))
app.use('/api/contact',require('./routes/Contacts'))
app.use('/api/auth',require('./routes/Auth'))


app.listen(PORT,()=>console.log(`Server started on port ${PORT}`))