const express = require('express')
const InstructorController = require('../controllers/instructors')

const router = express.Router()

router.post('/', InstructorController.createInstructor)
router.get('/', InstructorController.getAllInstructors)
router.get('/:id', InstructorController.getInstructorByID)
router.patch('/:id', InstructorController.updateInstructor)
router.delete('/:id', InstructorController.deleteInstructor)

module.exports = router

