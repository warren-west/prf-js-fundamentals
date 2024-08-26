// for loop

// for (let i = 0; i <= 10; i+=3) {
//     console.log(i)
// }

// for (let i = 10; i >= 0; i-=2) {
//     console.log(i)
// }

// for ... of / in

let word = "HELYO"
//          01234

let furniture = ["desk", "chair", "table"]

// loops through VALUES
for (let char of word) {
    console.log(char)
}

// loop through KEYS
for (let key in furniture) {
    console.log(key, furniture[key])
}