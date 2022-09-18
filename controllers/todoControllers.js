const Todo = require('../models/todo')

const get_todo = (req, res) => {
    Todo.find()
        .then(result => res.render('todo', {todos: result}))
        .catch(err => console.log(err))
}

const post_todo = (req, res) => {
    const todo = new Todo(req.body)
    todo.save()
        .then(result => res.redirect('/todo'))
        .catch(err => console.log(err))
}

const delete_todo = (req, res) => {
    const id = req.params.id
    Todo.findByIdAndDelete(id)
        .then(result => res.redirect('/todo'))
        .catch(err => console.log(err))
}

module.exports = {
    get_todo,
    post_todo,
    delete_todo,
}