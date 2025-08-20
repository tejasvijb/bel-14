const {getAllCourses, getCourseById, createCourse} = require('../controllers/coursesController');

const express = require('express');
const router = express.Router();

router.get('/', getAllCourses);
router.get('/:courseId', getCourseById);
router.post('/', createCourse);

module.exports = router;
