var fs=require("fs")

fs.exists('C:\\Users\\jagdi\\Desktop\\Sem- 3\\OAT\\Lab Manual.pdf',(exists)=>{
	console.log(exists?"Found":"Not Found");
})
fs.stat('osModule.js',(err,data)=>{
	console.log(data);
})
fs.readFile('osModule.js',(err,data)=>{
	console.log(data.toString())
})
fs.writeFile('demo.txt','Demo Text',(err,data)=>{

})
fs.appendFile('demo.txt',' Additional Text',(err,data)=>{

})
// fs.copyFile('demo.txt','demoCopy.txt',(err,data)=>{

// })
fs.rename('OSModule.js','osModule.js',(err)=>{
	if(err){
		throw err;
	}
})
// fs.unlink('demoCopy.txt',(err)=>{
// 	if(err){
// 		throw err;
// 	}
// })
console.log(fs.readFileSync('osModule.js').toString())