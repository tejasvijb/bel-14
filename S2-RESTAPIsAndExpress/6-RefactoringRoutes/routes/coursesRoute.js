const courses = require('../models/coursesModel');

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { 
    console.log(req.query);
    res.send(courses) 
});


router.get('/:courseId', (req, res) => { 
    const courseId = req.params.courseId;
    res.send(courses[courseId]); 
});

// * Create a course
router.post('/', (req, res) => {
    const tmpCourse = req.body;
    tmpCourse.id = courses.length;
    console.log(req.body);
    courses.push(tmpCourse);
    res.send(tmpCourse);
})

module.exports = router;

