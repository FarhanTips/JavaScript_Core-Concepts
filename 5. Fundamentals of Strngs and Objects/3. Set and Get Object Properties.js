


const phone = {
    brand: "Samsung",
    version: "A55",
    isThreeCamera: true,
    secondHand: false,
    appsInstalled: ["FB", "Youtube", "ChatGpt"]
};

console.log(phone);

// dot notation
// get
console.log(phone.version);

// set
phone.version = "M36";

// get
const ver = phone.version;
console.log(ver);



// bracket notation
// get
console.log(phone["version"]);

// set
phone["version"] = "Note";

// get
const ver2 = phone["version"];
console.log(ver2);

// When we must use bracket notation

// first
const person = {
    name: "Farhan",
    age: 25,
    degree: "BSc",
    "home address": "Purana Paltan Line, Dhaka",
    "father:name": "Sazzad"
};
console.log(person);

// console.log(person.home address); Will throw an error
console.log(person["home address"]);
person["home address"] = "Amanatgonj, Barisal";
person["age"] = 24;
console.log(person);



// second
const key = "age";

// console.log(person.key); will show unidentified
console.log(person[key]);