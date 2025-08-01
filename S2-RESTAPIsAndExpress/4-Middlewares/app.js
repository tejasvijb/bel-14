const express = require('express');

const app = express();

const courses = [
    {
        id: 1,
        name: 'node.js',
        rating: 4.5,
        description: "Learn node js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    },
    {
        id: 2,
        name: 'React.js',
        rating: 4.5,
        description: "Learn React js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    },
    {
        id: 1,
        name: 'node.js',
        rating: 4.5,
        description: "Learn node js",
        instructions: "JC",
        difficulty: "Begineer",
        price: 200
    }
]

const logger = (req) =>     console.log(`${req.method}: Reqest received on ${req.url}`);

const loggerMiddleware = (req, res, next) =>  {
    console.log(`${req.method}: Reqest received on ${req.url}. Logger via Middleware`);
    next();
}

const loggerMiddlewareNew = (req, res, next) =>  {
    console.log(`${req.method}: Reqest received on ${req.url}. Logger via Middleware New`);
    next();
}

app.use(loggerMiddleware);
    

app.get('/', (req, res) => {
    logger(req);
    console.log(req);
    res.send("Hello World!");
})

app.get('/api/v1/courses', (req, res) => { 
   logger(req);
    console.log(req.query);
    res.send(courses) 
});



app.use(loggerMiddlewareNew);


app.get('/api/v1/courses/:courseId', (req, res) => { 
   logger(req);
    const courseId = req.params.courseId;
    res.send(courses[courseId]); 
});

app.listen(3000, (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Express server started at port 3000");
    }
})

