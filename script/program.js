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