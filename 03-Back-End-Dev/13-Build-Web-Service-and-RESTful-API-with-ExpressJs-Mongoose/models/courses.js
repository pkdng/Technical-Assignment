const mongoose = require("mongoose")

const CourseSchema = mongoose.Schema({
    title:{
        type: String,
        required: true,
        minLength: 1,
        maxLength: 50
    },
    description:{
        type: String,
        required: true,
        minLength: 1,
        maxLength: 500
    },
    instructor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Instructors",
        required: true
    },
    scheduleDateTime:{
        type: Date,
        required: true
    }
})

module.exports = mongoose.model("Courses", CourseSchema)

