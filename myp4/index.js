import express from 'express'

const app = express()
app.use(express.json())

app.get('/' , (req , res)=>{
    res.send("Hello Express")
})

app.post('/data' , (req , res)=>{
    res.json({message : 'Data Received' , data : req.body})
})

app.put('/update', (req , res)=>{
    res.send('Updated Successfully')
})

app.delete('/delete' , (req , res)=>{
    res.send("Deleted Successfully")
})

app.listen(3000 , ()=>{
    console.log("Express Server Running At http://localhost:3000")
})