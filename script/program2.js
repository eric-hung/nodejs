/*
// ex-01
console.log("beep boop");
*/

/*
// ex-02
var fs = require("fs");
fs.createReadStream(process.argv[2]).pipe(process.stdout);
*/

/*
// ex-03
// process.stdin 是個 stream 物件, 自帶 pipe 的功能
process.stdin.pipe(process.stdout);
*/