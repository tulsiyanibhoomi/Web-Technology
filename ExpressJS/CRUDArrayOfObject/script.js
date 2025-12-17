const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.listen(2500,()=>{
	console.log("Server running @ 2500");
});
app.use(bodyParser.urlencoded());
students=[
	{
		id:1001,
		name: 'Bhoomi',
		age:18,
		cpi:7
	},
	{
		id:1002,
		name: 'Komal',
		age:19,
		cpi:10
	},
	{
		id:1003,
		name: 'Mansi',
		age:20,
		cpi:10
	}
];
faculty=[
	{
		id:10001,
		name: 'AVB',
		age:35,
	},
	{
		id:10002,
		name: 'KMD',
		age:40,
	},
	{
		id:1003,
		name: 'PSJ',
		age:42,
	}
];
laptop=[
	{
		id:101,
		version: 'HP',
	},
	{
		id:102,
		name: 'Lenovo',
	},
	{
		id:103,
		name: 'Dell',
	}
];
const arrays=
	{
		"student":students,
		"faculty":faculty,
		"laptop":laptop
	};
app.get('/list/:var',(req,res)=>{
	const listName=req.params.var;
	const data=arrays[listName];
	res.send(data);
});
app.get('/list/:var/:id',(req,res)=>{
	const listName=req.params.var;
	const data=arrays[listName];
	const index=data.findIndex((temp)=>{
 		return temp.id==req.params.id;
	});
	res.send(data[index]);	
});
app.post('/list/:var',(req,res)=>{
	const listName=req.params.var;
	const data=arrays[listName];
	data.push(req.body);
	res.send(data);
});
app.patch('/list/:var/:id',(req,res)=>{
	const listName=req.params.var;
	const data=arrays[listName];
	const index=data.findIndex((temp)=>{
		return temp.id==req.params.id;
	});
	data[index]=req.body;
	res.send(data);
});
app.delete('/list/:var/:id',(req,res)=>{
	const listName=req.params.var;
	const data=arrays[listName];
	const index=data.findIndex((temp)=>{
		return temp.id==req.params.id;
	});
	data.splice(index,1);
	res.send(data);
});