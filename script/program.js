/*
// ex-01
console.log("HELLO WORLD")
*/

/*
// ex-02
var sum = 0;
for(i=2;i<process.argv.length;i++)
    sum += parseInt(process.argv[i]);
console.log(sum);
*/

/*
// ex-03
var fs = require("fs");
var buf = fs.readFileSync(process.argv[2]);
var string = buf.toString();
var strAry = string.split("\n");
console.log(strAry.length-1);
*/

/*
// ex-04
var fs = require("fs");
var buf = fs.readFile(process.argv[2], {encoding:"utf8"}, 
function (err, data){
    if (err) throw err;
    
    var string = data.toString();
    var strAry = string.split("\n");
    console.log(strAry.length-1);
});
*/

/*
// ex-05
var fs = require("fs");
var path = require("path");
var dirPath = process.argv[2];
var ext = process.argv[3];
var buf = fs.readdir(dirPath, function a(err, list){
    for(i=0; i<list.length; i++) {
        if( path.extname(list[i]) === "." + ext )
            console.log(list[i]);
    }    
});
*/

/*
// ex-06
var ex06 = require("./ex-06");
ex06(process.argv[2], process.argv[3], function x(err, data) {
    if(err){
        console.log(err);
    }
    else {
        for(i=0;i<data.length;i++)
            console.log(data[i]);
    }    
});
*/

/*
// ex-07
var http = require("http");
http.get(process.argv[2], function(res) {
  res.on('data', function(chunk) {
    console.log(chunk.toString());
  });
  res.on('end', function() {
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
}); 
*/

/*
// ex-08
var http = require("http");
var str = "";
http.get(process.argv[2], function(res) {
  res.on('data', function(chunk) {
    str += chunk.toString();
  });
  res.on('end', function() {
    console.log(str.length);
    console.log(str);
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
}); 
*/

/*
// ex-09
var http = require("http");
var contents = [];
var status = [];


function abc(url, i) {
  http.get(url, function(res) {
    res.on('data', function(chunk) {
      contents[i] += chunk.toString();
    });
    
    res.on('end', function() {
      status[i] = "o";
      if(checkPass() == "o"){
        for(x=0; x<contents.length; x++){
          console.log(contents[x]);
        }
      }
    });
    
    res.on('error', function(e) {
      console.log("Got error: " + e.message);
    });   
  });
}

function checkPass(){
  var s = "o";
  for(i=0; i<(process.argv.length-2); i++){
    if(status[i] == "x")
      s = "x";
  }
  return s;  
}  

for(i=0; i<(process.argv.length-2); i++){
  contents[i] = "";
  status[i] = "x";
  abc(process.argv[i+2], i);
}
*/

/*
// ex-10
var net = require('net');
var server = net.createServer(function (socket) {
  // socket handling logic
  var now = getNow();
  console.log(now);
  socket.write(now);
  socket.end();
});

function getNow() {
  var date = new Date();
  
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  
  return (year + "-" + month + "-" + day + " " + hours + ":" + minutes);
}

server.listen(process.argv[2]);
*/

/*
// ex-11
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
  // The filename is simple the local directory and tacks on the requested url
  var filename = process.argv[3];

  // This line opens the file as a readable stream
  var readStream = fs.createReadStream(filename);

  // This will wait until we know the readable stream is actually valid before piping
  readStream.on('open', function () {
    // This just pipes the read stream to the response object (which goes to the client)
    readStream.pipe(res);
  });

  // This catches any errors that happen while creating the readable stream (usually invalid names)
  readStream.on('error', function(err) {
    res.end(err);
  });
  
}).listen(process.argv[2]);
*/

/*
// ex-12
// 先安裝 chrome 的外掛: postman; 需要用它來模擬 client端, 以 post 方式, 發request;
var http = require("http");
var map = require('through2-map');

http.createServer(function a(req, res){
  if( req.method != 'POST' )
    return;
  
  var body = '';
  req.on('data', function(data) { body += data });
  req.on('end',  function() {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(body.toUpperCase());
  });
      
}).listen(process.argv[2]);
*/

/*
// ex-13
var http = require("http");
var url = require("url");

http.createServer(function a(req, res){  
  if( req.method != 'GET' )
    return;
  
  var urlP = url.parse(req.url, true)  
  //console.log(url.parse(req.url, true));return;
  
  var isoFormat = urlP.query.iso;
  
  // iso 2 unix time:
  var unixTime = new Date(isoFormat);
  //console.log(unixTime);return;
  
  if (urlP.pathname == '/api/parsetime'){
    var timeAry = isoFormat.toString().split('T')[1].split('.')[0].split(':');
    var map = { 'hour':parseInt(timeAry[0])+8, 'minute':parseInt(timeAry[1]), 'second':parseInt(timeAry[2]) };
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(map));
  }
  else if (urlP.pathname == '/api/unixtime'){
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var map = {'unixtime':Date.parse(isoFormat)};
    res.end(JSON.stringify(map));
  }
  else {
    //console.log('/api/parsetime required.');
    return;
  }
  
  
}).listen(process.argv[2]);
*/