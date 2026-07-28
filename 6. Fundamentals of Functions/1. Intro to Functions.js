

function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return "even";
    }
    else {
        return "odd";
    }
}


const result = checkEvenOdd(27);
console.log("27 is an "+result+" number.");


console.log("46 is an "+checkEvenOdd(46)+" number.");







function chowdhuryfy(name){
    return name+" Chowdhury";
}

const out = chowdhuryfy("Robin");
console.log(out);