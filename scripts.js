// const http = require("http");
// const fs = require('fs');

// http.createServer((req,res)=>{
//     fs.readFile('index.html',(err,data)=>{
//         if (err) throw err;
//        res.writeHead(200,{'content-type3':'text/html'})
//        res.write(data)
//        res.end()
//     })
// }).listen(3001,()=>console.log("server is running"))


// var time = 0;

// var timer = setInterval(() => {
//     time+=2
//     console.log(time+ "seconds passed")
//     if(time>10){
//         clearInterval(timer)
//     }
// },2000);

var counter = (arr)=>{
    return 'there are' +arr.length + 'elements in array';
}

var adder=(a,b)=>{
   return `sum of the two numbers is ${a+b}`
}
 var pi = 3.142;
module.exports.counter = counter;
module.exports.adder = adder
module.exports.pi=pi;


