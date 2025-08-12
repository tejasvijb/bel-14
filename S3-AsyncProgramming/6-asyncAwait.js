// async Await
// Synactical Sugar over promises

// setTimeout(() => {
//     for(let i=0; i< 1000; i++) {
//         console.log(i);
//     } 
// }, 50)

const asyncFunction1 =  () => {          // Storing the information in DB
    return new Promise((resolve, reject) => {
        setTimeout(() => {  //T1
            // console.log('In between 1');
            reject("Processing Complete");
        }, 10000)
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

const f = (a, b) => a+b; 

const main = async () => {
    console.log("Start");

    console.log(await f(4,5));

    try {
        const res1 = await asyncFunction1();
        console.log(res1);
    } catch (e) {
        console.log("Error", e);
    }
    
    
    console.log("End");
}

main();




