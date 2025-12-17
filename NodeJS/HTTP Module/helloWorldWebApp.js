var http=require('http')

const server=http.createServer((req,res)=>{
	res.end("Hello World");
})

const port=1000

server.listen(port,()=>{
	console.log("Server listened to port "+port)
})