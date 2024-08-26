// Introduced with ES6 (~2012)
// More aligned with OO languages
// JS stole the "class" keyword from Java (and a few others)

// Inheritance, polymorphism, abstraction, encapsulation

class Animal { // default property values
    // Constructor = special method
    constructor(name, weight, color = "gray", favFood) {
        this.name = name
        this.weight = weight
        this.color = color
        this.favFood = favFood
    }
    
    // Methods
    displayAnimalDetails() {
        console.log(this.name + " is " + this.weight + "kg, and likes to eat " + this.favFood)
    }

    // Empty method to be overridden
    move() {}
}

class Lion extends Animal {
    // Properties
    constructor(name, weight, color = "gray", favFood, pride) {
        // we need to send all this to the parent :( -> name, weight, color = "gray", favFood
        super(name, weight, color, favFood)
        this.pride = pride
    }

    // Method
    roar() {
        console.log("ROOOOOAAAAR! 🦁")
    }

    // Overloading / Overriding methods
    // displayAnimalDetails() {
    //     console.log(this.name + " weighs " + this.weight + " and is part of " + this.pride)
    // }
    displayAnimalDetails() {
        super.displayAnimalDetails()
        console.log("and " + this.name + " is part of " + this.pride)
    }

    move() {
        console.log("The lion walks")
    }
}

class Whale extends Animal {
    // Properties
    constructor(name, weight, color = "gray", favFood, pod) {
        // we need to send all this to the parent :( -> name, weight, color = "gray", favFood
        super(name, weight, color, favFood)
        this.pod = pod  // Ctrl + D
    }

    // Method
    jumpOutOfWater() {
        console.log("Big splash! 🐳🐳🐳")
    }

    move() {
        console.log("The whale swims")
    }
}

const myLion = new Lion("Simba", 152, "Orange", "🍖", "East African Pride")
const mobyDick = new Whale("Moby", 674, undefined, "🦐", "North Baltic Pod")

myLion.displayAnimalDetails()
mobyDick.displayAnimalDetails()

myLion.roar()
mobyDick.jumpOutOfWater()

myLion.move()
mobyDick.move()
