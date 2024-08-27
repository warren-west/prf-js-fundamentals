/**
 * Create a function that returns an array of booleans
 * from a given number by iterating through the number
 * one digit at a time and appending true into the array if
 * the digit is 1 and false otherwise.
 * 
 * integerBoolean("100101") ➞ [true, false, false, true, false, true]
 * integerBoolean("10") ➞ [true, false]
 * integerBoolean("001") ➞ [false, false, true]
 */

// input = "0011100"
function getBooleanArrayFromString(input) {
    let output = []

    // let inputLength = 
    // console.log("Input Length:", inputLength);

    for (let i = 0; i < input.length; i++) {
        console.log(input[i]) // input[i] = current character / 0 or 1

        if (input[i] == "1") {
            output[i] = true
        } else {
            output.push(false)
        }
    }
    
    return output
}

console.log(getBooleanArrayFromString("10"))