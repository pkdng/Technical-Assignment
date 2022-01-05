const express = require("express")
const router = express.Router()

const instructorRoutes = require("./instructor")
const courseRoutes = require("./course")
const participantRoutes = require("./participant")

router.get("/", (req, res) => {
    res.status(200).send({status : "server is ready"})
})

router.use("/instructor", instructorRoutes)
router.use("/course", courseRoutes)
router.use("/participant", participantRoutes)

module.exports = router