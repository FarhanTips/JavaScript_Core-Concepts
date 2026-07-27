// Practice Task-1.1

let str = "hello"; 
let arr = ["h", "e", "l", "l", "o"]; 

console.log(str.length); // 5
console.log(arr.length); // 5

console.log(str[0]); // "h"
console.log(arr[0]); // "h"

// str.push("!");  TypeError: str.push is not a function. কারণ Array-এর push() method আছে, কিন্তু String-এর push() method নেই। String → immutable. String তৈরি হওয়ার পরে তার character সরাসরি পরিবর্তন করা যায় না।


// Array → mutable. Array-এর ভিতরের data পরিবর্তন করা যায়:
arr.push("!");
console.log(arr);






// Practice Task-1.2
let str2 = "JavaScript";

let arr2 = str2.split("");

console.log(arr2);

let arr3 = ["c", "a", "t"];

let str3 = arr3.join("");

console.log(str3);
console.log(typeof str3);



// split() = ভাঙে
// join() = জোড়া লাগায়






// Practice Task-2.1
let name = "JavaScript"; 
console.log(name.toLowerCase());
name.toLowerCase();
console.log(name);

console.log(name.toUpperCase());



let whitespacestr = "  hello there            ";
console.log(whitespacestr);
console.log(whitespacestr.trim());

whitespacestr.trim();
console.log(whitespacestr);





// Practice Task-3.1
// string.slice(start, end+1)
let sentence = "Learning JavaScript is fun!"; 
const word1 = sentence.slice(0, 8);
console.log(word1);
console.log(sentence.slice(-4));
console.log(sentence.slice(-7, -1));






// Practice Task-3.2
const h1 = "Hello";
const h2 = "World";

console.log(h1.concat(" ",h2, "!"," This is me."));


let result = h1 + " " + h2+"! This is me.";

console.log(result);