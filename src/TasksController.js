
class TasksController {
  create(request, response){
    const {title} = request.body
    response.json({title})
  }
}

module.exports = TasksController