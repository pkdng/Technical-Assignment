const express = require('express')
const route = require('express').Router()
const app = express()
const port = 3000

const hewan = [
    {id: 1, nama: 'Snowy', spesies: 'kucing'},
    {id: 2, nama: 'Blacki', spesies: 'anjing'},
    {id: 3, nama: 'Molly', spesies: 'kucing'},
    {id: 4, nama: 'Milo', spesies: 'kelinci'},
    {id: 5, nama: 'Rere', spesies: 'kucing'},
]

app.use(express.json())

const errorHandling = function(err, req, res, next){
    res.status(500).json(err)
}

const idChecker = function(req, res, next){
    const index = hewan.findIndex((u) => u.id === +req.params.id)

    if(index === -1){
        next({
            message : "ID not valid"
        })
    }else{
        next()
    }
}

const loggerMiddleware = (req, res, next) => {
    console.log("this is logger")
    next()
}

const postChecker = function (req, res, next){
    if(req.body['spesies'] === 'kucing' || req.body['spesies'] === 'anjing' || req.body['spesies'] === 'kelinci'){
        next()
    }else{
        next({
            message : "Spesies not valid"
        })
    }
}

app.use('/hewan', loggerMiddleware, route)

route.get('/', (req, res) => {
    res.send({
        message : "Success get data pet",
        hewan : hewan
    })
})

route.get('/:id', idChecker, (req, res) => {
    const data = hewan.filter((u) => u.id === Number(req.params.id))
    
    res.send({
        message : "Success get data pet",
        hewan : data
    })
})

route.post('/', postChecker, (req, res) => {
    const data = {
        id : hewan.length+1,
        nama : req.body['nama'],
        spesies : req.body['spesies']
    }

    hewan.push(data)
    res.status(201).send({
        message : "Success adding data pet",
        hewan : hewan
    })
})

route.put('/:id', postChecker, idChecker, (req, res) => {
    const index = hewan.findIndex((u) => u.id === +req.params.id)
    const update = {id : +req.params.id, ...req.body}

    hewan[index] = update
    res.status(200).send({
        message : `Success updated data where id = ${index+1}`,
        hewan : hewan
    })
})

route.delete('/:id', idChecker, (req, res) => {
    const index = hewan.findIndex((u) => u.id === +req.params.id)
    
    hewan.splice(index,1)
    res.send({
        message : `Success delete data where id = ${index+1}`,
        hewan : hewan
    })   
})

app.use(errorHandling)
app.listen(port, () => {
    console.log("server run")
})

