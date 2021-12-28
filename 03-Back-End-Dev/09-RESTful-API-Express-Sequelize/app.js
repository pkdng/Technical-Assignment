const { sequelize, Hewan } = require('./models/index')

const express = require('express')

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extended: true}))

function checkConnection() {
    sequelize
        .authenticate()
        .then(() => {
            console.log('Connection has been established successfully')
        })
        .then(() => {
            Hewan.sync().then(() => console.log('table Hewan created'))
        })
        .catch(err => {
            console.error('Unable to connect to the database:', err)
        })
}

app.get('/hewan', async (req, res) => {
    await Hewan.findAll().then(result => {
        res.status(200).send({
            message : "Ok",
            data    : result
        })
    }).catch(err => {
        res.status(500).send({
            message : err
        })
    })
})

app.get('/hewan/:id', async (req, res) => {
    await Hewan.findOne({
        where : { id : req.params.id }
    }).then(result => {
        if(result) {
            res.status(200).send({
                message : "Ok",
                data    : result
            })
        }else {
            res.status(404).send({
                message : "Not Found"
            })
        }
    }).catch(err => {
        res.status(500).send({
            message : err
        })
    })
})

app.post('/hewan', async (req, res) => {
    try {
        const newHewan = {
            nama : req.body['nama'],
            namaSpesies : req.body['namaSpesies'],
            umur : req.body['umur']
        }

        await Hewan.create(newHewan)
        res.status(201).json({
            message : "Added",
            data : newHewan
        })
    } catch(err) {
        res.status(500).json({
            message : err
        })
    }
})

app.patch('/hewan/:id', async (req, res) => {
    try {
        const hewan = {
            nama : req.body['nama'],
            namaSpesies : req.body['namaSpesies'],
            umur : req.body['umur']
        }
    
        await Hewan.update(hewan, {
            where : { id : req.params.id }
        })
        res.status(200).json({
            message : "Updated",
            data : hewan
        })
    } catch(err) {
        res.status(500).json({
            message : err
        })
    }
})

app.delete('/hewan/:id', async (req, res) => {
    try {
        await Hewan.destroy({
            where : { id : req.params.id }
        })
        res.status(200).json ({
            message : "Deleted"
        })
    } catch(err) {
        res.status(500).json ({
            message : err
        })
    }
})

app.listen(port, () => {
    console.log("server is listening on port",port)
    checkConnection()
})

