const fs = require('fs');

const filePath = './lengthyFile.txt';
let start = Date.now();
const data = fs.readFileSync(filePath, 'utf-8'); // IO bound operation

console.log(`File reading complete in ${Date.now() - start} ms`);

start = Date.now(); 
for(let i=0; i< 104000; i++) {
    // console.log("Do more work: " + i);
}
console.log(`For loop completed in ${Date.now() - start} ms`);





