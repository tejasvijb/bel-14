const main = () => {
    console.log("Start")
    const pr = new Promise((resolve, reject) => {
    console.log("In Promise 1")
    console.log("In Promise 2")
        // Network Calls
        // FS Calls
        // Timer
    resolve();
    console.log("In Promise 3")
    })

    pr.then(() => { //PR
    console.log("Promise Resolved")
    })
    console.log("End")
}


main();
