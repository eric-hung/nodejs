/*
// ex-01
function upperCaser(input){
    return input.toUpperCase();
}
//console.log(upperCaser('abc'));
module.exports = upperCaser;
*/

/*
// ex-02
function repeat(operation, num) {
    for(i=0; i<num; i++){
        operation(i);
    }    
}

module.exports = repeat;
*/

/*
// ex-03
function doubleAll(numbers) {
    return numbers.map(function(num) {
        return num * 2;
    });
}

module.exports = doubleAll
*/
/*
// ex-04
function getShortMessages(messages)
  // SOLUTION GOES HERE
}

module.exports = getShortMessages
*/

/*
// ex-06
function countWords(inputWords) {
    var ccc = {};
    return inputWords.reduce(function(ans, element) {
        // javascript 無法直接得知 object 的 length,
        // (而 associative array 也算是 object, 不是 array),
        // 因此得用以下這種間接方式來計算: 透過 Object.keys 將 keys 轉為 array, 再取得 length;
        if(Object.keys(ccc).length == 0)
            ccc[ans]=1;
            
        if( ccc[element] == undefined)
            ccc[element]=1;
        else
            ccc[element]++;
        return ccc;
    });
}
var inputWords = ['a', 'b', 'a', 'c', 'a', 'd'];
//console.log(countWords(inputWords));
module.exports = countWords
*/

/*
// ex-07
function reduce(arr, fn, initial) {
    if(Object.keys(ccc).length == 0)
        ccc[ans]=1;
        
    if( ccc[element] == undefined)
        ccc[element]=1;
    else
        ccc[element]++;
    return ccc;
}

module.exports = reduce
*/

// ex-16
/*
var x = {
    'n': 0,
    'm': 1,
    'x': 2
};
console.log(x.n);
console.log(x.m);
console.log(x.x);
if(x.y === undefined)
    console.log(x.y);
return;
*/
/*
var loremIpsum = {
  "name": "lorem-ipsum",
  "version": "0.1.1",
  "dependencies": {
    "optimist": {
      "version": "0.3.7",
      "dependencies": {
        "wordwrap": {
          "version": "0.0.2"
        }
      }
    },
    "inflection": {
      "version": "1.2.6"
    }
  }
};

function getDependencies(tree, k) {
    //console.log(typeof tree);
    if(tree == undefined) {
        //console.log('exit');
        return;
    }
    
    if (tree.dependencies == undefined) {
        console.log( k + '@' + tree.version );
    }    
    else {
        for(var key in tree.dependencies){
            //console.log(key);
            //console.log(tree.dependencies[key]);
            getDependencies(tree.dependencies[key], key);
        }
    }
}
//getDependencies(loremIpsum, null);

module.exports = getDependencies
*/