const jwt = require('jsonwebtoken')
const User = require('../modules/User')
const bcrypt = require('bcrypt')

const maxAge = 60 * 60 * 24
const createToken = (id) => {
    return jwt.sign({ id }, '', { expiresIn: maxAge })
}
// '' -- içini doldurun
const login = async (req, res) => {
    const { userName, Password } = req.body
    try {
        const user = await User.findOne({ userName })
        if (user) {
            const auth = await bcrypt.compare(Password, user.Password)
            if (auth) {
                const id = user._id
                const token = createToken(id)
                res.json({ token, id })
            } else {
                res.status(404).json({ message: 'parola hatalı' })
            }

        } else {
            res.status(404).json({ message: 'kullanıcı yok' })
        }
    } catch (err) {
        console.log(err)
    }
}
const signup = (req, res) => {
    const user = new User(req.body)
    console.log(req.body)
    user.save()
        .then((result) => {
            const id = result._id
            const token = createToken(id)
            res.json({ token, id })
        })
        .catch((err) => console.log(err))
}

module.exports = {
    login, signup
}
