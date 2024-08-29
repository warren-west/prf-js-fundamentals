console.log("Test")

function addUpNumbers(number) {

    let result = 0

    // do some stuff
    for (let i = 1; i <= number; i++) {
        // console.log(i, number, result)

        result = result + i // result += i
    }

    return result
}

console.log(addUpNumbers(4))
console.log(addUpNumbers(13))
console.log(addUpNumbers(50))
console.log(addUpNumbers(100))