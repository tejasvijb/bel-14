const asyncFunction =  (cb) => {
    setTimeout(() => {  //T1
        console.log('In between 1');
        cb(1)
    }, 1000)
}

const asyncFunction2 =  (cb) => {
    setTimeout(() => {  //T1
        console.log('In between 2');
        cb(2)
    }, 2000)
}

const asyncFunction3 =  (cb) => {
    setTimeout(() => {  //T1
        console.log('In between 3');
        cb(3)
    }, 3000)
}


const main = async () => {
    console.log('Pre process');
    // Call back hell
    asyncFunction((res) => {   
        asyncFunction2((res1) => {
            asyncFunction3((res2) => {
                console.log("All Done");
            })
        })
    });    
    
    console.log("Main completes");
}

main();

/* Limitations:
1. Messy code leading tao callback hell
2. Control? 
*/ 
