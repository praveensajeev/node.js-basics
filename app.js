// var scripts= require('./scripts');
// var events = require('events')
// // var util = require('util')

// var person = (name)=>{
//     this.name=name;
// }
// util.inherits(person,events.EventEmitter);
// var james = new person('james');
// var mary = new person('mary');
// var ryu = new person('ryu');
// var people = [james,mary,ryu];
// people.forEach((person)=>{
//     person.on('speak',(msg)=>{
//         console.log(person.name+ 'said' +msg);
//     })
// })
//  james.emit('speak','hey dudes')

var fs = require('fs');
var path = require('path');

// fs.readFile(path.join(__dirname,'readme.txt'),'utf8',(err,data)=>{
//     if (err)throw err;
//     console.log(data)
// })

// fs.mkdir('stuff',(err,data)=>{
//     fs.readFile('readme.txt','utf8',(err,data)=>{
//         if (err) throw err;
//         console.log(data);
//     })
// })
var http = require('http');
http.createServer((req,res)=>{
    console.log("requests was made "+req.url);
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('hey ninjas..')
}).listen(3000,'127.0.0.1',()=>console.log("you dawgs,now listning to port 3000"));


