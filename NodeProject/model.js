const mongoose=require('mongoose');
const schema=mongoose.Schema({
    title:String,
    author:String,
    price:Number,
    publishedDate:Date
});
module.exports=mongoose.model('book',schema);