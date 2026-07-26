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