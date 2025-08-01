const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log(req);
    res.send("Hello World!");
})


app.listen(3000, (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Express server started at port 3000");
    }
})

