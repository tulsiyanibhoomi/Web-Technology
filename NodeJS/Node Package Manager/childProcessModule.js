var child_process=require("child_process")

child_process.exec("dir",(err,stdout,stdin)=>{
	if(err){
		throw err;
	}
	console.log(stdout)
})