const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000

app.set('view engine' , 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

let users = [
    {
        userId : "1",
        userName : "Gururaj Sharma",
        userEmail : 'gs6029907@gmail.com',
        userAge : "20"
    },
    {
        userId : "2",
        userName : "Ishaa Sharma",
        userEmail : "ishuu@gmail.com",
        userAge : "19"
    },
    {
        userId : "3",
        userName : "Pooja Sharma",
        userEmail : "only4pooja@gmail.com",
        userAge : "21"
    }
]

app.get('/' , (req , res)=>{
    res.render("home" , {data : users})
})

app.post('/' , (req , res)=>{
    const newUser = {
        userId : req.body.userId,
        userName : req.body.userName,
        userEmail : req.body.userEmail,
        userAge : req.body.userAge
    }
    users.push(newUser)
    res.render("home" , {data : users})
})

app.post('/update' , (req , res)=>{
    users.forEach(user =>{
        if(user.userId === req.body.userId){
            user.userName = req.body.userName
            user.userEmail = req.body.userEmail
            user.userAge = req.body.userAge
        }
    })
    res.render("home" , {data : users})
})

app.post('/delete' , (req , res)=>{
    const requestedUserId = req.body.userId
    users = users.filter(user => user.userId !== requestedUserId)
    res.render("home" , {data: users})
})

app.listen(PORT , ()=>{
    console.log(`App Is Running On http://localhost:${PORT}`)
})