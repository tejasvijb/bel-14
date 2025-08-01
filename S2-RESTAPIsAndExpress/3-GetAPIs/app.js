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

app.get('/', (req, res) => {
    console.log(req);
    res.send("Hello World!");
})

// 2. Get all courses
// GET /courses

app.get('/api/v1/courses', (req, res) => { 
    console.log(req.query);
    res.send(courses) 
});


// 3. Get a course by Id
// GET /courses/{id}
// Violates DRY principles
// app.get('/api/v1/courses/0', (req, res) => { 
//     console.log(req.query);
//     res.send(courses[0]) 
// });


// app.get('/api/v1/courses/1', (req, res) => { 
//     console.log(req.query);
//     res.send(courses[1]) 
// });


// app.get('/api/v1/courses/2', (req, res) => { 
//     console.log(req.query);
//     res.send(courses[2]) 
// });


app.get('/api/v1/courses/:courseId', (req, res) => { 
    const courseId = req.params.courseId;
    // console.log(req.params);
    res.send(courses[courseId]); 
});










app.listen(3000, (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Express server started at port 3000");
    }
})

