// Sync Execution: Example 1
/*
console.log('Start');
console.log('In between');
console.log('End');
*/


// Async Execution: Example 2
/*
const main = () => {
    console.log('Start');

    setTimeout(() => {
        console.log('In between');
    }, 1000);

    f1();
    
    console.log('End');
} 

const f1 = () => {
    setTimeout(() => {
        console.log('In between 2');
    }, 0);
}


main()

*/

const main = () => {
    console.log('Start');       //I/O 
    const start = Date.now();
    
    console.log('End');

    // setTimeout(() => {
    //     for(let i=0; i < 100000; i++) {
    //         console.log(i);
    //     }
    // }, 999);
    
    setTimeout(() => {
        console.log('In between');

        console.log('Diff: ', Date.now() - start);
    }, 1000);
    
    console.log("Absolute End");

} 






main();

