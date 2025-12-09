const express = require('express')
const app = express()
const session = require('express-session')
const cookieParser = require('cookie-parser')
const PORT = 3000

app.use(cookieParser())

app.use(session({
    secret : 'amar',
    saveUninitialized : true,
    resave : true
}))

const user = {
    name : 'Amar',
    Roll_number : 45,
    Address : 'Pune'
}

app.get('/login' , (req , res)=>{
    req.session.user = user
    req.session.save()
    return res.send("You Are Logged In")
})

app.get('/user' , (req , res)=>{
    const sessionUser = req.session.user
    res.send(sessionUser)
})

app.get('/logout' , (req , res)=>{
    req.session.destroy()
    res.send("You Are Logged Out")
})

app