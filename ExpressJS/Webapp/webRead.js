const express=require('express');
const fs=require('fs');

const app=express();

app.get('/',(req,res)=>{
	res.send("Home Section")
});

app.get('/account',(req,res)=>{
	fs.readFile(('account.txt'),(err,data)=>{
		res.send(data.toString())
	})
});

app.get('/about',(req,res)=>{
	fs.readFile(('about.txt'),(err,data)=>{
		res.send(data.toString())
	})
});

app.get('/address',(req,res)=>{
	fs.readFile(('address.txt'),(err,data)=>{
		res.send(data.toString())
	})
});

app.get('/features',(req,res)=>{
	fs.readFile(('features.txt'),(err,data)=>{
		res.send(data.toString())
	})
});

app.get('/contact',(req,res)=>{
	fs.readFile(('contact.txt'),(err,data)=>{
		res.send(data.toString())
	})
});

app.listen(3000,()=>{
	console.log("Server running at port 3000")
});