

// Multi-level if-else condition 
// Practise question 12
const bmi = 18.5;

if (bmi < 18.5) {
    console.log("Underweight");
} 
else if (bmi >= 18.5 && bmi < 25) {
    console.log("Healthy Weight");
}
else if (bmi >= 25 && bmi < 30) {
    console.log("Overweight");
}
else {
    console.log(" Obese");
}



// Nested if-else Condition
// Practise question 14
const age = 19;
const hasID = false;

if (age>18){

    if (hasID) {
        console.log("Go for vote")
    }
    else {
        console.log("Bring your ID Card")
    }
}
else {
    console.log("Not eligible to vote")
}