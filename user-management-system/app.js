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
        userName : "only4pooja@gmail.com",
        userAge : "21"
    }
]

