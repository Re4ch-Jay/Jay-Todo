const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    todo: {
        type: String,
        require: true
    }
}, {timestamps: true})

const Todo = mongoose.model('Todos', todoSchema)

module.exports = Todo;