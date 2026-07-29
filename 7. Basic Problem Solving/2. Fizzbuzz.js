// Problem: FizzBuzz (1 to N)
// loop through numbers from 1 to n. If a number is divisible by 3, print "Fizz"; if divisible by 5, print "Buzz"; if divisible by both, print "FizzBuzz"; otherwise, print the number itself.

function calculateFizzbuzz(number) {
    for (let i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(i+" is Fizzbuzz");
        }
        else if (i % 3 === 0) {
            console.log(i+" is Fizz");
        }
        else if (i % 5 === 0) {
            console.log(i+" is Buzz");
        }
        else {
            console.log(i);
        }
    }
}



calculateFizzbuzz(17);

