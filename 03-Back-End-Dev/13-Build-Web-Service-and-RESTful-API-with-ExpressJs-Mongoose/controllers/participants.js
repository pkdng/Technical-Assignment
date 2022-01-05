const ParticipantModel = require('../models/participants')

class ParticipantController{
    static async createParticipant(req, res){
        try{
            const participant = new ParticipantModel({
                name: req.body.name,
                dateOfBirth: req.body.dateOfBirth,
                email: req.body.email,
                phone: req.body.phone,
                courses: req.body.courses
            })
            
            const saved = await participant.save()
            res.status(201).send({
                message : "Added",
                data    : saved
            })
        }catch(err){
            res.status(500).send({message: err})
        }
    }

    static async getAllParticipant(req, res){
        await ParticipantModel.find().then(result => {
            res.status(200).send({
                message : "Ok",
                data    : result
            })
        })
    }

    static async getParticipantByID(req, res){
        await ParticipantModel.findOne({ _id : req.params.id }).then(result => {
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

    static async updateParticipant(req, res){
        try{
            const participant = new ParticipantModel({
                name: req.body.name,
                dateOfBirth: req.body.dateOfBirth,
                email: req.body.email,
                phone: req.body.phone,
                courses: req.body.courses
            })

            await ParticipantModel.updateOne({_id : req.params.id}, participant)
            res.status(200).send({
                message : "Updated",
                data : participant
            })
        }catch(err){
            res.status(500).send({message: err})
        }
    }

    static async deleteParticipant(req, res){
        await ParticipantModel.deleteOne({_id : req.params.id}).then(result => {
            if(result){
                res.status(200).send({message : "Deleted"})
            }else{
                res.status(404).send({message : "Not Found"})
            }
        }).catch(err => {res.status(500).send({message : err})})
    }
}

module.exports = ParticipantController