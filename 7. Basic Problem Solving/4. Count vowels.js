


function countVowels(string){
    let count = 0;
    const vowels = "aeiou";
    for (let i = 0; i < string.length; i++){
        if (vowels.includes(string[i])) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("anisha"));
console.log(countVowels("Programming Hero"));