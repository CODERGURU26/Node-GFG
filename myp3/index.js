import http from 'http'

const server = http.createServer((req , res)=>{
    if(req.method === 'GET'){
        res.writeHead(200 , {"content-type" : "text/plain"})
        res.end('Handling GET Request')
    }
    else if(req.method === 'POST'){
        let body = ''
        req.on('data' , chunk => {body += chunk} )
        req.on('end' , ()=>{
            res.writeHead(200 , {"content-type" : "text/plain"})
            res.end(`Received Data ${body}`)
        })
    }
    else{
        res.writeHead(405 , {"content-type" : "text/plain"})
        res.end("Method Not Allowed")
    }
})

const PORT = 3000

server.listen(PORT , ()=>{
    console.log(`Server Running On ${PORT}`)
})