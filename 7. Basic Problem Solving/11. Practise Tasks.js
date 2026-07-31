

// Task 13-2B: Reverse a Number 
function reverseNumber(num) { 
  let str = num.toString(); 
  let number = ""
  for (let i = str.length-1; i >= 0 ; i--) {
    number += str[i];
  }
  return Number(number);
  
} 
  
console.log(reverseNumber(1234)); // Expected: 4321 
console.log(reverseNumber(7));    // Expected: 7 



// Task 13-3A: Product of Digits 

function productOfDigits(num) { 
  let str = num.toString(); 
  let total = 1; 
  for (let i = str.length-1; i >= 0 ; i--) {
    total *= Number(str[i]);
  }
  
  return total; 
} 
  
console.log(productOfDigits(123));  // Expected: 6 
console.log(productOfDigits(4040)); // Expected: 0






// Task 13-3B: Odd Numbers Up To N 
function getOddNumbers(n) { 
    let odds = []; 
    for (let i = 1; i <= n; i++){
        if (i % 2 !== 0){
            odds.push(i);
        }
    }
    return odds;
} 


console.log(getOddNumbers(20)); 
// Expected: [1, 3, 5, 7, 9] 