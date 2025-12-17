var http=require('http')
var fs=require('fs')

const server=http.createServer((req,res)=>{
	res.setHeader('Content-Type','text/html')
	if(req.url=='/home'){
		fs.readFile('./home.html',(err,data)=>{
		 	res.end(data.toString());
		})
	}
	else if(req.url=='/about'){
		fs.readFile('./about.html',(err,data)=>{
		 	res.end(data.toString());
		})
	}
	else if(req.url=='/services'){
		fs.readFile('./services.html',(err,data)=>{
		 	res.end(data.toString());
		})
	}
	else if(req.url=='/projects'){
		fs.readFile('./projects.html',(err,data)=>{
		 	res.end(data.toString());
		})
	}
	else if(req.url=='/contact'){
		fs.readFile('./contact.html',(err,data)=>{
		 	res.end(data.toString());
		})
	}
	else{
		fs.readFile('./home.html',(err,data)=>{
		 	res.end(data.toString());
		})
	}
})
const port=1000
server.listen(port,()=>{
	console.log("Server listened to port "+port)
})