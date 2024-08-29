
function addTwoNumbers(num1, num2) {
    return num1 + num2
}

function recursionExample(value) {

    let newValue = value - 1

    console.log("Before value:", value)
    
    if (newValue > 0) {
        recursionExample(newValue)
    }

    console.log("After value:", value)
}

// recursionExample(3)
