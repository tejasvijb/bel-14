// Sync Execution: Example 1
/*
console.log('Start');
console.log('In between');
console.log('End');
*/


// Async Execution: Example 2

const main = () => {
    console.log('Start');

    setTimeout(() => {
        console.log('In between');
    }, 0);

    f1();
    
    console.log('End');
} 

const f1 = () => {
    setTimeout(() => {
        console.log('In between 2');
    }, 0);
}


main()