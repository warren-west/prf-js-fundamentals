// Array
const myArray = ["red", "blue", "green",]
let mySecondArray = [] // mutable

myArray.length
myArray.push("blue") // immutable
myArray.pop()

// myArray = [4, 5, 6]
mySecondArray = [1, 2, 3]

// Objects
// We use to store related data as key - value pairs
// We can attach properties and methods to an object

let type = 98;

let product1 = {
    // Properties
    type: "Running",
    brand: "Adidas",
    size: 42,
    colors: ["Green", "Black"],
    // Methods
    displayShoeDetails() {
        console.log("Type: " + this.type)
        console.log("Brand: " + this.brand)
        console.log("Size: " + this.size)
        this.displayShoeColors()
    },
    displayShoeColors() {
        for (let current of this.colors)    
            console.log(current)
    }
}

product1.colors[0]
product1.type

// Pillars of OOP:
// 1. Abstraction
// 2. Inheritance
// 3. Encapsulation - black box
// 4. Polymorphism - multiple forms

let product2 = {
    // Properties
    type: "Sneaker",
    brand: "Nike",
    size: 40,
    colors: ["Red", "White"],
    // Methods
    displayShoeDetails() {
        
    }
}

console.log(product1)
console.log(product2)

product1.displayShoeDetails()

const myFunction = function(message) {
    console.log(message)
}

product1.isInStock = false
product1.displayStockStatus = function() {
    console.log("In stock: " + isInStock)
}
product1.printMessage = myFunction


// iterate through each key of a (array / object)
for (let key in product1) {
    console.log(key)
    console.log("Using .key", product1.key)
    console.log("Using [key]", product1[key])
}


console.log(product1["type"])