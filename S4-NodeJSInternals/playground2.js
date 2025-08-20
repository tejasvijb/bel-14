// const f = () => {
//     console.log("XYZ");
//     f();
// }

// f();

setTimeout(() => {  T1
    console.log("setTimeout inside I/O");
})

function recursiveNextTick() {
    console.log("From Recursive Next Tick")
    process.nextTick(recursiveNextTick);
}

recursiveNextTick();

Promise.resolve().then(() => {
    console.log("Promise then");
})


console.log("Main Script");


// One time
setTimeout(() => {
    console.log("XYZ")
}, 1000)

// Infinite loop
setInterval(() => {
    console.log("ABC")
}, 5000)



