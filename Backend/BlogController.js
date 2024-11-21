const Blog = require('../modules/Blogs')

const Blog_index = (req, res) => {
    Blog.find()
        .then((result) => res.send(result))
        .catch((err) => console.log(err))
}

const findBlog = (req, res) => {
    let id = req.params.id
    Blog.findById(id)
        .then((result) => {
            res.json({ result, link: './index.html' })
        })
        .catch((err) => console.log(err))
}

module.exports = { Blog_index, findBlog, }