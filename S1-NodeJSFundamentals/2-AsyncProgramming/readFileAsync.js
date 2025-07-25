const fs = require('fs');

const filePath = './lengthyFile.txt';
let start = Date.now();
console.log("Started Reading File");
const data = fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
        console.error(`[${Date.now()}] Error reading file:`, err.message);
        return;
    }
    console.log(`File reading complete in ${Date.now() - start} ms`);

    
}); // IO bound operation

console.log(`Async reading of file in ${Date.now() - start} ms`);

const start2 = Date.now(); 
for(let i=0; i< 104000; i++) {
    // console.log("Do more work: " + i);
}
console.log(`For loop completed in ${Date.now() - start2} ms`);





