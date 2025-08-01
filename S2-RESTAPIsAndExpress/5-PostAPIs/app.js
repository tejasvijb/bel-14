const express = require('express');

const app = express();
app.use(express.json());



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


const loggerMiddleware = (req, res, next) =>  {
    console.log(`${req.method}: Reqest received on ${req.url}. Logger via Middleware`);
    next();
}

app.use(loggerMiddleware);
    

app.get('/', (req, res) => {
    console.log(req);
    res.send("Hello World!");
})

app.get('/api/v1/courses', (req, res) => { 
    console.log(req.query);
    res.send(courses) 
});


app.get('/api/v1/courses/:courseId', (req, res) => { 
    const courseId = req.params.courseId;
    res.send(courses[courseId]); 
});

// * Create a course
app.post('/api/v1/courses', (req, res) => {
    const tmpCourse = req.body;
    tmpCourse.id = courses.length;
    console.log(req.body);



    courses.push(tmpCourse);



    res.send(tmpCourse);
})






app.listen(3000, (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Express server started at port 3000");
    }
})

