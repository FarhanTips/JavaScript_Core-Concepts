

let scores = { math: 90, science: 85, art: 95 }; 
let sum = 0;
let avg = 0;
for (const keys in scores) {
    avg++;
    sum += scores[keys];
    console.log(keys+":",scores[keys]);
}
avg = sum/avg;
console.log("Average:",avg);

