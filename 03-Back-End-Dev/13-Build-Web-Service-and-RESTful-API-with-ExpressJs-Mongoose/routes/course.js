const express = require('express')
const CourseController = require('../controllers/courses')

const router = express.Router()

router.post('/', CourseController.createCourse)
router.get('/', CourseController.getAllCourses)
router.get('/:id', CourseController.getCourseByID)
router.patch('/:id', CourseController.updateCourse)
router.delete('/:id', CourseController.deleteCourse)

module.exports = router

