let num1 = 10
let num2 = 20

let num3 = 99
let num4 = 50

console.log(addTwoNumbers(num1, num2))
console.log(addTwoNumbers(num1, num3))
console.log(addTwoNumbers(num1, num4))
console.log(addTwoNumbers(num2, num4))
console.log(addTwoNumbers(num2, num3))

console.log(squareNumber(2));
console.log(squareNumber(3));
console.log(squareNumber(4));

console.log(addTwoNumbers(squareNumber(2), squareNumber(3)))

// Declared functions
function addTwoNumbers(a, b) {
    let result = a - b
    return result
}

function squareNumber(num) {
    return num ** 2
}

// Function Expressions
const subtractTwoNumber = function(a, b) {
    return a - b
}

let firstList = ["Tomatoes", "Butter", "Bread"]
let secondList = ["Eggplant", "Cheese", "Milk"]


const joinTwoLists = function(list1, list2) {
    let result = [...list1, ...list2]
    
    // for (let item of list1) {
    //     result.push(item)
    // }
    // for (let item of list2) {
    //     result.push(item)
    // }

    return result
}

console.log(joinTwoLists(firstList, secondList))


function addSomeNumbers() {
    let sum = 0
    for (const num of arguments) {
        sum += num
    }

    return sum
}




addSomeNumbers(3, 4, 8, 2, 5)
addSomeNumbers(3, 4, 8, 2)
addSomeNumbers(3)