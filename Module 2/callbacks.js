// What's a callback?

// Super simple - a function that calls another function
// inside itself. It also receives this function as a parameter


// write a function that prints a number to the console. ✔️
// write a function that adds two numbers together,
//    then prints the result to the console.

function printNumber(num) {
    console.log(num)
}

function addTwoNumbers(a, b, callback) {
    let result = a + b
    
    callback(result)
}


// invoke it
printNumber(55)

// let's invoke it!
addTwoNumbers(10, 20, printNumber)