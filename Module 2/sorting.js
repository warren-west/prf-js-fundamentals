let strings = ["abc", "xyz", "fgh"]

let numbers = [12, 10, 5, 61, 16, 6]
let numbers2 = [12, 10, 5, 61, 16, 6]

strings.sort()
numbers.sort((current, next) => next - current)
numbers2.sort((current, next) => current - next)

console.log(strings.reverse())
console.log(numbers.reverse())
console.log(numbers2.reverse())
