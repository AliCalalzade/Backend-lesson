const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const blogRouter = require('./routes/blogRouter')
const adminRouter = require('./routes/adminRouter')
const authRouter = require('./routes/authRouter')

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json({ extended: true }))

const dbURL = ''
mongoose.connect(dbURL)
    .then((result) => app.listen(3000, () => {
        console.log('3000 portu dinleniyor...');
    }))
    .catch((err) => console.log(err))

app.use((req, res, next) => {
    console.log(req.method);
    next()
})
app.use(blogRouter)
app.use('/admin', adminRouter)
app.use('/auth', authRouter)
app.use((req, res) => {
    res.status(404).json({ message: 'yalnış istek geldi' })
})
