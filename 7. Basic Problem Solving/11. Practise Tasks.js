


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