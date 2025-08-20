const fun = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('D')
        }, 0)

        console.log('amit');

        Promise.resolve().then(() => console.log("Inside Promise")); //P1
        resolve();
    });
}



console.log('Raktim')

fun().then(() => {  // P2
    console.log("After completion of promise");
});

console.log('Shanta')
