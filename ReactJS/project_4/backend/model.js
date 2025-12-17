const mongoose=require('mongoose');
const schema=mongoose.Schema({
	RollNo:Number,
	Name:String,
	Age:Number
});
module.exports=mongoose.model('students',schema);