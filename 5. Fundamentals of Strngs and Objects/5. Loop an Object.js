
// array traversal by loop (for-of)
const numbers = [11,22,33,44,55,66];
for (const number of numbers) {
    console.log(number);
}



// object traversal by loop (for-in)
const person = {
    name: "Farhan",
    age: 25,
    degree: "BSc",
    "home address": "Purana Paltan Line, Dhaka",
    "father:name": "Sazzad"
};

for (const keys in person) {
    console.log(keys, person[keys]);
}



// Another way
const keys2 = Object.keys(person);
console.log(keys2)

for (const i of keys2) {
    console.log(i, person[i]);
}
