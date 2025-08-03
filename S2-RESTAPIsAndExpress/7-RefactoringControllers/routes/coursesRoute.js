const {getAllCourses, getACourseById, createACourse} = require('../controllers/coursesController');

const express = require('express');
const router = express.Router();

router.get('/', getAllCourses);
router.get('/:courseId', getACourseById);
router.post('/', createACourse);

module.exports = router;

