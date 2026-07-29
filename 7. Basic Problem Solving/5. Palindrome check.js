

function checkPalindrome(string) {
    let string2 = ""
    for (let i = string.length - 1; i >= 0; i--) {
        // console.log(string[i]);
        string2 += string[i];
    }
    if (string === string2){
        return "Palindrome";
    }
    else {
        return "Not Palindrome";
    }


}

console.log(checkPalindrome("programming"));
console.log(checkPalindrome("I love Bangladesh"));

console.log(checkPalindrome("madam"));
console.log(checkPalindrome("civic"));


