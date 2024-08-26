// We have a list of temperatures (from wherever, doesn't matter)
// We need to find the highest and lowest temperatures from this list
// Print out the highest and lowest to the console

let temps = [-32, -16, -22, -15, -33, -3, -21 ]

// Let's make two variables
let highest = temps[0]
let lowest = temps[0]

// Let's create a loop
// What should we loop? - regular for, or for...of

for (let temp of temps) {
    console.log(temp)
    // we've discovered that we can use "temp" to access the current temperature value

    // Let's do something with that...

    // console.log(Boolean(temp > highest))
    console.log(Boolean(temp < lowest))
    
    if (temp > highest)
        highest = temp // it's possible that 32 isn't the highest?

    if (temp < lowest)
        lowest = temp
}

console.log("High:", highest);
console.log("Low:", lowest);
