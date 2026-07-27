

const person = {
    name: "Farhan",
    age: 25,
    degree: "BSc",
    "home address": "Purana Paltan Line, Dhaka",
    "father:name": "Sazzad"
};
console.log(person);

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));

delete person["father:name"];
console.log(person);
delete person.age;
console.log(person);





const university = {
    name : "BRAC Uniersity",
    address : "Merul Badda",
    students : 8000,
    events : ["21st Feb", "Independence Day", "Victory Day"],
    people : {
        count: 200,
        principal:{
            name: "Mokaddam",
            yoExp: 25,
            degree: "English"
        }
    }
}

console.log(university.students);

console.log(university.people);

console.log(university.people.count);
university.people.count = 180;
console.log(university.people.count);


console.log(university.people.principal.yoExp);

console.log(university['people']['principal']['yoExp']);

