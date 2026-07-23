
const realUserName = "potato";
const realPassword = 32987;

let tryUserName = "potata"
let tryPassword = 32987
let tryRole = "User";

if (realUserName === tryUserName && realPassword === tryPassword) {
    if (tryRole === "Admin") {
        console.log("Show admin message")
    }
    else if (tryRole === "User") {
        console.log("Show user message")
    }
    else {
        console.log("Show unknown role")
    }
}
else {
    console.log("Login Failed")
}