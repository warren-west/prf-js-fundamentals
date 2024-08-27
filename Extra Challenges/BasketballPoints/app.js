/**
 * Basketball points:
 * Write a function that receives 2 parameters;
 * 1. The number of 2-pointers scored.
 * 2. The number of 3-pointers scored.
 * 
 * Examples:
 * points(1, 1) ➞ 5
 * points(7, 5) ➞ 29
 * points(38, 8) ➞ 100
 */

function calculatePoints(twoPointers, threePointers) {
    // let twos = 
    // let threes = 

    // let result = 

    return twoPointers * 2 + threePointers * 3
}
 
const calculatePointsArrow = (twoPointers, threePointers) => twoPointers * 2 + threePointers * 3

let firstResult = calculatePointsArrow(1, 1)
let secondResult = calculatePointsArrow(7, 5)
let thirdResult = calculatePointsArrow(38, 8)

// let firstResult = calculatePoints(1, 1)
// let secondResult = calculatePoints(7, 5)
// let thirdResult = calculatePoints(38, 8)

console.log(firstResult, secondResult, thirdResult);