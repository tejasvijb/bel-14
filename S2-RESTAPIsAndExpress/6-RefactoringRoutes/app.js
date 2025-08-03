const express = require('express');
const app = express();
const {logger} = require('./middlewares/loggerMiddleware');
const coursesRoute = require('./routes/coursesRoute'); 

app.use(express.json());
app.use(logger);
app.use("/api/v1/courses", coursesRoute);

// Health check endpoint
app.get('/ping', (req, res) => { 
    res.send("Pong");
})


app.listen(3000, (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Express server started at port 3000");
    }
})

