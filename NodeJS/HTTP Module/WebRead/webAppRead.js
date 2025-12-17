var http=require('http')
var fs=require('fs')

const server=http.createServer((req,res)=>{
	if(req.url=='/about'){
		fs.readFile('about.txt',(err,data)=>{
			res.end(data.toString())
		})
	}
	else if(req.url=='/contact'){
		fs.readFile('contact.txt',(err,data)=>{
			res.end(data.toString())
		})
	}
	else if(req.url=='/address'){
		fs.readFile('address.txt',(err,data)=>{
			res.end(data.toString())
		})
	}
	else if(req.url=='/features'){
		fs.readFile('features.txt',(err,data)=>{
			res.end(data.toString())
		})
	}
	else if(req.url=='/account'){
		fs.readFile('account.txt',(err,data)=>{
			res.end(data.toString())
		})
	}
	else{
		res.end("Hello World");
	}
})

const port=3000

server.listen(port,()=>{
	console.log("Server listened to port "+port)
})