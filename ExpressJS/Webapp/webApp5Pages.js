const express=require('express');

const app=express();

app.get('/',(req,res)=>{
	res.send("Hello World!")
});

app.get('/home',(req,res)=>{
	res.send("Home Page")
});

app.get('/about',(req,res)=>{
	res.send("About Page")
});

app.get('/services',(req,res)=>{
	res.send("Services Page")
});

app.get('/contact',(req,res)=>{
	res.send("Contact Page")
});

app.listen(3000,()=>{
	console.log("Server running at port 3000")
});