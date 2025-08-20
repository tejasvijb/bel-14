const internalCall = async () => {
    console.log("Internal log");
}


const main = async () => {
    setTimeout(() => {
        console.log('Log from timer');
    }, 0);
    
    Promise.resolve().then(() => {
        console.log("Hello there");
    })

    await internalCall();
    
    console.log("This is the end");
}

main();
