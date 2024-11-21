const Blog = require('../modules/Blogs')

const addBlog = (req, res) => {
    const blog = new Blog(req.body)
    console.log(req.body)
    blog.save()
        .then((request) => res.json(request))
        .catch((err) => console.log(err))
}

const deleteBlog = (req, res) => {
    Blog.findByIdAndDelete(req.params.id)
        .then(() => res.json({ message: 'Başarılı şekilde silindi' }))
        .catch((err) => console.log(err))
}

module.exports = { addBlog, deleteBlog }