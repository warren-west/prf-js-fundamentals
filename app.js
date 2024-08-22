document.writeln("A new line.")

// const variables need to have an initial value
const myFirstName = "Warren"
const myLastName = "West"
let myAge
let favAnimal = "🐈"

document.writeln("Name: " + myFirstName + " " + myLastName)
document.writeln("Age: " + myAge)
document.writeln("Fav Animal: " + favAnimal)

// Assigning new values to const variables will create errors.
// myFirstName = "Mark"
// myLastName = "Zuccherburg"
myAge = 33
favAnimal = "🐖"

console.log("Name: " + myFirstName + " " + myLastName)
console.log("Age: " + myAge)
console.log("Fav Animal: " + favAnimal)


let count = 0

// increment count
count--
count--
count--
count--
count--

console.log("Count: ", count)


let var1 = "1"
let var2 = 1

console.log(var1)
console.log(var2)

console.log(var1 == var2)
console.log(var1 === var2)


if ((var1 == var2) || (var2 > 10))
    console.log("We hit this code 🚀")