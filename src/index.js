const { Router } = require('express')

const routes = Router()

const tasksRoutes = require("./tasks.routes")

routes.use("/tasks", tasksRoutes)

module.exports = routes