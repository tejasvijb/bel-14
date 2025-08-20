/* MacroTask Queue: 6 Stages
1. Timer Phase: setTimeout, setInterval, 
2. Pending Callback Phase: TCP errors, DNS errors, deferred system calls
3. Idle / Prepare Phase: Exclusively used by NodeJS internally, to maintain the event loop phases
4. Poll Phase: All I/O, DB call, FS Call, Network Call
5. Check Phase: setImmediate calls
6. Close Phase: Cleanup like handling database closing connection, 
*/






// const fs = require('fs');

// fs.readFile('./test.text', () => { // ReadFile
//     setTimeout(() => {
//         console.log("SetTimeOut inside I/O");
//     });

//     setImmediate(() => {
//         console.log("setImmediate inside I/O");
//     })
// });




// CallStack


// A: 
// (P1)Timer: ST1
// (P4):  
// (P5): SI1




// const net = require('net');

// console.log('Start');

// const server = net.createServer(() => {});
// server.listen(0, () => {
//   const port = server.address().port;
//   const socket = net.createConnection(port);

//   socket.on('connect', () => {      // Phase 4 IOH
//     setTimeout(() => {
//         console.log('Log from timer');
//     }, 0);
    
//     socket.destroy(); // triggers close callback

//     // Immediately destroy the server
//     server.close();
    

//   });

//   socket.on('close', () => {        // CH     
//     console.log('Log from close callback'); 
//   });
// });



// console.log("Start");

// setTimeout(() => {
//     console.log("SetTimeOut inside I/O");
// }, 0);

// setImmediate(() => {
//     console.log("setImmediate inside I/O");
// });

// process.nextTick(() => {
//     console.log('process.nextTick 1')
// });


