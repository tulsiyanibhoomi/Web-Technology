const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const student=require('./model');
const bodyParser=require('body-parser');
require('dotenv').config();
const connectionString='mongodb+srv://'+process.env.USER+':'+process.env.PASSWORD+'@mongodb-wt.rmne2.mongodb.net/btech_cse_116';
mongoose.connect(connectionString).then(()=>{
	console.log("Connected!");
	const app=express();
	app.use(bodyParser.urlencoded());
    app.use(cors({
        origin: 'http://localhost:3001'
      }));
	app.get('/student',async(req,res)=>{
		const ans=await student.find();
		res.send(ans);
	});
	app.get('/student/:RollNo',async(req,res)=>{
		const ans=await student.findOne({RollNo:req.params.RollNo});
		res.send(ans);
	});
	app.post('/student',async(req,res)=>{
        console.log(req.body);
		stu=new student({
			...req.body
		});
		const ans=await stu.save();
		res.send(ans);
	});
    
	app.delete('/student/:RollNo',async(req,res)=>{
		const ans=await student.deleteOne({RollNo:req.params.RollNo});
		res.send(ans);
	});
	app.patch('/student/:RollNo',async(req,res)=>{
		const stu=await student.findOne({RollNo:req.params.RollNo});
		stu.Name=req.body.Name;
		stu.RollNo=req.body.RollNo;
		stu.Age=req.body.Age;
		const ans=await stu.save();
		res.send(ans);
	});
	app.get('/student/search/:text',async(req,res)=>{
		const ans=await student.find({
			Name:{
				$regex:req.params.text
			}
		});
		res.send(ans);
	});
	app.listen(process.env.PORT,()=>{
		console.log("Server running @ "+process.env.PORT);
	});
});