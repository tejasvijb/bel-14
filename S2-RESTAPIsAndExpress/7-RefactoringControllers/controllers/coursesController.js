const courses = require('../models/coursesModel');

const getAllCourses = (req, res) => { 
    console.log(req.query);
    res.send(courses) 
}

const getACourseById = (req, res) => { 
    const courseId = req.params.courseId;
    res.send(courses[courseId]); 
};

const createACourse = (req, res) => {
    const tmpCourse = req.body;
    tmpCourse.id = courses.length;
    console.log(req.body);
    courses.push(tmpCourse);
    res.send(tmpCourse);
};

module.exports = {getAllCourses, getACourseById, createACourse};