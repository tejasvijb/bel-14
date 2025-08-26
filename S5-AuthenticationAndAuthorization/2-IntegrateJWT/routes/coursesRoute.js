const {getAllCourses, getCourseById, createCourse} = require('../controllers/coursesController');

const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authorizationMiddleware');
router.use(authMiddleware)
router.get('/', getAllCourses);
router.get('/:courseId', getCourseById);
router.post('/', createCourse);

module.exports = router;
