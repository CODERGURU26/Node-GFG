const express = require('express')
const app = express()
const PORT = 3000

app.use(express())

app.get('/users' ,(req , res)=>{
    res.json({message : "Returning List Of Users"})
})

app.post('/users' , (req , res)=>{
    const newUser = req.body
    res.json({message : "User Created!" , user : newUser})
})

app.put('/users/:id' , (req, res)=>{
    const userId = req.params.id
    const updateUser = req.body
    res.json({message : `User With ID ${userId} updated!`, updateUser})
})