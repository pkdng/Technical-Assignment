const mongoose = require("mongoose")

const ParticipantSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
        minLength: 1,
        maxLength: 50
    },
    dateOfBirth:{
        type: Date,
        required: true
    },
    email:{
        type: String,
        required: false,
        maxLength: 50
    },
    phone:{
        type: Number,
        required: false,
        maxLength: 13
    },
    courses:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Courses"
    }
})

module.exports = mongoose.model("Participants", ParticipantSchema)

