// setTimeout(() => { // T1
//     console.log("Main Timer")
// }, 0)


// Promise.resolve().then(() => { // P1
//     Promise.resolve().then(() => {  // P2
//         console.log("Inner Promise");
//     })

//     process.nextTick(() => console.log('process.nextTick 2')); // NT2
//     console.log("Promise Callback");   
// })

// console.log("Main script");

// process.nextTick(() => console.log('process.nextTick')); // NT1

for (let i=0; i< 5; i++) {
    Promise.resolve().then(() => {      // P[i]
        console.log("Inner Promise", i);
        process.nextTick(() => console.log('process.nextTick inner', i, ));
    })

    process.nextTick(() => console.log('process.nextTick', i));
}



