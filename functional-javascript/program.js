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
