
var http = require('http');
var url = require('url');
//create a server
var server = http.createServer((req,res)=>{

 var parsedUrl = url.parse(req.url,true);
//Get the path name from the url
 var pathName = parsedUrl.pathname;

 var reply = JSON.stringify({'hazem' : 'sally and rony'})
 res.setHeader ('Content-Type','application/json')
 res.end(reply +"\n");

});

//Server init on port number
server.listen (4000,(req,res)=> {
console.log('listening')
})
