let myLongString = "Harry Potter and the Goblet of Fire was a decent movie. Harry almost killed a dragon"

let searchTerm = "Goblet"
let resultOfIncludes = myLongString.includes(searchTerm)
console.log(resultOfIncludes)

let searchPosition = myLongString.indexOf(searchTerm)
let searchPosition2 = myLongString.indexOf("H")
let searchPosition3 = myLongString.lastIndexOf("H")

// console.log(searchPosition2);
// console.log(searchPosition3);

let endsWith = myLongString.endsWith("dragon.")
let beginsWith = myLongString.startsWith("Har")
console.log(endsWith)
console.log(beginsWith)

let sliceResult = myLongString.slice(2, 10)
console.log(sliceResult)
console.log(myLongString)


let splitSentence = myLongString.split('')
console.log(splitSentence)

// 65 (+26 characters) - uppercase
// 97 (+26 characters) - lowercase
let character = 'B'

let charCode = character.charCodeAt(0)
let isUpperCase = false

if (charCode >= 65 && charCode <= 90) {
    isUpperCase = true
}

console.log(character, charCode, isUpperCase)




// console.log(myLongString.toUpperCase())
// console.log(myLongString.toLowerCase())

let stringLength = myLongString.length


// 5 % 2 = 1
// 6 % 2 = 0
// 17 % 9 = 8

// == / ===
// != / !==
// && || 
// !

// if (stringLength + 10 == 95)

// Alt + Shift + F = auto-format code

if (myLongString.length % 2 == 1) {
    console.log("String length is odd.") // is odd
}
else
    console.log("String length is even.") // is even


console.log("After the if statement.")


let leftHandSide = 22
let rightHandSide = "true"

// console.log("abc", isNaN("abc"))
// console.log("'10'", isNaN("10"))
// console.log("10", isNaN(10))
// console.log("false", isNaN(false))

if (!isNaN(leftHandSide) && !isNaN(rightHandSide)) {
    // only perform math if both numbers are ACTUALLY numbers

    let multiply = leftHandSide * rightHandSide
    console.log(multiply);
}

// code resumes running here...