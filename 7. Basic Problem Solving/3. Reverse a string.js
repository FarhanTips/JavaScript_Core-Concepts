
function reverseString(string) {
    let string2 = ""
    for (let i = string.length - 1; i >= 0; i--) {
        // console.log(string[i]);
        string2 += string[i];
    }

    return string2;

}

console.log(reverseString("programming"));
console.log(reverseString("I love Bangladesh"));
