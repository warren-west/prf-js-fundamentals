// Regular function
function addTwoNumbers(num1, num2) {
    return num1 + num2
}

// Recursive function (it invokes itself)
function recursionExample(value) {

    let newValue = value - 1

    console.log("Before value:", value)

    if (newValue > 0) {
        recursionExample(newValue) // <--- Here is the recursion! Opens up a new instance of the function.
    }

    console.log("After value:", value)
}

/* EXTRA EXAMPLE */

function reverseString(str) {
    console.log(str)
    if (str === '') {
        return ''
    } else {
        let restOfWord = str.substring(1) // "hello".substring(1) = "ello"
        return reverseString(restOfWord) + str[0]
    }
}

const inputStr = "hello"
const reversedStr = reverseString(inputStr)
console.log(reversedStr) // Output: "olleh"