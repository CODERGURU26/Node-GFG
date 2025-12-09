const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 3000

let books = [
    {
        bookName: "Rudest Book Ever",
        bookAuthor: "Shwetabh Gangwar",
        bookPages: 200,
        bookPrice: 240,
        bookState: "Available"
    },
    {
        bookName: "Do Epic Shit",
        bookAuthor: "Ankur Wariko",
        bookPages: 200,
        bookPrice: 240,
        bookState: "Available"
    }
]

app.set('view engine' , 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.get('/' , (req , res)=>{
    res.render("home" , {data : books})
})

