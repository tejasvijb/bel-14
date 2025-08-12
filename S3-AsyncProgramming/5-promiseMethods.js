const asyncFunction1 =  () => {          // Storing the information in DB
    return new Promise((resolve, reject) => {
        setTimeout(() => {  //T1
            // console.log('In between 1');
            reject("Processing Complete");
        }, 1000)
    })
}

const asyncFunction2 =  (input) => {     // Sending an SMS
    console.log(input);
      return new Promise((resolve, reject) => {
        setTimeout(() => {  //T1
            // console.log('In between 2');
            reject("Processing Complete 2")
        }, 2000)
    });
}

const asyncFunction3 =  (input) => {        // Sending an Email
    console.log(input);
    return new Promise((resolve, reject) => {       
        setTimeout(() => {  //T1
            // console.log('Processing Complete 3');
            reject("Processing Complete 3")
        }, 3000)
    });
}

// const response = Promise.all([asyncFunction1(), asyncFunction2(), asyncFunction3()]);

// response.then(res => {
//     console.log(res);
// }).catch(e => {
//     console.log(e);
// });

// console.log(response);


// const responseSettled = Promise.allSettled([asyncFunction1(), asyncFunction2(), asyncFunction3()]);

// responseSettled.then(res => {
//     console.log(res);
// }).catch(e => {
//     console.log(e);
// });

// console.log(response);


// const responseRace = Promise.race([asyncFunction1(), asyncFunction2(), asyncFunction3()]);

// responseRace.then(res => {
//     console.log("Logging response", res);
// }).catch(e => {
//     console.log("Logging Error", e);
// })


const responseAny = Promise.any([asyncFunction1(), asyncFunction2(), asyncFunction3()]);

responseAny.then(res => {
    console.log("Logging response", res);
}).catch(e => {
    console.log("Logging Error", e);
})

console.log("Completed");







