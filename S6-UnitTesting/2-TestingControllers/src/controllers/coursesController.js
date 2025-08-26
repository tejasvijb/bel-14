const courses = require("../models/coursesModel");

const getAllCourse =  () => {
    // const courseList = []
    // for (let i=0; i< 1000; i++) {
    //     courseList.push(courses.find())
    // }
    // return courseList[courseList.length -1];

    return courses.find();



}

const getACourse =  (courseId) => {
    const course = courses.findById(parseInt(courseId));
    return course;
}

const createACourse =   (course) => {
    return courses.create(course);;
}

module.exports = {getAllCourse, getACourse, createACourse};