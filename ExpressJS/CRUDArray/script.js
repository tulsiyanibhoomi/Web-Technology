const express=require('express');
const app=express();
app.use(express.json());
app.listen(3000);
const list=[];
app.get('/list',(req,res)=>{
	res.send(list);
})
app.post('/list',(req,res)=>{
	const {name}=req.body;
	list.push(name);
	res.send(list);
})
app.put('/list/:index',(req,res)=>{
	id=req.params.index;
	const {name}=req.body;
	list[id]=name;
	res.send(list);
})
app.delete('/list/:index',(req,res)=>{
	id=req.params.index;
	list.splice(id,1);
	res.send(list);
})