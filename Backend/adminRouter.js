const express = require('express')
const router = express.Router()
const AdminController = require('../controller/AdminController')
const middlewaresAuth = require('../middlewares/auth')

router.post('/add', middlewaresAuth, AdminController.addBlog)
router.delete('/delete/:id', middlewaresAuth, AdminController.deleteBlog)
module.exports = router