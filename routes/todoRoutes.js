const express = require('express')
const router = express.Router()
const todoControllers = require('../controllers/todoControllers')


router.get('/todo', todoControllers.get_todo)
router.post('/todo', todoControllers.post_todo)
router.get('/todo/:id', todoControllers.delete_todo)
router.delete('/todo/:id', todoControllers.delete_todo)


module.exports = router;