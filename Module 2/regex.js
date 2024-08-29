// RegEx is regular expressions
// Basically: Pattern-matching for strings
// Not limited to JavaScript

// warren.west@noroff.no

// Does it have a @?
// Does it end with a valid domain (.no) - not "..."
// Don't want special characters aside from "." and "@"

// (123) 123 1234 -> /^(\d{3}).\d{3}.\d{4}/
// Does it start with a "(", does it contain only 3 numbers before the ")"
// Is there a space after that, then 3 digits, then a space, then 4 digits.

// Check for a hex color code.
// #aa33e9
// White is: #ffffff
// Black is: #000000

// you can have 0 - 9, or a - f

// let testString1 = "#aa28cc"
// let testString2 = "%kausgdf"
// let testString3 = "#324599b"

// console.log(myExpression.test(testString1))
// console.log(myExpression.test(testString2))
// console.log(myExpression.test(testString3))


function checkIsColorCode(codeToBeTested) {
    const myExpression = new RegExp(/^#([0-9a-f]{6})$/)

    let result = myExpression.test(codeToBeTested)

    return result
}

console.log(checkIsColorCode("#456789"))
console.log(checkIsColorCode("#abcdef"))
console.log(checkIsColorCode("#ab45ef"))
console.log(checkIsColorCode("%ab45ef"))
console.log(checkIsColorCode("#ab45ef35"))
console.log(checkIsColorCode("#ab45"))