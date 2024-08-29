
setTimeout(() => {
    console.log("This takes some time to print...")
}, 5000); // timeout = ms

// Q: How long is 1000 ms?
// A: 1 second

// Interval will keep running (infinite loop)
// It also receives a "timeout"
// But will keep running at the timeout interval

let id = setInterval(() => {
    console.log("This is an interval...")
}, 1000);

// Combining the two to prevent an infinite loop...

setTimeout(() => {
    clearInterval(id)
}, 7000)