

//Number()
console.log("Example of Number()")
console.log(Number("123"));      // 123
console.log(Number("123.45"));   // 123.45
console.log(Number("0.300"));    // 0.3
console.log(Number("abc"));      // NaN
console.log(Number("123abc"));   // NaN
console.log(Number("abc123"));   // NaN




//parseInt()
console.log("Example of parseInt()")
console.log(parseInt("123"));      // 123
console.log(parseInt("123.45"));   // 123
console.log(parseInt("123abc"));   // 123
console.log(parseInt("abc"));       //NaN
console.log(parseInt("abc123"));   // NaN



//parseFloat()
console.log("Example of parseFloat")
console.log(parseFloat(123));         //123
console.log(parseFloat("123.45"));   // 123.45
console.log(parseFloat("123.45abc"));// 123.45
console.log(parseFloat("abc123"));   // NaN