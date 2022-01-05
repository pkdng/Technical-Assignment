const CourseModel = require('../models/courses')

class CourseController{
    static async createCourse(req, res){
        try{
            const course = new CourseModel({
                title: req.body.title,
                description: req.body.description,
                instructor: req.body.instructor,
                scheduleDateTime: req.body.scheduleDateTime
            })
            
            const saved = await course.save()
            res.status(201).send({
                message : "Added",
                data    : saved
            })
        }catch(err){
            res.status(500).send({message: err})
        }
    }

    static async getAllCourses(req, res){
        await CourseModel.find().then(result => {
            res.status(200).send({
                message : "Ok",
                data    : result
            })
        })
    }

    static async getCourseByID(req, res){
        await CourseModel.findOne({ _id : req.params.id }).then(result => {
            if(result){
                res.status(200).send({
                    message : "Ok",
                    data    : result
                })
            }else{
                res.status(404).send({message : "Not Found"})
            }
        }).catch(err => {res.status(500).send({message : err})})
    }

    static async updateCourse(req, res){
        try{
            const course = new CourseModel({
                title: req.body.title,
                description: req.body.description,
                instructor: req.body.instructor,
                scheduleDateTime: req.body.scheduleDateTime
            })

            await CourseModel.updateOne({_id : req.params.id}, course)
            res.status(200).send({
                message : "Updated",
                data : course
            })
        }catch(err){
            res.status(500).send({message: err})
        }
    }

    static async deleteCourse(req, res){
        await CourseModel.deleteOne({_id : req.params.id}).then(result => {
            if(result){
                res.status(200).send({message : "Deleted"})
            }else{
                res.status(404).send({message : "Not Found"})
            }
        }).catch(err => {res.status(500).send({message : err})})
    }
}

module.exports = CourseController