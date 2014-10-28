var data = [1, 2, 3, 4, 5];

// type of array: 結果仍是 object;
// 在 javascript 當中, array 算是 specialized object, 但某些特性跟 object 不同.
console.log('typeOf: ' + typeof data);

// array#valueOf 示範: 以字串形式, 列出目前的所有值. 
console.log('valueOf: ' + data.valueOf());

// array#join 示範: 以字串形式, 串接目前所有元素.
console.log('join: ' + data.join());

// array#toString 示範: 以 "," 將所有元素串接起來的字串形式, 列出目前所有值 . 
console.log('toString: ' + data.toString());

// array.length 示範: 秀出 array length
console.log('length: ' + data.length);

// array#push 與 array.pop 示範: 遵從 FILO 原則.
data.push(100); // [1, 2, 3, 4, 5, 100]
console.log(data.pop()); // 100
console.log(data.valueOf()); // [1, 2, 3, 4, 5]

// array#shift 與 array.unshift 示範: 遵從 FIFO 原則.
console.log(data.shift()); // 1
data.unshift(1); // [1, 2, 3, 4, 5]
console.log(data.valueOf()); 

// array#splice 示範: 插入元素, 移除元素
console.log(data.splice(2, 0, 11, 22)); // 從 2 的位置插入, 移除 0 個

// array#concat 示範: 合併 array
console.log(data.concat([101, 102, 103])); // 回傳的是另一個新array, 原始 data 不受影響;

// array#reverse 示範: 倒轉 array
console.log(data.reverse());

// array#indexOf 示範:
console.log('indexOf: ' + data.indexOf(1));

// array#lastIndexOf 示範:
console.log('lastIndexOf: ' + data.indexOf(1));

/**
 * 接著是 callback function 的範例:
 */
// array#sort 示範
console.log(data.sort(function (a,b){return (a<b);})); // a<b 就調換; sort 會直接對 data 造成影響;

// array#map 示範
console.log(data.map(function (element){return element*2;}));

// array#reduce 的示範
//console.log(data.reduce(function (ele1, ele2){return ele1*ele2;}));

// JavaScript does not support arrays with named indexes.
// 所以 named indexes array(或稱為 associative array) 在 javascript 當中是以 {} (物件表示式) 來建構:
var namedIndexData = {'a':'apple', 'b':'banana', 'c':'camelon'};

// Object 的 length 計算方式:
console.log(Object.keys(namedIndexData).length);


// delete 示範:
delete data[0];
console.log(data); // [, 2, 3, 4, 5]
console.log(data.shift()); // undefined


// 小結:
/**
1 The Difference Between Arrays and Objects?
1.1 In JavaScript, arrays use numbered indexes.  
1.2 In JavaScript, objects use named indexes.

2 要移除元素是用 splice, 而非 delete
*/
