const orangePrice = '20';
const mangoPrice = 20;
const totalPrice = orangePrice + mangoPrice;
// console.log(typeof orangePrice);
// console.log(typeof mangoPrice);
// console.log(totalPrice);

const firstName = 'Ananta';
const lastName = 'Jalil';
const fullName = firstName + lastName;
// console.log(fullName);


// parseFloat() and parseInt() converts the datatype of string if the string contains numeric values but inside ""
const numberString = '20.3';
// const number = parseInt(numberString)
const number = parseFloat(numberString)

// console.log(typeof number)
// console.log(number)

const firstNumber = 0.1;
const secondNumber = 0.2;
const total = firstNumber + secondNumber;
console.log(total)


//  .toFixed(2), format করে দশমিকের পর ২ ঘর পর্যন্ত। কিন্তু এটা string return করে।
const totalTwoDecimal = total.toFixed(3)
console.log(totalTwoDecimal)
console.log(typeof totalTwoDecimal)

const totalTwoDecimalNumber = parseFloat(totalTwoDecimal);
console.log(totalTwoDecimalNumber);


