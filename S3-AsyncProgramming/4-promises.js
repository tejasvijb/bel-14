/* Limitations:
1. Messy code leading tao callback hell
2. Control? 
*/ 

// Promises

// Change this callback to promise
const asyncFunction =  () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {  //T1
            console.log('In between 1');
            resolve("Processing Complete");
        }, 1000)
    })
}

const asyncFunction2 =  (input) => {
    console.log(input);
      return new Promise((resolve, reject) => {
        setTimeout(() => {  //T1
            console.log('In between 2');
            resolve("Processing Complete 2")
        }, 2000)
    });
}

const asyncFunction3 =  (input) => {
    console.log(input);
    return new Promise((resolve, reject) => {
        setTimeout(() => {  //T1
            console.log('Processing Complete 3');
            resolve()
        }, 3000)
    });
}

const main = async () => {
    console.log('Pre process');
    
    asyncFunction().then((val) => {
        console.log("Internal value", val);
        asyncFunction2().then(() => {
            asyncFunction3().then(() => {
                console.log("All Done");
            })
        }) 
    })

    // Promise Chaining: Helps avoid Callback Hell
    const responses = {
        res1:  null,
        res2: null,
        res3: null
    }

    asyncFunction()
        .then((val1) => {
            console.log("Internal value", val1);
            return asyncFunction2(val1)
        })
        .then((val2) => asyncFunction3(val2))
        .then(() => {
            console.log("All Done")
        })
        .catch(e => console.log(e));




    // const response =  asyncFunction();

    // const res2  = response.then(asyncFunction2);

    // const res3 = res2.then(asyncFunction3);

    // console.log(response);
    // console.log(res2);

    // console.log(res3);


    // response
    //     .then(() => {
    //         console.log("Promise called succesfully");
    //     })
    //     .catch(() => {
    //         console.log("Promise rejected succesfully");
    //     })
    
    // console.log(response);


    // asyncFunction().then(() => {
    //     console.log("Execution Complete");
    // }).catch(() => {
    //     console.log("There was an error");
    // })

    
    // resolveWithValue.then((returnedValue) => console.log(returnedValue));
    console.log("Main completes");
}

main();




