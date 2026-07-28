

// Array as argument
function firstElementDouble(a){
    const value = a[0];
    return value*2;
}

const array = [21,51,33,47,63];
const result = firstElementDouble(array);
console.log(result);




// Object as argument
const student = {
    name: "Farhan",
    age: 25,
    degree: "BSc",
    marks: 78
};


function isAPlus(value){
    if (value.marks > 79){
        return "A+";
    }
    return "No A+";
}


const output = isAPlus(student);
console.log(output);