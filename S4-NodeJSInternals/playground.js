// Example 1

// setTimeout(() => { // T1
//     console.log("Main Timer")
// }, 0)

// console.log("Main script 1");


// Example 2
// Promise.resolve().then(() => { //P1
//     console.log("Promise Callback");   
// })

// console.log("Main script 1");


// Example  3

// console.log("Start")

// setTimeout(() => { // T1
//     console.log("Main Timer")
// }, 0)

// Promise.resolve().then(() => { //P1
//     console.log("Promise Callback");   
// })

// Promise.resolve().then(() => { //P2
//     console.log("Promise Callback 2");   
// })


// Promise.resolve().then(() => { //P3
//     console.log("Promise Callback 3");   
// })

// console.log("End")


// mAcroTask Queue => Timers
// mIcroTask Queue => Callbacks of Promises, process.nextTick

// Example 4
// for (let i=0; i< 10; i++) {
//     setTimeout(() => {
//         console.log(`Main Timer ${i}`)
//     }, 0)


//     Promise.resolve().then(() => {
//         console.log(`Promise Callback ${i}`);   
//     });
// }


// Example 5

setTimeout(() => {  // T1
    console.log("Main Timer")
}, 200)


Promise.resolve().then(() => {  // P1
    console.log("Promise Callback");  
    
    setTimeout(() => {  // T2
        console.log("Main Timer 2")
    }, 100)

    
    Promise.resolve().then(() => { // P2
        console.log("Resolved inner promise");   
    })
})

console.log("Main script");

