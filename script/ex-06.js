module.exports = function (dirPath, ext, callback) {
    var fs = require("fs");
    var path = require("path");
    var buf = fs.readdir(dirPath, function (err, list){
        if(err){
           return callback(err);
        }
        
        var ary = [];
        for(i=0; i<list.length; i++) {
            if( path.extname(list[i]) === "." + ext )
                ary.push(list[i]);
        }
        callback(null, ary);
    });
}