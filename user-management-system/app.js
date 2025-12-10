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
        
    }

]