const asyncFunction1 =  () => {          // Storing the information in DB
    return new Promise((resolve, reject) => {
        setTimeout(() => {  //T1
            // console.log('In between 1');
            reject("Processing Complete");
        }, 10000)
    })
}


await asyncFunction1();

for(let i=0; i< 1000; i++) {
    console.log(i);
}