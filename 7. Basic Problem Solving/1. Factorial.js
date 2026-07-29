

function calculateFactorial(number){
    let mul = 1;
    for (let i = 1; i <= number; i++){
        mul *= i;
    }
    return mul;
}

let result = calculateFactorial(4);
console.log(result);

result = calculateFactorial(5);
console.log(result);

