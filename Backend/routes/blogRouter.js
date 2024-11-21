const express = require('express')
const router = express.Router()
const BlogController = require('../controller/BlogController')

router.get('/', BlogController.Blog_index)
router.get('/:id', BlogController.findBlog)
module.exports = router
