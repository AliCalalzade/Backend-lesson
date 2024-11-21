const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlogSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    short: {
        type: String,
        require: true
    },
    long: {
        type: String,
        require: true
    }
})
//  { timestamps: true }

const Blog = mongoose.model('Blog', BlogSchema)
module.exports = Blog
