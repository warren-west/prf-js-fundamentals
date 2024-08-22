let numbers = [0, -5, -2, 3, 6]

// We want to do a couple of things:
// 1. Filter positive numbers
// 2. Filter even numbers


// Where do we begin?
// Let's start with a single number.


function isPositive(num) {
    if (num >= 0)
        return true
    else
        return false
}

// 5 % 2 = 1
// 6 % 2 = 0
// 7 % 2 = 1

function isEven(num) {
    if (num % 2 == 0) // we use modulus operator %
        return true
    else
        return false // Alt + Shift + F (Auto Format code)
}

console.log(numbers);


let positiveNumbers = numbers.filter(item => isPositive(item))
let evenNumbers = numbers.filter(item => isEven(item))

let negativeNumbers = numbers.filter(item => !isPositive(item))
let oddNumbers = numbers.filter(item => !isEven(item))

console.log(positiveNumbers)
console.log(evenNumbers)
console.log(negativeNumbers)
console.log(oddNumbers)


















// console.log(isPositive(3));
// console.log(isPositive(5));
// console.log(isPositive(-1));
// console.log(isPositive(0));
