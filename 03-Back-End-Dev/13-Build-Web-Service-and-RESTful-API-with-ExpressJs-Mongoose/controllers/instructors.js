const InstructorModel = require('../models/instructors')

class InstructorController{
    static async createInstructor(req, res){
        try{
            const instructor = new InstructorModel({
                name : req.body.name,
                dateOfBirth : req.body.dateOfBirth,
                location : req.body.location
            })
            
            const saved = await instructor.save()
            res.status(201).send({
                message : "Added",
                data    : saved
            })
        }catch(err){
            res.status(500).send({message: err})
        }
    }

    static async getAllInstructors(req, res){
        await InstructorModel.find().then(result => {
            res.status(200).send({
                message : "Ok",
                data    : result
            })
        })
    }

    static async getInstructorByID(req, res){
        await InstructorModel.findOne({ _id : req.params.id }).then(result => {
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

    static async updateInstructor(req, res){
        try{
            const instructor = new InstructorModel({
                name : req.body.name,
                dateOfBirth : req.body.dateOfBirth,
                location : req.body.location
            })

            await InstructorModel.updateOne({_id : req.params.id}, req.body)
            res.status(200).send({
                message : "Updated",
                data : instructor
            })
        }catch(err){
            res.status(500).send({message: err})
        }
    }

    static async deleteInstructor(req, res){
        await InstructorModel.deleteOne({_id : req.params.id}).then(result => {
            if(result){
                res.status(200).send({message : "Deleted"})
            }else{
                res.status(404).send({message : "Not Found"})
            }
        }).catch(err => {res.status(500).send({message : err})})
    }
}

module.exports = InstructorController

