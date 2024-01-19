const { Router } = require("express")

const TasksController = require('./TasksController')

const tasksRoutes = Router()

const tasksController = new TasksController()

tasksRoutes.post("/", tasksController.create)

module.exports = tasksRoutes