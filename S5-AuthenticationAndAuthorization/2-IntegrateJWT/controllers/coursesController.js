const {courses} = require('../models/coursesModel');







const getAllCourses = (req, res) => {    
    if (!req.user.role) {
        res.status(400).send("Should have some role")
    }

    
     return res.send(courses);
}

const getCourseById = (req, res) => {
    if (!req.user.role) {
        res.status(400).send("Should have some role")
    }

    validateJWT(req, res);
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) {
        return res.status(404).send("The course you are looking for is not avaialble");

    }
    res.send(course);
}

const createCourse = (req, res) => {
    if (req.user.role != 'admin') {
        return res.status(400).send("Should have admin privileges")
    }
    const course = req.body;
    console.log("Body of the request", {course})   
    course.id = courses.length + 1;
    courses.push(course);
    res.send(course);
}

module.exports = {getAllCourses, getCourseById, createCourse}