/**
 * Create a function that accepts an array and returns the last item in the array.
 * 
 * getLastItem([1, 2, 3]) ➞ 3
 * getLastItem(["cat", "dog", "duck"]) ➞ "duck"
 * getLastItem([true, false, true]) ➞ true
 */

function getLastItem(array) {
    // how do we return the last element?

    console.log(array)
    console.log(array.length)

    // let arrayLength = 

    return array[array.length-1]
}

function getFinalElement(array) {
    return array.pop()
}

const getFinalItem = (array) => array.pop()

// Alt + left click = multiple selection cursors

// console.log(getLastItem([1, 2, 3]))
// console.log(getLastItem(["dog", "cat", "fish"]))
// console.log(getLastItem([true, false, true]))
// console.log(getLastItem(["🍕", "🍔", "🌮", "🥗"]))

console.log(getFinalItem([1, 2, 3]))
console.log(getFinalItem(["dog", "cat", "fish"]))
console.log(getFinalItem([true, false, true]))
console.log(getFinalItem(["🍕", "🍔", "🌮", "🥗"]))