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
var buf = fs.readFileSync("ex-03.txt");
var string = buf.toString();
var strAry = string.split("\n");
console.log(strAry.length);
*/

/*
// ex-04
var fs = require("fs");
var buf = fs.readFile(process.argv[2], function a(err, data){
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
